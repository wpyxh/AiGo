<template>
	<div class="car-bottom">
		<div class="button">
		<cheak-button class="cheak-button " :is-checked="checkedAll" @click.native="checkedAllChange"></cheak-button>
		<span>全选</span>
		</div>
		<span class="totalPrice" v-show="!bottomStateIndex">总价:<span class="totalPriceNumber">{{totalPrice}}</span></span>
		<div class="pay" @click="payAndDelClick">{{bottomState[bottomStateIndex]}}</div>
	</div>
</template>

<script>
	import cheakButton from './cheakButton.vue'
	export default{
		data(){
			return{
				bottomState:['结算','删除'],
				bottomStateIndex:0
			}
		},
		components:{
			cheakButton,
		},
		computed:{
			totalPrice(){//计算总价格
				return '￥'+this.$store.state.carData.filter((item)=>{
					return item.checked
				}).reduce((prev,cur) => {
						return prev+cur.price*cur.count;
					},0).toFixed(2)
			},
			checkedAll(){//购物车全选按钮显示状态
				//有一个商品为不选中状态，全选按钮为false
				//商品全部选中，全选按钮为true
				return this.$store.state.carData.length===0?false:!(this.$store.state.carData.find(item => !item.checked))
			}
		},
		methods:{
			checkedAllChange(){//购物车全选按钮点击事件
				if(this.checkedAll){
					//如果购物车商品都是选中状态，点击全选，商品全部改为不选中状态
					this.$store.state.carData.forEach(item => item.checked=false)
				}else{
					//如果购物车有没选中状态的商品，点击全选，商品全部改为选中状态
					this.$store.state.carData.forEach(item => item.checked=true)
				}
			},
			payAndDelClick(){
				if(this.bottomStateIndex){
					//console.log("删除");
					this.$bus.$emit('delGoods');
				}else{
					//console.log("结算");
					this.$toast.show('没有钱了哦 ^_^');
				}
			}
		},
		mounted(){
			this.$bus.$on('stateIndex',(index) => {
				this.bottomStateIndex=index;
			})
		}
	}
</script>

<style scoped>
	.car-bottom{
		width: 100%;
		height: 30px;
		background: #f8f8f8;
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
		display: flex;
	}
	.button{
		display: flex;	
		position: absolute;
		top:15px;
		transform: translateY(-50%);
	}
	.button .cheak-button{
		margin: 0 10px;
	}
	.totalPrice{
		line-height: 30px;
		margin-left: 30%;
	}
	.totalPriceNumber{
		color: #D83E06;
		font-weight: 700;
		font-size: 14px;
	}
	.pay{
		width: 80px;
		height: 100%;
		background: linear-gradient(90deg,#d73153,#ec2f8a);
		line-height: 30px;
		position: absolute;
		right: 0;
		text-align: center;
		color: #fff;
	}
</style>