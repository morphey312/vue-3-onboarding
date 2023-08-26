<template>
  <div class="col-12">
    <label for="firstName" class="form-label">Custom Input</label>
    <input type="text" class="form-control" id="firstName" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" required>
    <div class="invalid-feedback">
      Valid first name is required.
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
