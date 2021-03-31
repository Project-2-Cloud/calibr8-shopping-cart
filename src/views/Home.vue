<template>
  <div class="container">
    <div class="container">
      <div class="card">
        <h2>Factorio Servers</h2>
        <p>We here at Calibr8 only offer the finest quality of Factorio servers. Our servers are the most cost
          efficient, durable, flexible, modifiable of all the servers in the world.
          Factorio is a game in which you build and maintain factories. You will be mining resources, researching
          technologies, building infrastructure,
          automating production and fighting enemies.</p>
      </div>
      <div>
        <div class="column">
          <h3 class="card">Try our service for free for a limited time:</h3>
          <Item :item="products[0]"/>
        </div>
        <div class="column">
          <h3 class="card">This is our most selected service:</h3>
          <Item :item="products[1]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from "@/Item.vue"
  export default {
    name: 'Home',
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
    background-color: rgba(255, 255, 255, 0.7);
    color: #000;
    float: none;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .item {
    float: none;
    margin: 0 auto;
  }
</style>