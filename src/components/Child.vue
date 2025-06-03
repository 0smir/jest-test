<template>
  <div data-test="test-child">
    <p>I'am Child component of: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

</style>