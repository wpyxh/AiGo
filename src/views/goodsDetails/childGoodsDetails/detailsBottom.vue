<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart"><b>加入购物车</b></div>
      <div class="buy" @click="buyClick"><b>立即购买</b></div>
    </div>
  </div>
</template>

<script>
	export default {
    methods: {
      addToCart() {
      	if(this.$store.state.username===''){
      		this.$toast.show('请先登录哦~~😙');
      	}else{
      		this.$emit('addToCart')
      	}
        
      },
      buyClick(){
      	if(this.$store.state.username===''){
      		this.$toast.show('请先登录哦~~😙');
      	}else{
      		this.$toast.show('再买要吃土了哦~')
      	}
      }
    }
	}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background: linear-gradient(138deg,#ffa600,#ffb000 77%,#ffbc00);
    color: #fff;
  }

  .bar-right .buy {
    background: linear-gradient(-41deg,#ff4f18,#ff2000 24%,#f10000);
  }
</style>
