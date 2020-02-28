<template>
	<div class="car-goods">
		<car-goods-item v-for="(item,index) in goods"
		:key="index"
		:cargoods="item"></car-goods-item>
	</div>
</template>

<script>
	import carGoodsItem from './carGoodsItem.vue'
	export default{
		components:{
			carGoodsItem,
		},
		computed:{
			goods(){
				return this.$store.state.carData;
			}
		}
	}
</script>

<style>
</style>