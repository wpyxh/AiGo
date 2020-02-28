<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <img :src="getThumb()" class="privateImage-svg left"/>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div @click="singIn">{{username}}</div>
        </slot>
        <div class="phone">
          <span>
            <img src="@/assets/img/profile/phone.svg" alt="" class="icon-mobile"/>
          </span>
          <span class="phonetext">
          	<slot name="user-phone">暂无绑定手机号</slot>
          </span>
          
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
	export default {
		name: "UserInfo",
		data(){
			return{
				singin:'登录/注册',
			}
		},
		methods:{
			singIn(){
				if(!this.$store.state.username){
					this.$router.push("/singin")
				}else{
					return false;
				}
			},
			
			getThumb() {
			   let thumb = {
			    0: require("@/assets/img/profile/avatar.svg"),
			    1: require("@/assets/img/profile/touxiang.svg"),
			   };
			   if(this.$store.state.username){
			   	return thumb[1]
			   }else{
			   	return thumb[0]
			   }   
  },
			
		},
		computed:{
			username(){
				if(this.$store.state.username){
					return this.$store.state.username
				}else{
					return this.singin;
			}
			}
		}
	}
</script>

<style scoped>
  #user-info {
    background-color: #Da1E06;
    padding: 15px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 24px;
    height: 24px;
    left: -15px;
    top: 0px;
  }
  .phonetext{
  	margin-left: 10px;
  }
</style>
