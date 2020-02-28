<template>
	<div class="car-nav">
		<car-nav class="nav">
			<div slot="nav-left" class="car-left" @click="back">
				<img src="@/assets/img/common/back.svg"/>
			</div>
			<div slot="nav-between" class="car-between">购物车({{length}})</div>
			<div slot="nav-right" class="car-right" @click="stateClick">{{navState[navStateIndex]}}</div>
		</car-nav>
	</div>
</template>

<script>
	import carNav from '@/components/navbar/NavBar.vue'
	export default{
		data(){
			return{
				count:[],
				navState:['管理','完成'],
				navStateIndex:0
			}
		},
		components:{
			carNav,
		},
		methods:{
			back(){
				this.$router.back();
			},
			stateClick(){
				this.navStateIndex?this.navStateIndex=+false:this.navStateIndex=+true;
				this.$bus.$emit('stateIndex',this.navStateIndex)
			}
		},
		computed:{
			length(){
				return this.$store.state.carData.length;			
			}
		}
	}
</script>
<style scoped>
	.car-nav{
		width: 100%;
		height: 44px;
		position: fixed;
		left: 0;
 		right: 0;
 		top: 0;
 		z-index: 999;
	}
	.nav{
 		background: #fff;
 		color: #000;
 		cursor: pointer !important;
 	}
 	.car-left{
		line-height: 56px;
 	}
 	.car-left img{
 	 	width: 24px;
 	 }
	.car-between{
		font-size: 16px;
	}
</style>