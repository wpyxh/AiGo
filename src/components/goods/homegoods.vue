<template>
	<div class="homegoods">
			<home-goods-item
				v-for="item in goods" @click.native="imgClick(item.iid)"
				:goodsitem="item" class="home-goods-item">
			</home-goods-item>
	</div>
</template>

<script>
	import homeGoodsItem from './homegoodsitem.vue'
	export default{
		components:{
			homeGoodsItem,
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				},
			}
		},
		methods:{
			imgClick(iid){//点击商品进入详情界面
				this.$router.push('/goodsDetails/'+iid)
			}
		}
	}
</script>

<style scoped>
	.homegoods{
		overflow: hidden;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}

</style>