<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Patient in
      input(v-model="patient.time.in", v-mask="'##:##'", placeholder="HH:MM")
      h2 Anesthesia time
      h3 Strat-End
      input(v-model="patient.time.anes", v-mask="'##:## - ##:##'", placeholder="HH : MM  -  HH : MM")
      h3(style="text-align: right;") Total:
        span(v-if="getAnesthesiaTime", style="color:blue; padding-right:5px; padding-left:10px;") {{ totalAnesthesiaTime }}
        span(v-else, style="color:red; padding-right:5px; padding-left:5px;") -
        span min
      h2 Operation time
      input(v-model="patient.time.operation", v-mask="'##:##'", placeholder="HH:MM")
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
        totalAnesthesiaTime: '',
        patient: {
          time: {
            in: '',
            anes: '',
            operation: ''
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
      getAnesthesiaTime () {
        if (this.patient.time.anes !== '') {
          var lst = this.patient.time.anes.split('-').map((item) => item.trim())
          var temp = []
          lst.forEach(function (element) {
            temp.push(element.split(':'))
          })
          console.log(lst)
          console.log(temp)
        }
        if (this.totalAnesthesiaTime === '') { return false }
        return true
      }
    },
    methods: {
    }
  }
</script>
