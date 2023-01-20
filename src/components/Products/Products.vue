<template>
  <div>
    <h1 class="center">Products</h1>
    <v-text-field
        v-model="search"
        label="Search...."
    ></v-text-field>
    {{ search }}
    <v-container>
      <v-row justify="center">
        <v-progress-circular
            v-if="products.length === 0"
            indeterminate
            color="primary"
        ></v-progress-circular>
        <v-col
            v-for="product in products"
            :key="product.id"
            cols="4"
        >
          <product
              :product="product"
              cols="4"
          />
        </v-col>
      </v-row>
    </v-container>
    <span>Total: {{ productsCount }}</span>
  </div>
</template>

<script>
import Product from "@/components/Products/Product.vue";
import axios from "../../../services/axios";

export default {
  name: "Products",
  components: {
    Product,
  },
  computed: {
    productsCount() {
      return this.products.length;
    }
  },
  data() {
    return {
      products: [],
      search: null,
    }
  },
  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts(params = {}) {
      axios.get('/products', {
        params: {
          limit: 10,
          ...params
        }
      })
          .then(response => {
            console.log(response.data)
            this.products = response.data;
          })
    }
  }
}
</script>

<style scoped>

</style>