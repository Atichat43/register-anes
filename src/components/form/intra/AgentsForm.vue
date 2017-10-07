<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Dormicum
      input(v-model.number="patient.agentsDrugs[0]", v-mask="'###'", placeholder="")
      h3(style="text-align: right;") Dormicum
        span(v-if="patient.agentsDrugs[0] === 0", style="color:red; padding-right:5px; padding-left:5px;") {{ patient.agentsDrugs[0] }}
        span(v-else-if="patient.agentsDrugs[0] === ''", style="color:red; padding-right:5px; padding-left:5px;") -
        span(v-else, style="color:blue; padding-right:5px; padding-left:5px;") {{ patient.agentsDrugs[0] }}
        span unit
      h2 Ketamine
      input(v-model.number="patient.agentsDrugs[1]", v-mask="'###'", placeholder="")
      h3(style="text-align: right;") Ketamine
        span(v-if="patient.agentsDrugs[1] === 0", style="color:red; padding-right:5px; padding-left:5px;") {{ patient.agentsDrugs[1] }}
        span(v-else-if="patient.agentsDrugs[1] === ''", style="color:red; padding-right:5px; padding-left:5px;") -
        span(v-else, style="color:blue; padding-right:5px; padding-left:5px;") {{ patient.agentsDrugs[1] }}
        span unit
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 Ephedrine
      input(v-model.number="patient.agentsDrugs[2]", v-mask="'###'", placeholder="")
      h3(style="text-align: right;") Ephedrine
        span(v-if="patient.agentsDrugs[2] === 0", style="color:red; padding-right:5px; padding-left:5px;") {{ patient.agentsDrugs[2] }}
        span(v-else-if="patient.agentsDrugs[2] === ''", style="color:red; padding-right:5px; padding-left:5px;") -
        span(v-else, style="color:blue; padding-right:5px; padding-left:5px;") {{ patient.agentsDrugs[2] }}
        span unit
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig } from './config_intra'
  export default {
    name: 'AgentsForm',
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          agentsDrugs: ['', '', '', '']
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
