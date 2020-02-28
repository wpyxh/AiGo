<template>
  <div id="app">
		<tab-bar></tab-bar>
		<router-view></router-view>
  </div>
</template>

<script>
	import tabBar from './components/tabbar/TabBar.vue'
export default {
  name: 'App',
  components: {
  	tabBar,
  }
}
</script>

<style>
@import url("./assets/css/base.css");
 #app{
 	width: 100%;
 	height: 100%;
 	overflow: hidden;
 }
</style>
