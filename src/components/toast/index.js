/*
 
 *toast插件，弹框
 * */
import Toast from './toast.vue'
const obj={};
obj.install=function(Vue){
	//创建组件构造器
	const toastConstructor =Vue.extend(Toast);
	//new 创建一个组件对象
	const toast =new toastConstructor();
	//将组件对象挂在在某个元素上
	toast.$mount(document.createElement("div"));
	//toast.$el对应的就是div
	document.body.appendChild(toast.$el);
	//给Vue原型上添加属性
	Vue.prototype.$toast=toast;
}
export default obj;
