<template>
	<div class="tab-bar-item" @click="itemClick">
		<!--包装个div是为了防止替换出错-->
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :class="{active:isActive}"><slot name="item-text"></slot></div>
		<!--<img src="../../assets/img/tabbar/home.svg" />
		<div class="text">首页</div>-->
	</div>
</template>

<script>
	export default {
  name: 'TabBarItem',
  props:{
  	path:String
  },
  data(){
  	return{
  		//isActive:false,
  	}
  },
  computed:{
  	isActive(){
  		//this.$route活跃路由
  		//indexOf()在数组中没找到指定元素则返回 -1。
  		//this.$route.path.indexOf(this.path)判断活跃路由里面是否含有当前地址
  		return this.$route.path.indexOf(this.path)!==-1
  },
  },
  methods:{
  	itemClick(){
  		this.$router.push(this.path)
  	}
  },
}
</script>

<style>
.tab-bar-item{
 	flex: 1;
 	height: 49px;
 	text-align: center;
 }
.tab-bar-item img{
 	width: 24px;
 	height: 24px;
 	margin-top: 3px;
 	vertical-align: middle;
 }
.tab-bar-item .text{
 	font-size: 14px;
 }
 .active{
 	color: #d81e06;
 }
</style>