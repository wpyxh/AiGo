<template>
	<div class="goods-item">
		<img :src="recommends.image" @load="imgLoadFinish"/>
		<div class="goods-info">
			<p class="title">{{recommends.title}}</p>
			<span class="price">{{recommends.price}}</span>
			<span class="collect">{{recommends.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			recommends:{
				type:Object,
				default(){
					return {}
				},
			}
		},
		methods:{
			imgLoadFinish(){//图片加载完成后
				
				this.$bus.$emit('recommdendsLoad')//通过发射事件到事件总线$bus
				
			},
		}
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