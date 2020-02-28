<template>
	<div class="shop-car">
		<shop-car-nav class="shop-car-nav"></shop-car-nav>
		<scroll class="content" ref="scroll">
		<car-goods></car-goods>
		</scroll>
				<car-bottom></car-bottom>
	</div>
</template>

<script>
	import shopCarNav from './childShopCart/carNav.vue'
	import carGoods from './childShopCart/carGoods.vue'
	import carBottom from './childShopCart/carBottom.vue'
	
	import scroll from '@/components/scroll/scroll.vue'
	export default{
		components:{
			shopCarNav,
			carGoods,
			carBottom,
			scroll,
		},
		activated(){
			this.$refs.scroll.refresh();
		},
	}
</script>

<style scoped>
	.shop-car{
		width: 100vw;
		position: relative;
		height: 100vh;
	}
	.shop-car-nav{
		position: relative;
		background: #fff;
		height: 44px;
	}
	.content{
		position: absolute;
		overflow: hidden;
		top: 44px;
		bottom: 79px;
		left: 0;
		right: 0;
	}

</style>