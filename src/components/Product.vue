<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        :src="product.image"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      Category: {{ product.category }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          v-if = "product.category === 'jewelery'"
          color="orange-lighten-2"
          variant="text"
      >
        Explore
      </v-btn>
      <span v-else> Без опису </span>

      <v-spacer></v-spacer>

      <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="deleteProduct"
      >
        Delete
      </v-btn>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          :style="{ color: show ? redStyle : '', 'text-decoration': underlineStyle }"
          @click="countViewedProducts"
      >More</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ product.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
      isViewedProduct: false,
      redStyle: 'red',
      underlineStyle: 'underline'
    }
  },
  methods: {
    countViewedProducts() {
      this.show = !this.show
      if (!this.isViewedProduct) {
        this.isViewedProduct = true
        this.$emit('viewed-product')
      }
    },
    deleteProduct() {
      this.$emit('delete-product', this.product.id)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red {
    color: red;
  }
  .underline {
    text-decoration: underline;
  }
</style>
