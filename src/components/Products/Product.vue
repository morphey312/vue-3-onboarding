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
          v-if="product.category === 'jewelery'"
          color="orange-lighten-2"
          variant="text"
          @click="moveTo(product.id)"
      >
        Explore
      </v-btn>
      <div v-else>категорія</div>

      <v-spacer></v-spacer>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
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
  name: "Product",
  props: {
    product: Object,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    moveTo(id) {
      console.log('price', this.product.price)
      this.$router.push({
        name: 'single-products',
        params: {
            id: id,
        },
      })
    },
  },
}
</script>

<style scoped>
  .red {
    color: red;
  }
</style>