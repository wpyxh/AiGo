<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item" @click="listClick(item.info)">
        <span class="icon">
          <img :src="getThumb(item.icon)"/>
        </span>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    },
    methods:{
    	getThumb(type) {
			   let thumb = {
			    cart: require("@/assets/img/profile/cart.svg"),
			    message: require("@/assets/img/profile/message.svg"),
			    membercar: require("@/assets/img/profile/membercar.svg"),
			    shopping: require("@/assets/img/profile/shopping.svg"),
			    downapp: require("@/assets/img/profile/downapp.svg"),
			    set: require("@/assets/img/profile/set.svg"),
			    more: require("@/assets/img/profile/more.svg")
			   };
			   return thumb[type];
  },
  listClick(info){
    	this.$toast.show(info+'暂未开通');
    }
    },
    
	}
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin-top: 5px;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .icon img {
    width: 18px;
    height: 18px;
    
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
    
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
