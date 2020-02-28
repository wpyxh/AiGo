<template>
    <div class="check-button">
      <div class="icon-selector" :class="{'selector-active':isChecked}"> 
        <img src="@/assets/img/shopcart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {
	 props: {
		isChecked: {
	        type: Boolean,
            default: false,
      }
   },
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #D81E06;
    border-color: #D81E06;
  }
</style>
