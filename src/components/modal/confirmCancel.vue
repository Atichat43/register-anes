<template lang="pug">
  .ui.basic.modal
    .ui.icon.header
      i.archive.icon Archive Old Messages
    .content
      p Your inbox is getting full, would you like us to enable automatic archiving of old messages?
    .actions
      .ui.red.basic.cancel.inverted.button
        i.remove.icon No
      .ui.green.ok.inverted.button
        i.checkmark.icon Yes
</template>

<script>
  export default {
    name: 'comfirmCancel',
    methods: {
      show (callback) {
        $('.ui.modal').modal({
          onApprove: () => {
            this.$router.push({ name: 'SearchPatient' })
          }
        }).modal('show')
        this.$nextTick(() => { $(this.$el).modal('refresh') })
      },
      close () {
        $('.ui.modal').modal('hide')
      }
    }
  }
</script>
