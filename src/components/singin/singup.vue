<template>
	<div class="singin">
		<form class="login-form" ref="form1" onsubmit="return false" 
			action="@/components/singin/RegUser.php" method="post">
			<h1>注册</h1>
			<div class="txtb">
				<input type="text" @focus="userNameAddClass" @blur="userNameRemoveClass" 
					v-model="singUpuserName" ref="usernameUp"/>
				<span data-placeholder="Username"></span>
			</div>
			<div class="txtb">
				<input type="password" @focus="passWordAddClass" @blur="passWordRemoveClass" 
					v-model="singUppassWord" ref="passwordUp"/>
				<span data-placeholder="Password"></span>
			</div>
			<div class="logbtn" @click="singUp">注册</div>
		</form>
	</div>
</template>

<script>
	import {getSingup} from '@/network/singin.js'
	
	export default{
		data(){
			return{
				singUpuserName:'',
				singUppassWord:''
			}
		},
		methods:{
			userNameAddClass(){		
				this.$refs.usernameUp.classList.add("focus");
			},
			userNameRemoveClass(){
				if(this.$refs.usernameUp.value=="")
				this.$refs.usernameUp.classList.remove("focus");
			},
			passWordAddClass(){
				this.$refs.passwordUp.classList.add("focus");
			},
			passWordRemoveClass(){
				if(this.$refs.passwordUp.value=="")
				this.$refs.passwordUp.classList.remove("focus");
			},
			singUp(){
				if(this.singUpuserName==""||this.singUppassWord==""){
					this.$toast.show("账号或密码不能为空")
				}else if(this.singUpuserName.length<5){
					this.$toast.show("账号长度不能低于5位")
				}else if(this.singUppassWord.length<8){
					this.$toast.show("密码长度不能低于8位")
				}
				else{
				getSingup(this.singUpuserName,this.singUppassWord).then((data)=>{
					if(data.data[0].result=='该账号已被注册'){
						this.$toast.show("该账号已被注册")
					}else{
						this.$toast.show("注册成功");
						this.$refs.usernameUp.value="";
						this.$refs.passwordUp.value="";
						this.$refs.usernameUp.classList.remove("focus");
						this.$refs.passwordUp.classList.remove("focus");
						setTimeout(()=>{
							this.$router.push("/singin")
						},2000)
					}
				}).catch(err=>{
					//console.log('失败')
				})
				}
				
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
</style>