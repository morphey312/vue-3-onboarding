<template>
  <div>
    <h1>Products</h1>
    <v-container>
      <v-row>
        <v-col v-for="product in products" :key="product.id">
          <product
              :product="product"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axiosInstance from "../../services/axios";
import Product from "@/components/Product.vue";
export default {
  name: 'Products',
  components: {
    Product
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    getProducts() {
      axiosInstance.get('/products')
        .then(response => {
          this.products = response.data;
          console.log(this.products)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
