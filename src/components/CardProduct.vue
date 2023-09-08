<template>
  <ul>
    <slot :items="items"></slot>
  </ul>
</template>

<script>
export default {
  name: 'CardProduct',
  data() {
    return {
      items: ["item1", "item2", "item3"]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
