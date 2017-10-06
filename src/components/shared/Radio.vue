<template lang="pug">
  .ui.radio.checkbox
    input(type="radio", :name="name")
    label(:style="red ? 'color:#9f3a38':''")
      slot
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      red: {
        type: Boolean,
        default: false
      },
      value: [String, Number, Boolean],
      selectedValue: [String, Number, Boolean]
    },
    mounted () {
      $(this.$el).checkbox({
        onChecked: () => {
          this.$emit('input', this.selectedValue)
        },
        onUnchecked: () => {
          this.$emit('input', this.selectedValue)
        }
      }).checkbox((this.value === this.selectedValue) ? 'check' : 'uncheck')
    }
  }
</script>
