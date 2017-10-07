<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Service Time
      .field
        radio(name="service", v-model="patient.service", :selectedValue="false") Out
      .field
        radio(name="service", v-model="patient.service", :selectedValue="true") In
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 ASA Physical status
      select.ui.dropdown(v-model="patient.asa")
        option(value='') Please define this !
        option(value='1') I
        option(value='2') II
        option(value='3') III
        option(value='4') IV
        option(value='5') V
        option(value='6') VI
        option(value='-1') Emergency
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 Post Dx
      textarea(rows="2", v-model="patient.operation.postDx")
      h2 Operation
      textarea(rows="2", v-model="patient.operation.operation")
      h2 Anes.Team
      select.ui.fluid.search.dropdown(multiple='', v-model="patient.operation.anesTeam")
        option(value='') Please define this !
        option(v-for="name in anesTeam", :value='name') {{ name }}
      h3(style="text-align: right;") total
        span(v-if="patient.operation.anesTeam.length === 0", style="color:red; padding-right:5px; padding-left:5px;") {{ patient.operation.anesTeam.length }}
        span(v-else, style="color:blue; padding-right:5px; padding-left:5px;") {{ patient.operation.anesTeam.length }}
        span people
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig, getAnesTeam } from './config_intra'
  export default {
    name: 'SurgeonForm',
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        anesTeam: getAnesTeam(),
        patient: {
          service: false,
          asa: '',
          operation: {
            postDx: '',
            operation: '',
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
