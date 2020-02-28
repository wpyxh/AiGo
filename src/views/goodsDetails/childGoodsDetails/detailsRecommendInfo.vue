<template>
	<div class="recommend-info">
		<recommends-item v-for="(item,index) in recommends" 
			:recommends="recommends[index]"
			@click.native="imgClick(item.shop_id)"></recommends-item>
	</div>
</template>

<script>
	import recommendsItem from '@/components/goods/detailsrecommendsitem.vue'
	export default{
		components:{
			recommendsItem
		},
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
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
	.recommend-info{
		overflow: hidden;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
</style>