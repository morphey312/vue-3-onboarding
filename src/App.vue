<template>
  <div>
    <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="end"
    >
      <router-link to="/">
        <v-tab :value="1">Products</v-tab>
      </router-link>
      <div @click="redirectTo">
        <v-tab :value="2">Hello World</v-tab>
      </div>
      <v-tab :value="3">Abstract</v-tab>
    </v-tabs>
    <router-view/>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";

export default {
  name: 'App',
  components: {
    Products
  },
  data() {
    return {
      tab: null
    }
  },
  methods: {
    redirectTo() {
      this.$router.push({
        name: 'hello',
        params: {
          id: 3
        }
      })
    }
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
