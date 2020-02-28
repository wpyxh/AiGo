<template>
	<div class="car-goods-item" v-if="isShow" ref="carGoodsItem">
      <check-button class="check-button" 
					:is-checked="cargoods.checked"
					@click.native="checkedChange"></check-button>
					
		<div @click="goodsClick(cargoods.id)" class="info">
			<img v-lazy="cargoods.image" alt="" />
		<div class="goods-info">
			<p class="title">{{cargoods.title}}</p>
			<p class="desc">{{cargoods.desc}}</p>
		</div>
		<div class="price-count">
			<span class="price">￥{{cargoods.price}}</span>
			<span class="count">×{{cargoods.count}}</span>
		</div>
		</div>
		
	</div>
</template>

<script>
	import checkButton from './cheakButton.vue'
	export default{
		data(){
			return{
				isShow:true,
			}
		},
		props:{
			cargoods:{
				type:Object,
				default(){
					return {}
				}
			},
		},
		components:{
			checkButton,
		},
		methods:{
			checkedChange(){
				this.cargoods.checked=!this.cargoods.checked;
			},
			goodsClick(id){
				this.$router.push('/goodsDetails/'+id)
			}
		},
		mounted(){
				this.$bus.$on('delGoods',()=> {//删除商品
				if(this.cargoods.checked){
					for(let a=0;a<this.$store.state.carData.length;a++){//找到选中的商品，并删除
						if(this.$store.state.carData[a]==this.$store.state.carData.find(item => item===this.cargoods)){
							this.$store.dispatch('delelteGoods',a).then(result => {
								//删除商品成功后执行
								//console.log(result);
								this.$toast.show(result)
							})
						}
					}
				}
			})
				
		}
	}
</script>
	
<style scoped>
	.car-goods-item{
		width: 100%;
		height: 120px;
		padding: 10px 0;
		display: flex;
		position: relative;
		border-bottom: 3px solid #f6f6f6;
	}
	.check-button{
		position: relative;
		margin: 45px 5px 5px ;
	}
	.info{
		position: relative;
		height: 100%;
		width: calc(100% - 28px);
	}
	.car-goods-item img{
		height: 100px;
		width: 70px;
		border-radius: 8px;
	}
	.goods-info{
		position: absolute;
		top: 0;
		right: 0;
		width: calc(100% - 80px);
		height: 50px;
	}
	.car-goods-item .title{
		overflow: hidden;
		text-overflow: ellipsis;
    white-space: nowrap;
    color:#000;
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
	}
	.car-goods-item .desc{
		overflow: hidden;
		text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
	}
	.price-count{
		position: absolute;
		bottom: 0;
		right: 0;
		width: calc(100% - 80px);
		margin-left: 10px;
		height: 50px;
		line-height: 50px;
	}
	.price-count .price{
		color: #D81E06;
	}
	.price-count .count{
		position: absolute;
		right: 10px;
	}
</style>