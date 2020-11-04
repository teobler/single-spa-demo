<template>
  <nav>
    <a href="/react">react</a>
    <a href="/vue">vue</a>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  nav {
    display: block;
    padding: 15px;
    height: 100vh;
  }

  a {
    display: block;
    margin-bottom: 5px;
  }
</style>
