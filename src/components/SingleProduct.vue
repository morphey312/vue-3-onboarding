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
        <v-col>
          <product v-if="product"
              :product="product"
              @viewed-product="viewedProducts++"
              @delete-product="deleteProduct"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <card-product>
            <template v-slot:default="slotProps">
              <li v-for="item in slotProps.items" :key="item">{{ item }}</li>
            </template>
          </card-product>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import { useProductStore } from "../store/ProductStore.js";
import {mapActions, mapState} from "pinia";
import CardProduct from "@/components/CardProduct.vue";
import { myMixin } from "@/mixins/mixinExamp.js";
export default {
  name: 'SingleProduct',
  mixins: [myMixin],
  components: {
    CardProduct,
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
    helloMixin() {
      console.log('Привіт від component!');
    }
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    product() {
      let id = +this.$route.params.id
      return this.products.find(product => product.id === id)
    }
  },
  async created() {
    console.log('created from component')
    if (!this.products.length) {
      await this.getProducts()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
