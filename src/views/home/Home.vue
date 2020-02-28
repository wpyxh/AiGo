<template>
	<div class="home">
		<nav-bar class="nav-bar"></nav-bar>
		<tab-control :tabtext="['流行','新款','精选']" 
			@tabControlIndex="ControlIndex" 
			ref='tabControl1' v-show="isTabControlShow"></tab-control>
														<!--better-scroll区域-->
		<scroll class="content1" ref="scroll" :probe-type="3" :pull-up-load="true" 
			@scroll="backScroll" @pullingUp="loadMore">
			<banner :banners="banners" @finishLoad="tabFinishLoad"></banner>
			<recommends :recommends='recommends'></recommends>
			<feature></feature>
			<tab-control :tabtext="['流行','新款','精选']" @tabControlIndex="ControlIndex" ref='tabControl2'></tab-control>
			<home-goods :goods="goods[goods1[tabControlIndex]].list" ></home-goods>
		</scroll>
		
		<back-top class="backtop" @click.native="backTopClick" v-show="isBackTopShow"></back-top>
		
	</div>
</template>

<script>

import navBar from './navbar.vue'
import banner from './banner.vue'
import recommends from './recommends.vue'
import feature from './feature'
import tabControl from '@/components/tabcontrol/tabcontrol.vue'
import homeGoods from '@/components/goods/homegoods.vue'
import backTop from '@/components/backtop/backtop.vue'

import scroll from '@/components/scroll/scroll.vue'

import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
import {debounce} from '@/common/utils/utils.js'
export default{
	components:{
		navBar,
		banner,
		recommends,
		feature,
		tabControl,
		homeGoods,
		scroll,
		backTop,
		
	},
	data(){
		return {
			banners:[],//走马灯数据
			recommends:[],//推荐数据
			goods:{
				//商品数据
				'pop':{page:0,list:[]},
				'new':{page:0,list:[]},
				'sell':{page:0,list:[]},
			},
			goods1:['pop','new','sell'],
			tabControlIndex:0,//tabcontrol索引
			isBackTopShow:false,
			tabOffsetTop:0,//存储tab-control的位置高度
			isTabControlShow:false,//控制scroll之外的tab-control的v-show
			saveY:0,
		}
	},
	activated(){
		this.$refs.scroll.refresh();
		this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);//重新回到页面时，页面回到离开前的位置
		
	},
	deactivated(){
		this.saveY=this.$refs.scroll.scroll.y;//保留页面离开前的位置
		
	},
	created(){
		//请求走马灯图片
		this.getHomeMultidata();
		
		//请求商品数据
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');
	},
	mounted(){
		//使用防抖，在每张图片加载完成就刷新一次，会浪费性能。
		const refresh=debounce(this.$refs.scroll.refresh,1)
		//每次goods图片加载完成就刷新一次BScroll的scrollHight的高度，
		//解决图片加载较慢时发生卡顿的情况
		this.$bus.$on('imgLoadFinish',()=>{
			refresh();
		})
		
		
	},
	methods:{
		getHomeMultidata(){//请求banner中的数据
			getHomeMultidata().then(res=>{
			this.banners=res.data.banner.list;
			this.recommends=res.data.recommend.list;
		})
		},
		getHomeGoods(type){//请求商品数据
			const page=this.goods[type].page+1;
			getHomeGoods(type,page).then(res=>{
			this.goods[type].list.push(...res.data.list);
			this.goods[type].page++;
			
			this.$refs.scroll.scroll.finishPullUp();//上拉加载更多
		})
		},
		ControlIndex(index){
			//修改tabcontrol索引
			this.tabControlIndex=index;
			//让scroll之外和之内的teb-control的点击显示保持一致
			this.$refs.tabControl1.clickindex=index;
			this.$refs.tabControl2.clickindex=index;
		},
		backTopClick(){
			this.$refs.scroll.scroll.scrollTo(0,0,1000);//回到顶部
	},
		backScroll(position){//监听scroll滚动
			//设置backtop的显示和隐藏
			this.isBackTopShow=-(position.y)>1000;
			//设置tab-control的显示和隐藏
			this.isTabControlShow=-(position.y)>this.tabOffsetTop;
		},
		loadMore(){//上拉加载更多
			this.getHomeGoods(this.goods1[this.tabControlIndex]);//请求下一页数据
		},
		tabFinishLoad(){//获得tab-control的位置高度
			this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
	},
	}
	

}
</script>
<style scoped>
	.home{
		width: 100%;
		height: 100vh;
		padding-top: 44px;
		position: relative;
	}
	.tabcontrol{
		/*吸顶效果*/
		position: sticky;
		top: 44px;
	}
	.content1{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.backtop{
		position: fixed;
		right: 8px;
		bottom: 60px;
		width: 40px;
		height: 40px;
	}
</style>