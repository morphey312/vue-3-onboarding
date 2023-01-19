<template>
  <v-app>
    <v-main>
      <products/>
    </v-main>
  </v-app>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <cards/>-->
</template>

<script>
import Cards from "@/components/Cards.vue";
import Products from "@/components/Products/Products.vue";

export default {
  name: 'App',
  components: {
    Cards,
    Products,
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
  margin-top: 60px;
}
</style>
