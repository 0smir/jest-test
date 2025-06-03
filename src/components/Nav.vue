<template>
  <nav data-test="navigation">
    <a id="home" href="#">Home</a>
    <a id="about" href="#">About</a>
    <a v-if="isLoggedIn" id="profile" href="#">My profile</a>
  </nav>
</template>

<script>
  export default {
  name: "Navigation",
  data() {
    return {
      isLoggedIn: false
    }
  }
    
  }
</script>

<style  scoped>
nav {
  width: 100%;
}
</style>