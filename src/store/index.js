import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		carData:[],
		//username:''
	},
	mutations:{
		addCount(state,goodsData){
			//商品数量+1
			goodsData.count++;
		},
		addToCar(state,goodsData){
			goodsData.checked=false;
			//添加商品
			state.carData.push(goodsData);
		},
		delGoods(state,index){
			//删除商品
			state.carData.splice(index,1);
		},
//		userName(state,username){
//			//接收登录账号
//			state.username=username;
//		},
//		changeSing(state){
//			state.username='';
//		}
	},
	actions:{
		addCar(context,goodsData){
			return new Promise((resolve, reject) => {//告知处理结果
				let oldGoods=context.state.carData.find(item => item.id === goodsData.id);
				if(oldGoods){
					context.commit('addCount',oldGoods)
					resolve('商品数量+1');
				}else{
					goodsData.count=1;
					context.commit('addToCar',goodsData);
					resolve('已添加至购物车');
					}
				})
			},
			delelteGoods(context,index){
				return new Promise((resolve, reject) => {
					context.commit('delGoods',index);
					resolve('成功删除商品');
				})
			}
		}
})

export default store