<template>
  <div class="container">
    <div class="container">
      <div class="card">
        <h2>Your order</h2>
      </div>
      <table class="table">
          <tbody>
              <tr class="card" v-for="(item,idx) in products" :key="idx">
                  <td>Service: {{ item.title }}</td>
                  <td>Price :${{ item.price }}</td>
              </tr>
              <tr class="card">
                  <th></th>
                  <th>Total : ${{ total }}</th>
                  <th></th>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
 
  export default {
    name: 'Checkout',
    computed: {
      products() {
        return this.$store.state.inCart;
      },
        total() {
      return this.products.reduce((acc, cur) => acc + cur.price, 0);
    }
    },

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