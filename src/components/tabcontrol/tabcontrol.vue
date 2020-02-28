<template>
	<div class="tabcontrol">
		<div class="tabcontrol-item" 
			v-for="(item,index) in tabtext" 
			:class="{active:index===clickindex}"
			@click="click(index)">
			<span>{{tabtext[index]}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				clickindex:0,
			}
		},
		methods:{
			click(index){
				this.clickindex=index;
				this.$emit('tabControlIndex',index);
			}
		},
		props:{
			tabtext:{
				type:Array,
				default(){
					return []
				},
			}
		}
	}
</script>

<style scoped>
	.tabcontrol{
		background: #FFFFFF;
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
		z-index: 999;
	}
	.tabcontrol-item{
		flex: 1;
	}
	.tabcontrol-item span{
		padding-bottom: 5px;
	}
	.active span{
		border-bottom: 3px solid #d81e06;
	}
</style>