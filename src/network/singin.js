import {singin} from './request.js'

//注册
export function getSingup(username,password){
	return singin({
		url:'/RegUser.php',
		data:{
			username,
			password
		}
    
	})
}

//登录
export function getSingin(username,password){
	return singin({
		url:'/LoginUser.php',
		data:{
			username,
			password
		}
    
	})
}