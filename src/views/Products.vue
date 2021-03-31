<template>
  <div class="container">
    <div class="container">
        <div class="card">
            <h1>Products</h1>
        </div>
      <div class="row">
        <Item v-for="product in products" 
        :key="product.id"
        :item="product"/>
      </div>
    </div>  
  </div>
</template>
	
<script>
// @ is an alias to /src

import Item from "@/Item.vue"  
export default {
  name: 'Products',
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
        .card {
      background-color: rgba(255,255,255,0.7);
    }
</style>

