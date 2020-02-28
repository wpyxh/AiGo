<template>
	<div class="recommend">
		<div v-for="item in recommends.length" :key="item" class="recommend-item" @click="recomClick(recommends[item-1].title)">
			<img v-lazy="recommends[item-1].image"/>
			<div>{{recommends[item-1].title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				},
			}
		},
		methods:{
			recomClick(title){
				this.$toast.show(title+'  暂未开通');
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 12px;
		padding: 15px 0 20px;
		border-bottom: 10px solid #f7f7f7;
		width: 100%;
		overflow: hidden;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>