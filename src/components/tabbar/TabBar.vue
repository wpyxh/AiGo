<template>
	<div id="tab-bar">
		<tab-bar-item path="/home">
		<img slot="item-icon" src="@/assets/img/tabbar/home.svg" />
		<img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" />
		<div slot="item-text"  class="text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
		<img slot="item-icon" src="@/assets/img/tabbar/category.svg" />
		<img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" />
		<div slot="item-text"  class="text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/shopcart">
		<img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" />
		<img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" />
		<div slot="item-text"  class="text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile">
		<img slot="item-icon" src="@/assets/img/tabbar/Profile.svg" />
		<img slot="item-icon-active" src="@/assets/img/tabbar/Profile_active.svg" />
		<div slot="item-text"  class="text">我的</div>
		</tab-bar-item>
	</div>
</template>

<script>
import tabBarItem from "./TabBarItem"
export default {
  name: 'TabBar',
  data(){
  	return{

  	}
  },
  components:{
  	tabBarItem ,
  },
}
</script>

<style scoped>
 #tab-bar{
 	position: fixed;
 	display: flex;
 	left: 0;
 	right: 0;
 	bottom: 0;
 	background: #f6f6f6;
 	box-shadow: 0 -1.5px 1px rgb(100,100,100,.1);
 	z-index: 999;
 }
 #tab-bar img{
 	margin-bottom: 3px;
 }
</style>