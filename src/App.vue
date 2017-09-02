<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {
    name: 'app'
}
</script>

<style>
  .ui.input.moreRange input{
    color: red;
  }
  .ui.input.inRange input{
    color: #039be5;
  }
  .ui.input.lessRange input{
    color: orange;
  }
</style>
