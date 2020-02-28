<template>
	<div class="details-goods-info">
		<div class="goods-info">
			<h4 class="title">{{goods.title}}</h4>
			<div class="price">
				<span class="new-price">{{goods.newPrice}}</span>
				<span class="old-price">{{goods.oldPrice}}</span>
				<span :class="{active:goods.discount}">{{goods.discount}}</span>
			</div>
			<div class="columns">
				<span v-for="item in goods.columns" class="columnsItem">{{item}}</span>
			</div>
			<hr />
		</div>
		
	</div>
</template>

<script>

export default{
	props:{
		goods:{
			type:Object,
			default(){
				return {}
			}
		},
	},
	
}

	
</script>

<style scoped>
	.details-goods-info{
		width: 100%;
	}
	.details-goods-info .goods-info{
		width: 100%;
	}
	.details-goods-info .goods-info .title{
		color: #444;
		font-size: 16px;
		padding:15px 8px 15px;
	}
	.details-goods-info .goods-info .price .new-price{
		font-size: 24px;
		color:#d2270c;
		font-weight: 700;
		margin:0 8px;
	}
	.details-goods-info .goods-info .price .old-price{
		font-size: 14px;
		text-decoration: line-through;
		font-weight: 700;
	}
	.details-goods-info .goods-info .price .active{
		font-size: 10px;
		padding: 2px 8px;
		background: #d2270c;
		border-radius: 8px;
		color: #fff;
		margin:0 10px;
		display: inline-block;
		
	}
	.details-goods-info .columns{
		width: 100%;
		display: flex;
		text-align: center;
		padding: 20px 8px 8px 8px;
		font-size: 12px;
	}
	.details-goods-info .columnsItem{
		flex: 1;
	}
	.details-goods-info .columnsItem:nth-child(1){
		text-align: left;
	}
	.details-goods-info .columnsItem:nth-child(3){
		text-align: right;
	}
	hr{
		margin: 0 8px;
		background: #f7f7f7;
		height: 2px;
		border:0;
	}
</style>