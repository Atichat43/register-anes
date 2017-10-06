<template lang="pug">
  .inline.fields
    label
      slot
    .field
      radio(name="choice", v-model="returnValue", :selectedValue="false") No
    .field
      radio(name="choice", v-model="returnValue", :selectedValue="true") Yes
</template>

<script>
  export default {
    name: 'YesNoRadio',
    props: {
      value: Boolean
    },
    data () {
      return {
        returnValue: this.value
      }
    },
    watch: {
      returnValue: function () {
        this.$emit('input', this.returnValue)
      }
    }
  }
</script>
