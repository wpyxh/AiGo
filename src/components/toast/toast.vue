<template>
	<div class="toast" v-show="isShow">
		<span>{{message}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				message:'',
				isShow:false,
			}
		},
		methods:{
			show(message='yxh哈哈哈哈',time=1000){
				this.isShow=true;
				this.message=message;
				setTimeout(() => {
					this.isShow=false;
					this.message='';
				},time)
			}
		}
	}
</script>

<style>
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 180px;
		height: 50px;
		background-color: rgba(0,0,0,0.5);
		text-align: center;
		border-radius: 10px;
		z-index: 1000;
	}
	.toast span{
		color: #FFF;
		line-height: 50px;
	}
</style>