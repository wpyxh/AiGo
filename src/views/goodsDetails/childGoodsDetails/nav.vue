<template>
	<div class="goods-details-nav">
		<details-nav-bar class="nav">
			<div slot="nav-left" class="nav-left" @click="backHome">
				<img src="@/assets/img/common/back.svg"/>
			</div>
			<div slot="nav-between" class="nav-between">
				<div v-for="(item,index) in navTitle" 
					class="nav-item" :class="{active:index===clickIndex}"
					@click="clickNavItem(index)">
					<span>{{item}}</span>
				</div>
			</div>
		</details-nav-bar>
	</div>
</template>

<script>
	import detailsNavBar from '@/components/navbar/NavBar.vue'
	export default{
		data(){
			return{
				navTitle:['商品','参数','评论','推荐'],
				clickIndex:0
			}
		},
		components:{
			detailsNavBar,
		},
		methods:{
			clickNavItem(index){
				this.clickIndex=index;
				this.$emit('navIndex',index)
			},
			backHome(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.goods-details-nav{
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
 .nav-left{
		line-height: 56px;
 	}
 	.nav-left img{
 	 	width: 24px;
 	 }
 	 .nav-between{
 	 	text-align: center;
 	 	display: flex;
 	 }
 	 .nav-item{
 	 	display: inline-block;
 	 	text-align: center;
 	 	flex: 1;
 	 	font-size: 14px;
 	 }
 	 .active{
 	 	color: #D81E06;
 	 }
</style>
