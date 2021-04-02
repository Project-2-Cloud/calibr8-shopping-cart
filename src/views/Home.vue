<template>
  <div class="container">
    <div class="container">
      <div class="card">
        <h2>Factorio Servers</h2>
        <p>Rent your Factorio Server here! <p>
         <p> Are you thinking about renting a Factorio server? The name of the game is to create, build and maintain factories. Besides popular mods like Shield Generators, Minable Intermediates and MicroController we offer regular backups. With our servers you can enjoy playing with your friends online.
          Factorio servers from Calibr8 meet the highest requirements for the right price.
          The best thing about us: If you want to rent a Factorio server with us, you can start playing right away. We have a free server for 40 hours a month, with this one you can see for yourself how much fun it is to play with friends online.</p>
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