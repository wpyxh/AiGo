<template>
	<div class="details-banner">
		 <el-carousel trigger="click">
      <el-carousel-item v-for="item in bannerImgs.length" :key="item" >
       <img v-lazy="bannerImgs[item-1]"/>
      </el-carousel-item>
   </el-carousel>
	</div>
</template>

<script>
	
	export default{
		name:'banner',
		props:{
			bannerImgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
	}
</script>

<style>
	.details-banner img{
		width: 100%;
		height: 100%;
	}
	.details-banner .el-carousel__container{
		width: 100%;
		height: 400px;
	}
	.details-banner .el-carousel__indicators {
		width: 80%;
		text-align: center;
	}
	.details-banner .el-carousel__indicators li {
		display: inline-block;
	}
	.details-banner .el-carousel__indicators li .el-carousel__button{
		border-radius: 50%;
		width: 10px;
		height: 10px;
	}
</style>