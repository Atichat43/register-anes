<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2.ui.dividing.header Previous Operation
      .ui.small.form(v-for="(operation, index) in patient.previousOperations")
        .inline.field
          h3 Previous Operation ครั้งที่ {{ index + 1 }}
            i.delete.link.icon(v-if="index+1 !== 1",@click="patient.previousOperations.splice(index, 1)", style="float:right;")
        .field
          label Date
          input(v-model="operation.date")
        .field
          label Previous Op.
          input(v-model="operation.operation")
        .field
          label Type of anes
          input(v-model="operation.type")
        .field
          label Complication
          input(v-model="operation.complication")
        .ui.hidden.divider
      .ui.yellow.fluid.button(@click="addPreviousOperation") add new
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2.ui.dividing.header Drugs
      .inline.fields
        label Current drugs
        .field
          radio(name="currentDrugs", v-model="patient.currentDrugs.value", :selectedValue="false") No
        .field
          radio(name="currentDrugs", v-model="patient.currentDrugs.value", :selectedValue="true") Yes
      .field(v-for="(drug, index) in getCurrentDrugs", :class="patient.currentDrugs.value? '':'disabled'")
        .ui.icon.input
          input(v-model.lazy="patient.currentDrugs.drugs[index]")
          i.delete.link.icon(@click="patient.currentDrugs.drugs.splice(index, 1)")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      .inline.fields
        label Premedication
        .field
          radio(name="premedication", v-model="patient.premedication.value", :selectedValue="false") No
        .field
          radio(name="premedication", v-model="patient.premedication.value", :selectedValue="true") Yes
      .field(v-for="(medication, index) in getPremedication", :class="patient.premedication.value? '':'disabled'")
        .ui.icon.input
          input(v-model.lazy="patient.premedication.medication[index]")
          i.delete.link.icon(@click="patient.premedication.medication.splice(index, 1)")
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig } from './config'
  export default {
    name: 'InformationForm',
    data () {
      return {
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          previousOperations: [
            {
              date: '',
              operation: '',
              type: '',
              complication: ''
            }
          ],
          currentDrugs: {
            value: false,
            drugs: ['']
          },
          premedication: {
            value: false,
            medication: ['']
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
      getCurrentDrugs () {
        if (this.patient.currentDrugs.value === false) { this.patient.currentDrugs.drugs = [''] }
        return this.patient.currentDrugs.drugs
      },
      getPremedication () {
        if (this.patient.premedication.value === false) { this.patient.premedication.medication = [''] }
        return this.patient.premedication.medication
      }
    },
    updated () {
      if (this.currentStep === 2) {
        this.addEmptyLastElements(this.patient.currentDrugs.drugs)
      } else if (this.currentStep === 3) {
        this.addEmptyLastElements(this.patient.premedication.medication)
      } else if (this.currentStep === 4) {
        this.addEmptyLastElements(this.patient.componentsPrepare.components)
      } else {}
    },
    methods: {
      addPreviousOperation () {
        this.patient.previousOperations.push({
          date: '',
          operation: '',
          type: '',
          complication: ''
        })
      },
      addEmptyLastElements (target) {
        if (target[target.length - 1] !== '') {
          target.push('')
        }
      }
    }
  }
</script>
