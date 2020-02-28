export function debounce(func,delay){//防抖函数（传参：函数，延迟时间）
			let timeout=null;
			return function(...args){
				if(timeout) clearTimeout(timeout);
				timeout=setTimeout(()=>{
					func.apply(this,args)
				},delay)
			}
		}

export function formatDate(date, fmt) {//时间戳格式化
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

  