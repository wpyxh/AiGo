<template>
	<div class="nav-bar">
		<div class="left"><slot name='nav-left'></slot></div>
		<div class="between"><slot name='nav-between'></slot></div>
		<div class="right"><slot name='nav-right'></slot></div>
	</div>
</template>

<script>
</script>

<style scoped>
	.nav-bar{
		width: 100%;
		height: 44px;
		display: flex;
		text-align: center;
		line-height: 44px;
		box-shadow: 0 1.5px 1px rgb(100,100,100,.2);
	}
	.left,.right{
		height: 44px;
		width: 40px;
	}
	.between{
		height: 44px;
		flex: 1;
	}
</style>