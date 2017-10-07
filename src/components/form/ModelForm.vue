<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Step 1
      select.ui.dropdown(v-model="")
        option(value="") select this option!
        option(value="first") first
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 Step 2
      .ui.segment
        yes-no-radio(v-model="") Yes or No
        .field(:class="getAgreeValue? '':'disabled'")
          input(v-model="patient.discuss.text")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 Allergy
      .field
        radio(name="allergy", v-model="patient.allergy.value", :selectedValue="false") No
      .field
        radio(name="allergy", v-model="patient.allergy.value", :selectedValue="true") Yes
      .required.field(:class="allergyValue? '':'disabled'")
        label Allergy Symptom
        input(v-model="patient.allergy.text", placeholder="None")
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      textarea(rows="2", v-model="patient.othersInvestigation")

    .field(v-show="getCurrentStep === 5")
      // text right align
      h3(style="text-align: right;") total
        span(v-if="patient.operation.anesTeam.length === 0", style="color:red; padding-right:5px; padding-left:5px;") {{ patient.operation.anesTeam.length }}
        span(v-else, style="color:blue; padding-right:5px; padding-left:5px;") {{ patient.operation.anesTeam.length }}
        span people
      // search selection
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

    .field(v-show="getCurrentStep === 6")
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
          discuss: {
            who: '',
            value: false,
            text: ''
          },
          operation: {
            anesTeam: []
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
