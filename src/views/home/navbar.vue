<template>
		<div class="home-nav">
			<nav-bar class="nav">
				 <div slot="nav-left" class="nav-left" @click="toCategory">
				 	 <img src="@/assets/img/home/caidan.svg"/>
				 </div>
				 <div slot="nav-between" class="nav-between">
					<el-input
				    placeholder="请输入内容"
				    suffix-icon="el-icon-search"
				    v-model="input">
				 </el-input>
				 </div>
				 <div slot="nav-right" class="nav-right" @click="singin">
				 		<span class="singin">{{singState}}</span>
				 </div>
			</nav-bar>
	</div>
</template>

<script>
import navBar from '@/components/navbar/NavBar.vue'

export default{
	components:{
		navBar,
	},
	data() {
    return {
      input: '',
      state:'登录'
    }
 },
 methods:{
 		toCategory(){
 			this.$router.push('/category');
 		},
 		singin(){
 			if(this.$store.state.username==''){
 				this.$router.push('/singin');
 			}else{
 				this.$store.commit("changeSing");
 				this.$toast.show("退出成功");
 			}
 			
 		}
 },
 computed:{
 	singState(){
 		if(this.$store.state.username==''){
 			this.state='登录'
 			return this.state
 		}else{
 			this.state='退出'
 			return this.state
 		}
 	}
 }
}
</script>
<style>
	.home-nav{
		width: 100%;
		height: 44px;
		position: fixed;
		left: 0;
 		right: 0;
 		top: 0;
 		z-index: 999;
	}
	.nav{
 		background: #d81E06;
 		color: #FFF;
 		cursor: pointer !important;
 	}
 .nav-left{
		line-height: 56px;
 	}
 	.nav-left img{
 	 	width: 24px;
 	 }
	.el-input__inner{
		border-radius: 30px;
		height: 30px;
		background: #f7f7f7;
	}
	.nav-right span{
		font-family: PingHei,Lucida Grande,Lucida Sans Unicode,STHeiti,Helvetica,Arial,Verdana,"sans-serif";
		font-size: 14px;
	}
</style>