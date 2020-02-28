//封装axios，为了以后方便维护，用的时候调用request函数就可以了
//request({
//		url:'/home/multidata'
//	}).then(res=>{
//		this.result=res;
//	}).catch(err=>{
//		//请求失败后返回的数据
//	})

import axios from 'axios'
export function request(config){
	const instance1=axios.create({
		baseURL:'http://106.54.54.237:8000/api/wh',
		timeout:5000
	})
	
	//axios拦截器:interceptors(拦截器)
	//请求拦截的作用
	instance1.interceptors.request.use(config=>{
		//可以做一些操作：
		//1.config的一些信息不符合服务器的一些要求
		//2.发送网络请求时，都希望再界面中显示一些请求图标
		//3.某些网络请求（比如：登录token），必须携带一些特殊的信息
		//必须返回一个config
		return config
	},err=>{
		//请求失败的操作
	})
	
	//响应拦截
	instance1.interceptors.response.use(results=>{
		//可以做一些操作：
		//必须返回一个results
		return results.data
	},err=>{
		//请求失败的操作
	})	
	
	
	//发送真正的网络请求
	return instance1(config);
}


export function singin(config){
	const instance2=axios.create({
		headers: {
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
         },
		method: 'post',
		baseURL:'http://106.54.7.71:80/yxh/singin',
		timeout:5000,
		transformRequest: [function (data) {
		let ret = ''
		for(let it in data) {
			ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		}
		return ret
		}],
	})
	return instance2(config);
}