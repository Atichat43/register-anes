<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Step 1
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 Step 2
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 Consent
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig } from './config_intra'
  export default {
    name: 'PostForm',
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          discuss: {
            who: '',
            value: false,
            text: ''
          }
        }
      }
    },
    mounted () {
      $('select.dropdown').dropdown()
    },
    computed: {
      getCurrentStep () {
        this.currentStep = this.$route.params.no
        return this.currentStep
      },
      getAgreeValue () {
        if (this.patient.discuss.value === false) { this.patient.discuss.text = '' }
        return this.patient.discuss.value
      }
    },
    methods: {
    }
  }
</script>
