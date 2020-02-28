<template>
  <div class="block">
    <el-carousel trigger="click" height="160px">
      <el-carousel-item v-for="item in banners.length" :key="item" >
       <img v-lazy="banners[item-1].image" @load="finishLoad"/>
      </el-carousel-item>
    </el-carousel>
 </div>
</template>
<script>
	export default{
		props:{
			banners:{
				type:Array,
				default(){
					return []
				},
			}
		},
		data(){
			return{
				isFinish:false
			}
		},
		methods:{
				finishLoad(){//走马灯图片加载完成后，获取tabControl的高度（不然获取的高度为图片还未加载完成的的高度）
					if(!this.isFinish){//会发射多次时间，只需要让它发射一次就可以了。
						this.$emit('finishLoad')
					}
				this.isFinish=true;
			},
				
		},
	}
</script>
<style>
  img{
 	 width: 100%;
 	 height: 100%;
 }
  .el-carousel__indicators {
		width: 80%;
		text-align: center;
	}
	 .el-carousel__indicators li {
		display: inline-block;
		padding: 12px 4px;
	}
	 .el-carousel__indicators li .el-carousel__button{
		border-radius: 50%;
		width: 10px;
		height: 10px;
	}
</style>