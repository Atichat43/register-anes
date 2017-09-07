<template lang="pug">
  .ui.container
    router-view
</template>

<style scoped>
  .ui.center.aligned.basic.segment {
    margin-bottom: 0rem;
  }
  .ui.header {
    font-size: 3rem;
    margin-bottom: 0rem;
  }
</style>

<script>
  export default {
    name: 'PatientRecordCreateLayout'
  }
</script>
