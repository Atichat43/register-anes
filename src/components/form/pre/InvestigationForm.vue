<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 Others Investigation
      textarea(rows="2", v-model="patient.othersInvestigation")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 CXR
      .inline.fields
        label มีหรือไม่
        .field
          radio(name="cxrValue", v-model="patient.cxr.value", :selectedValue="false") No
        .field
          radio(name="cxrValue", v-model="patient.cxr.value", :selectedValue="true") Yes
      .field(:class="getCxrValue? '':'disabled'")
        .field
          input(v-model="patient.cxr.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
        .ui.segment
          .inline.fields
            label ปกติหรือไม่
            .field
              radio(name="cxrNormal", v-model="patient.cxr.normal", :selectedValue="false") No
            .field
              radio(name="cxrNormal", v-model="patient.cxr.normal", :selectedValue="true") Yes
          .field(:class="getCxrNormal? '':'disabled'")
            textarea(rows="2", v-model="patient.cxr.text")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 ECG
      .inline.fields
        label มีหรือไม่
        .field
          radio(name="ecgValue", v-model="patient.ecg.value", :selectedValue="false") No
        .field
          radio(name="ecgValue", v-model="patient.ecg.value", :selectedValue="true") Yes
      .field(:class="getEcgValue? '':'disabled'")
        .field
          input(v-model="patient.ecg.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
        .ui.segment
          .inline.fields
            label ปกติหรือไม่
            .field
              radio(name="ecgNormal", v-model="patient.ecg.normal", :selectedValue="false") No
            .field
              radio(name="ecgNormal", v-model="patient.ecg.normal", :selectedValue="true") Yes
          .field(:class="getEcgNormal? '':'disabled'")
            textarea(rows="2", v-model="patient.ecg.text")
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig } from './config_pre'
  export default {
    name: 'InvestigationForm',
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          othersInvestigation: '',
          cxr: {
            value: false,
            date: '',
            normal: false,
            text: ''
          },
          ecg: {
            value: false,
            date: '',
            normal: false,
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
      getCxrValue () {
        if (this.patient.cxr.value === false) {
          this.patient.cxr = {
            value: false,
            date: '',
            normal: false,
            text: ''
          }
        }
        return this.patient.cxr.value
      },
      getCxrNormal () {
        if (this.patient.cxr.normal === false) {
          this.patient.cxr.text = ''
        }
        return this.patient.cxr.normal
      },
      getEcgValue () {
        if (this.patient.ecg.value === false) {
          this.patient.ecg = {
            value: false,
            date: '',
            normal: false,
            text: ''
          }
        }
        return this.patient.ecg.value
      },
      getEcgNormal () {
        if (this.patient.ecg.normal === false) {
          this.patient.ecg.text = ''
        }
        return this.patient.ecg.normal
      }
    },
    methods: {
    }
  }
</script>
