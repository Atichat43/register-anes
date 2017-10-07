<template lang="pug">
  .div
    .ui.big.form
      // Step 1 --------------------------------------------------------------------
      .field(v-show="getCurrentStep === 1")
        h2 Anesthesia technique
        technique-dropdown(v-model="patient.technique[0]", :seleted="[patient.technique[1], patient.technique[2]]")
        h2 Another Anesthesia technique
        technique-dropdown(:class="patient.technique[0]? '':'disabled'", v-model="patient.technique[1]", :seleted="[patient.technique[0], patient.technique[1]]")
        h2 Another Anesthesia technique
        technique-dropdown(:class="patient.technique[1]? '':'disabled'", v-model="patient.technique[2]", :seleted="[patient.technique[0], patient.technique[1]]")
      // Step 1 --------------------------------------------------------------------
      .field(v-show="getCurrentStep === 2")
        h2 Airway
          span(style="float: right; font-size: 70%; color: grey;") Technique used: {{ patient.technique[0] }}
            span(v-if="patient.technique[1] !== ''", style="padding-left: 5px") + {{ patient.technique[1] }}
            span(v-if="patient.technique[2] !== ''", style="padding-left: 5px") + {{ patient.technique[2] }}
        h4 Example for optgroup view
          .ui.search.selection.dropdown(ref="airway")
            .text Select
            i.dropdown.icon
            .menu
              .header Optgroup 1
              .item(data-value='option1') Option 1
              .item(data-value='option2') Option 2
              .header Optgroup 2
              .item(data-value='option3') Option 3
              .item(data-value='option4') Option 4

        // Step 1 --------------------------------------------------------------------
      .field(v-show="getCurrentStep === 3")
        review-table(:table="table", :values="patient")
      // Step Confirm --------------------------------------------------------------------
</template>

<style scoped>
</style>

<script>
  import { getConfig } from './config_intra'
  import TechniqueDropdown from './TechniqueDropdown'
  export default {
    name: 'TechniqueForm',
    components: {
      TechniqueDropdown
    },
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          technique: ['', '', ''],
          airway: 'option3',
          discuss: {
            who: '',
            value: false,
            text: ''
          }
        }
      }
    },
    updated () {
      this.patient.airway = $(this.$refs.airway).dropdown('get value')
    },
    mounted () {
    },
    computed: {
      getCurrentStep () {
        this.currentStep = this.$route.params.no
        return this.currentStep
      },
      isTechnique () {
        return false
      }
    },
    methods: {
    }
  }
</script>
