<template>

	<div class="details-shop-info">
		<div class="services">
			<span v-for="(item,index) in shop.services" class="services-item">
				<img :src="item.icon" alt="" />
				{{item.name}}
			</span>
		</div>
		<div class="shop-top">
			<img :src="shop.logo"/>
			<span class="title">{{shop.name}}</span>
		</div>
		 <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
	</div>

</template>

<script>
	export default{
		props:{
		shop:{
			type:Object,
			default(){
				return {}
			}
		}
		},
		computed:{
    showImage(){
        return "http:" + this.shop.logo;
    }
  },
    filters: {
        sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
        }
    },
    mounted(){

    }
	}
	
</script>

<style scoped>
	.details-shop-info .services{
		display: flex;
		font-size: 14px;
		color: #222;
		padding: 15px 8px 0 8px;
		width: 100%;
		overflow: hidden;
		flex-direction:row;
		flex-wrap:wrap;
		justify-content:space-between;
		border-bottom: 5px solid #f7f7f7;
		height: 80px;
		
	}
	.details-shop-info .services .services-item{
		white-space: nowrap;
		padding: 8px 0;
		display: inline-block;
	}
	.details-shop-info .services .services-item img{
		width: 14px;
		height: 14px;
	}
	.details-shop-info .services .services-item:nth-child(5){
		display: none;
	}
	.shop-top {
		padding: 25px 8px 0 8px;
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }

  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background: linear-gradient(90deg,#d73153,#ec2f8a);;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    color: #fff;
  }
</style>