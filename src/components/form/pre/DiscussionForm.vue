<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Anesthetic Plan
      textarea(rows="2", v-model="patient.plan")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 Discussion
      select.ui.dropdown(v-model="patient.discuss.who")
        option(value="") select this option!
        option(value="patient") patient
        option(value="parent") parent
      .ui.segment
        yes-no-radio(v-model="patient.discuss.value") agree the plan?
        .field(:class="getAgreeValue? '':'disabled'")
          input(v-model="patient.discuss.text")

    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 Consent
      yes-no-radio(v-model="patient.consent.value") consent the plan?
      .field(:class="getConsentValue? '':'disabled'")
        input(v-model="patient.consent.text")
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig } from './config_pre'
  export default {
    name: 'DiscussionForm',
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          plan: '',
          discuss: {
            who: '',
            value: false,
            text: ''
          },
          consent: {
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
      },
      getConsentValue () {
        if (this.patient.consent.value === false) { this.patient.consent.text = '' }
        return this.patient.consent.value
      }
    },
    methods: {
    }
  }
</script>
