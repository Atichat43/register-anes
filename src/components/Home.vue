<template lang="pug">
  .div
    h1 Home
    .ui.modal
      i.close.icon
      .header
        | Modal Title
      .image.content
        .image
          | An image can appear on left or an icon
        .description
          | A description can appear on the right
      .actions
        .ui.button Cancel
        .ui.button OK
</template>

<script>
  export default {
    mounted () {
      $('.ui.modal').modal('show')
    }
  }
</script>
