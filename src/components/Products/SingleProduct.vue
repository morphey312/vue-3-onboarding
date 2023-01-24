<template>
  <div>
    Single Product
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useProductsStore } from "@/router/stores/products";
export default {
  name: "SingleProduct",
  data() {
    return {
      productId: null,
    }
  },
  computed: {
    ...mapState(useProductsStore, ['product'])
  },
  methods: {
    ...mapActions(useProductsStore, ['getProduct']),
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProduct(this.productId);
  },
}
</script>

<style scoped>
</style>