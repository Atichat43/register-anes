<template lang="pug">
  .ui.modal
    .header Title
    .image.content
      image(src="../../assets/logo.png")
      description A sadasdasasdasdasd
    .actions
      .ui.red.deny.button Cancel
      .ui.blue.approve.button Cancel
</template>

<script>
  export default {
    name: 'newPatientModal',
    methods: {
      show (callback) {
        console.log(this.$el)
        $('.ui.modal').modal('show')
        this.$nextTick(() => { $(this.$el).modal('refresh') })
      },
      close () {
        $('.ui.modal').modal('hide')
      }
    }
  }
</script>
