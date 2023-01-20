<template>
  <div>
    Single Product
  </div>
</template>

<script>
import axios from "../../../services/axios";

export default {
  name: "SingleProduct",
  data() {
    return {
      productId: null,
      product: {},
    }
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios.get('/products/' + this.productId)
        .then(response => {
          console.log(response.data)
          this.product = response.data;
        })
    }
  }
}
</script>

<style scoped>
  .red {
    color: red;
  }
</style>