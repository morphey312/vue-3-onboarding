<template>
  <div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" :value="count">
    </div>
    <span>{{count}}</span>
    <div>
      <button @click="increment" type="button" class="btn btn-success">+</button>
      <button @click="decrement" type="button" class="btn btn-danger">-</button>
    </div>
  </div>
</template>

<script>
import {useProductsStore} from "@/router/stores/products";
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
