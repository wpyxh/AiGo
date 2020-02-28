<template>
	<div class="feature" @click="fetureClick">
		<img src="@/assets/img/home/recommend_bg.jpg" alt="" />
	</div>
</template>

<script>
	export default{
		methods:{
			fetureClick(){
				this.$toast.show('该功能尚未开通 ^_^')
			}
		}
	}
</script>

<style scoped>
	.feature{
		width: 100%;
	}
	.feature img{
		width: 100%;
	}
</style>