<template>
		<div class="wrapper" ref='wrapper'>
			<div class="content">
				<slot></slot>
			</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				scroll:null,
				
			}
		},
		props:{
    pullUpLoad:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
  },
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:this.probeType,//通过变量控制是否使用，节约性能
				pullUpLoad:this.pullUpLoad
			})
			
			this.scroll.on('scroll',position=>{//监听滚动事件
				this.$emit('scroll',position)
			})
			
			this.scroll.on('pullingUp',()=>{//监听上拉
				this.$emit('pullingUp')
				
			})
			
		},
		methods:{
			refresh(){
				this.scroll&&this.scroll.refresh();//this.scroll&&是为了this.scroll.refresh()请求失败
			}
		}
	}
	
</script>

<style>
</style>