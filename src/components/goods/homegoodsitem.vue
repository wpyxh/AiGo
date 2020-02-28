<template>
	<div class="goods-item">
		<!--@load(vue写法) 图片自带的事件，图片加载完成后执行某些函数   原生js写法:dom.onload=function(){}-->
		<img v-lazy="showImage" @load="imgLoadFinish"/>
		<div class="goods-info">
			<p class="title">{{goodsitem.title}}</p>
			<span class="price">{{goodsitem.price}}</span>
			<span class="collect">{{goodsitem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				},
			}
		},
		methods:{
			imgLoadFinish(){//图片加载完成后
				this.$bus.$emit('imgLoadFinish')//通过发射事件到事件总线$bus
			},
		},
		computed:{
      showImage(){
        return this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img;
      }
    },
	}
</script>

<style scoped>
	.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 46%;
    -webkit-transition: 2s;	
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #d81E06;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>