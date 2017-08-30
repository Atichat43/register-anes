<template lang="pug">
  div
    navbar
    #root
      router-view.ui.main.text.container
</template>

<style scoped>
  #root {
    margin-top: 5rem;
  }
</style>

<script>
  import Navbar from './Navbar'
  export default {
    name: 'Layout',
    components: {
      Navbar
    }
  }
</script>
