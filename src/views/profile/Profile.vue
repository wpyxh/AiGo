<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="nav-between">
        {{username}}
      </div>
    </nav-bar>
    
    <div>
      <user-info></user-info>
    </div>
    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <div class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </div>

    
      <list-view :list-data="orderList" class="order-list"></list-view>
      <list-view :list-data="serviceList" class="service-list"></list-view>
      <list-view :list-data="moreList" class="more-list"></list-view>
  </div>

</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';
import UserInfo from './childComps/UserInfo.vue';
import ListView from './childComps/ListView.vue';

export default {
  name: 'Profile',
  data() { 
    return {
        orderList: [
          {icon: 'message', iconColor: '#ff8198', info: '我的消息'},
          {icon: 'shopping', iconColor: '#fc7b53', info: '积分商城'},
          {icon: 'membercar', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'cart', iconColor: '#ff8198', info: '我的购物车'},
          {icon: 'downapp', iconColor: '#ff8198', info: '下载购物APP'},
        ],
        moreList:[
          {icon: 'set', iconColor: '#ff8198', info: '设置'},
          {icon: 'more', iconColor: '#ff8198', info: '更多'},
        ],
       userStatus: '未登录',
    }
    
  },
  methods:{
    test(){


    }
  },
  components:{
    NavBar,
    UserInfo,
    ListView
  },
  computed:{
  	username(){
				if(!sessionStorage.getItem("username")){
					return this.userStatus
				}else{
					return sessionStorage.getItem("username")
				}
			}
  }
 }
</script>

<style scoped>
#profile{
  height: 100vh;
  position: relative;
  background-color: #f2f2f2;
}
.profile-nav{
  background-color: #D81E06;
  color: #fff;
 border-bottom: 2px solid rgba(100, 100, 100, .1);
}
  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px ;
    
  }
  .order-list, .more-list {
    margin-top: 12px;
  }

</style>