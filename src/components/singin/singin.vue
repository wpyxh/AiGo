<template>
	<div class="singin">
		<form class="login-form">
			<h1>登录</h1>
			<div class="txtb">
				<input type="text" @focus="userNameAddClass" @blur="userNameRemoveClass" 
					v-model="singInusername" ref="username"/>
				<span data-placeholder="Username"></span>
			</div>
			<div class="txtb">
				<input type="password" @focus="passWordAddClass" @blur="passWordRemoveClass" 
					v-model="singInpassword" ref="password"/>
				<span data-placeholder="Password"></span>
			</div>
			
			<div class="logbtn" @click="singIn">登录</div>
			<div class="bottom-text">
				没有账号?<a @click="singup">点击注册</a>
			</div>
		</form>
	</div>
</template>

<script>
	import {getSingin} from '@/network/singin.js'
	export default{
		data(){
			return{
				singInusername:'',
				singInpassword:''
			}
		},
		methods:{
			userNameAddClass(){
				this.$refs.username.classList.add("focus");
			},
			userNameRemoveClass(){
				if(this.$refs.username.value=="")
				this.$refs.username.classList.remove("focus");
			},
			passWordAddClass(){
				this.$refs.password.classList.add("focus");
			},
			passWordRemoveClass(){
				if(this.$refs.password.value=="")
				this.$refs.password.classList.remove("focus");
			},
			singIn(){
				
				if(this.singInusername==""||this.singInpassword==""){
					this.$toast.show("账号或密码不能为空")
				}else{
					
					getSingin(this.singInusername,this.singInpassword).then((data)=>{
					if(data.data[0].result=="fail"){
						this.$toast.show("账号或密码错误")
					}else{//登录成功
						//把账号发给vuex
						//this.$store.commit('userName',this.singInusername)
						//把账号存储到本地session Storage
						sessionStorage.setItem('username',this.singInusername);
						
						this.$refs.username.value=""
						this.$refs.password.value=""
						this.$refs.username.classList.remove("focus");
						this.$refs.password.classList.remove("focus");
						this.$router.push("/home")
						this.$toast.show("登录成功");
					}
				}).catch(err=>{
					console.log('失败')
				})
				}
			},
			singup(){
				this.$router.push("/singup")
			}
		}
	}
</script>

<style scoped>
	.login-form{
	width: 100%;
	height: 100%;
	background: #f1f1f1;
	padding: 80px 40px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.login-form h1{
	text-align: center;
	margin-bottom: 60px;
}
.txtb{
	border-bottom: 2px solid #adadad;
	position: relative;
	margin: 30px 0;
}
.txtb input{
	width: 100%;
	font-size: 15px;
	border: none;
	background: none;
	outline: none;
	color: #333;
	padding: 0 5px;
	height: 40px;
}
.txtb span::before{
	content: attr(data-placeholder);
	position: absolute;
	top: 50%;
	left: 5px;
	color: #adadad;
	transform: translateY(-50%);
	z-index: -1;
	transition: .5s;
}
.txtb span::after{
	content: "";
	position: absolute;
	left: 0;
	bottom: -2px;
	width: 0%;
	height: 2px;
	transition: .5s;
	background: linear-gradient(120deg,#2980b9,#9b59b6);
}
.focus+span::before{
	top: -5px;
}
.focus+span::after{
	width: 100%;
}
.logbtn{
	width: 100%;
	height: 50px;
	color: white;
	border:none;
	outline: none;
	transition: .5s;
	background-image: linear-gradient(120deg,#2980b9,#9b59b6,#2980b9);
	background-size: 200%;
	text-align: center;
	line-height: 50px;
}
.logbtn:hover{
	background-position: right;
}
.bottom-text{
	margin-top: 50px;
	font-size: 15px;
	text-align: center;
}
.bottom-text a{
	color: #D81E06;
}
</style>