<template>
  <grid-view  :lineSpace="15" :v-margin="20" v-if="categoryDetail">
    <goods-list-item v-for="(item, index) in categoryDetail" 
    	:key="index" 
    	:goodsitem="item"
    	@click.native="imgClick(item.iid)">
    </goods-list-item>
  </grid-view>
</template>

<script>
  import GridView from '@/components/grid/GridView.vue'
  import GoodsListItem from '@/components/goods/homegoodsitem.vue'

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
			imgClick(iid){//点击商品进入详情界面
				this.$router.push('/goodsDetails/'+iid)
			}
		}
  }
</script>

<style scoped>

</style>
