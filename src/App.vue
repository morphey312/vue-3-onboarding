<template>
  <header-app/>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Products from "@/components/Products/Products.vue";
import HeaderApp from "./HeaderApp.vue";

export default {
  name: 'App',
  components: {
    Cards,
    Products,
    HeaderApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
