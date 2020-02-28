<template>
		<div class="goods-details">

			<nav-bar class="nav-bar" @navIndex="navIndex" ref="nav"></nav-bar>
			
			<scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" 
			@scroll="backScroll">
				<banner :bannerImgs='bannerImgs'></banner>
				<details-goods-info :goods="goods"></details-goods-info>
				<details-shop-info :shop='shop'></details-shop-info>
				<detail-goods :detailInfo="detailInfo" @imageLoad="detailImageLoad"></detail-goods>
				<detail-param ref="param" :paramInfo="paramInfo"></detail-param>
				<details-comment-info ref="comment" :commentInfo="commentInfo"></details-comment-info>
				<details-recommend-info :recommends="recommendsInfo" ref="recommend"></details-recommend-info>
			</scroll>
			<details-bottom @addToCart="addCar"></details-bottom>
			<back-top class="backtop" @click.native="backTopClick" v-show="isBackTopShow"></back-top>
		</div>
		
</template>

<script>
	import navBar from './childGoodsDetails/nav.vue'
	import banner from './childGoodsDetails/banner.vue'
	import detailsGoodsInfo from './childGoodsDetails/detailsGoodsInfo.vue'
	import detailsShopInfo from './childGoodsDetails/detailsShopInfo.vue'
	import scroll from '@/components/scroll/scroll.vue'
  import detailGoods from './childGoodsDetails/detailsGoods.vue';
	import detailParam from './childGoodsDetails/detailsParam.vue';
	import detailsCommentInfo from './childGoodsDetails/detailsCommentInfo.vue';
	import detailsRecommendInfo from './childGoodsDetails/detailsRecommendInfo.vue';
	import detailsBottom from './childGoodsDetails/detailsBottom.vue';
	import backTop from '@/components/backtop/backtop.vue'
	
	import {getGoodsDetails,Goods,Shop,GoodsParam,getRecommend} from '@/network/details.js'
	export default{
		name:'goodsDetails',
		components:{
			navBar,
			banner,
			detailsGoodsInfo,
			detailsShopInfo,
			scroll,
			detailGoods,
			detailParam,
			detailsCommentInfo,
			detailsRecommendInfo,
			backTop,
			detailsBottom
		},
		data(){
			return {
				goods:{},//商品基本信息
				shop:{},//店铺信息
				goodsId:null,//goods的id
				bannerImgs:[],//走马灯图片
				detailInfo: {},//商品详情信息
				paramInfo:{},//商品参数信息
				isBackTopShow:false,
				commentInfo: {},//评论信息
				recommendsInfo:[],//推荐信息
				posY:[],
				scroll:null,
				currentIndex:0,//同步nav主题索引
			}
		},
		created(){
			this.goodsId=this.$route.params.iid;
			
			this.getGoodsDetails(this.goodsId);
			
			this.getRecommend();
		},
		methods:{
			getGoodsDetails(id){
				getGoodsDetails(id).then(res=>{
					this.bannerImgs.push(...res.result.itemInfo.topImages);//请求走马灯图片
					//获取商品信息
					this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.services);
					//console.log(this.goods)
					//获取店铺信息
					this.shop = new Shop(res.result.shopInfo);
					//console.log(this.shop)
					
					//获取商品详细信息
          this.detailInfo = res.result.detailInfo;
          //console.log(this.detailInfo)
          
          //获取商品参数信息
          this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
          //console.log(this.paramInfo)
          
          //获取评论信息
          if(res.result.rate.cRate !== 0){
            this.commentInfo = res.result.rate.list[0];
          }
         
			})
			},
			detailImageLoad(){
				this.$refs.scroll.refresh();//对better-scroll进行刷新，重新撑起高度，防止下拉卡顿
				
						//保存每个组件位置
						this.posY.push(0);
          	this.posY.push(this.$refs.param.$el.offsetTop);
          	this.posY.push(this.$refs.comment.$el.offsetTop);
          	this.posY.push(this.$refs.recommend.$el.offsetTop);
          	//console.log(this.posY)
   	 },
			getRecommend(){
				getRecommend().then((res)=>{
					//获取推荐信息
					this.recommendsInfo=res.data.list;
					//console.log(this.recommendsInfo)
				})
			},
			
   	 backTopClick(){
			this.$refs.scroll.scroll.scrollTo(0,0,1000);//回到顶部
	},
   	 backScroll(position){//监听scroll滚动
			//设置backtop的显示和隐藏
			this.isBackTopShow=-(position.y)>1000;
			//console.log(position.y)
			//判断y轴位置对应导航主题
			let len=this.posY.length
			for(let i=0;i<len;i++){
				if(this.currentIndex!=i&&((i<len-1 && -(position.y) >= this.posY[i] && -(position.y)< this.posY[i+1])||
				(i===len-1&&-(position.y) >= this.posY[i]))){
					this.currentIndex=i;
					this.$refs.nav.clickIndex=this.currentIndex;
				}
			}
		},
		
		navIndex(index){
			this.$refs.scroll.scroll.scrollTo(0,-(this.posY[index]),1000)
		},
		addCar(){
			//加入购物车数据
			//console.log("已加入购物车")
			//把商品数据传入Vuex中方便管理
			const carGoodsData={};
			carGoodsData.image=this.bannerImgs[0];
			carGoodsData.title=this.goods.title;
			carGoodsData.desc=this.goods.desc;
			carGoodsData.price=this.goods.realPrice;
			carGoodsData.id=this.goodsId;
			this.$store.dispatch('addCar',carGoodsData).then(result => {
				//添加商品成功后执行
				//console.log(result)
				//$toast是自己写的插件
				this.$toast.show(result);
			})
		}
		},
		mounted(){
			this.$bus.$on('recommendsLoad',()=>{
				this.$refs.scroll.refresh();//对better-scroll进行刷新，重新撑起高度，防止下拉卡顿
			})
		}
	}
</script>

<style scoped>
	.goods-details{
		position: relative;
		height: 100vh;
		z-index: 1000;
		background: #fff;
	}
	.nav-bar{
		position: relative;
		background: #fff;
		height: 44px;
		
	}
	.content{
		position: absolute;
		top: 44px;
		bottom: 58px;
		left: 0;
		right: 0;
	}
	.goods-details .backtop{
		position: fixed;
		right: 8px;
		bottom: 60px;
		width: 40px;
		height: 40px;
	}
</style>