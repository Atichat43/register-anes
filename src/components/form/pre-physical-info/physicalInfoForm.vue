<template lang="pug">
  .ui.large.form
    // --------------------------------------------------------------------------
    h2.ui.dividing.header Important Condition
    .field
      label ASA Physical status
      select.ui.dropdown(v-model="patient.asa")
        option(value='') Please define this !
        option(value='1') I
        option(value='2') II
        option(value='3') III
        option(value='4') IV
        option(value='5') V
        option(value='6') VI
        option(value='-1') Emergency
</template>

<script>
  export default {
    data () {
      return {
        patient: {
          asa: ''
        }
      }
    }
  }
</script>
