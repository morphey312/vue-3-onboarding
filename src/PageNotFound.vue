<template>
  <div>
    Page Not Found / 404
    <div>
      <v-btn stacked @click="goTo">
        Back Home
      </v-btn>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Products from "@/components/Products/Products.vue";
import HeaderApp from "@/HeaderApp.vue";

export default {
  name: 'PageNotFound',
  methods: {
    goTo() {
      this.$router.push({
        name: 'products',
      })
    },
  }
}
</script>