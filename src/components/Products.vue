<template>
  <div>
    <h1>Products</h1>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-sheet align="start" class="pa-2 ma-2">
            Viewed Products
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet align="end" class="pa-2 ma-2">
            {{ viewedProducts }}
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="product in products" :key="product.id">
          <product
              :product="product"
              @viewed-product="viewedProducts++"
              @delete-product="deleteProduct"
              @click="goToProduct(product.id)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axiosInstance from "../../services/axios";
import Product from "@/components/Product.vue";
import { useProductStore } from "../store/ProductStore.js";
import {mapActions, mapState} from "pinia";
export default {
  name: 'Products',
  components: {
    Product
  },
  data() {
    return {
      viewedProducts: 0
    }
  },
  methods: {
    ...mapActions(useProductStore, ['getProducts']),
    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id)
    },
    goToProduct(id) {
      this.$router.push({
        name: 'single-product',
        params: {
          id: id
        }
      })
    }
  },
  computed: {
    ...mapState(useProductStore, ['products'])
  },
  mounted() {
    this.getProducts();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
