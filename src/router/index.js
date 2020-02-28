import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
   	{
   		path:'',
   		redirect:'/home',
   		meta:{
   		title:'首页'
   		}
   	},
   	{
   		path: '/home',
   		component: ()=>import('../views/home/Home.vue'),
   		meta:{
   		title:'首页'
   		}
   	},
   	{
   		path: '/category',
   		component: ()=>import('../views/category/Category.vue'),
   		meta:{
   		title:'分类'
   	}
   	},
   	{
   		path: '/shopcart',
   		component: ()=>import('../views/shopcart/Shopcart.vue'),
   		meta:{
   		title:'购物车'
   	}
   	},
   	{
   		path: '/profile',
   		component: ()=>import('../views/profile/Profile.vue'),
   		meta:{
   		title:'我的'
   	}
   	},
   	{
   		path: '/goodsdetails/:iid',
   		component: ()=>import('../views/goodsDetails/goodsDetails.vue'),
   		meta:{
   		title:'商品详情'
   	}
   	},
   	{
   		path: '/singin',
   		component: ()=>import('../components/singin/singin.vue'),
   		meta:{
   		title:'登录'
   	}
   	},
   	{
   		path: '/singup',
   		component: ()=>import('../components/singin/singup.vue'),
   		meta:{
   		title:'注册'
   	}
   	}
  ],
  mode:'hash',
})

 	//全局导航守卫
  router.beforeEach(function(to,from,next){
  	document.title=to.matched[0].meta.title;//功能：点击页面时改变页面的标题
  	next()
  })
export default router