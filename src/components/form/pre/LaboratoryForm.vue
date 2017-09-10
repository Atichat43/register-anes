<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 CBC
      .field
        label ผลเมือวันที่
        input(v-model="patient.laboratory.cbc.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .field(v-for=" (head, index) in table.cbc.head")
        label {{ head }}
        input(v-model="patient.laboratory.cbc.result[index]")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 Blood chemistry
      .field
        label ผลเมื่อวันที่
        input(v-model="patient.laboratory.blood.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
        .field(v-for=" (head, index) in table.blood.head")
          label {{ head }}
          input(v-model="patient.laboratory.blood.result[index]")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 Coagulagram
      .field
        label ผลของวันทั้
        input(v-model="patient.laboratory.coagulogram.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
        .field(v-for=" (head, index) in table.coagulogram.head")
          label {{ head }}
          input(v-model="patient.laboratory.coagulogram.result[index]")

    .field(v-show="getCurrentStep === 4")
      h2 LFT
      .field
        label ผลของวันที่
        input(v-model="patient.laboratory.lft.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
        .field(v-for=" (head, index) in table.lft.head")
          label {{ head }}
          input(v-model="patient.laboratory.lft.result[index]")

    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 5")
      h2.ui.header Review Data
      h3 CBC {{ patient.laboratory.cbc.date }}
      sub-review-table-for-array(:table="table.cbc", :values="patient.laboratory.cbc.result")
      .ui.color.divider
      h3 Blood chemistry {{ patient.laboratory.blood.date }}
      sub-review-table-for-array(:table="table.blood", :values="patient.laboratory.blood.result")
      .ui.color.divider
      h3 Coagulogram {{ patient.laboratory.coagulogram.date }}
      sub-review-table-for-array(:table="table.coagulogram", :values="patient.laboratory.coagulogram.result")
      .ui.color.divider
      h3 LFT {{ patient.laboratory.lft.date }}
      sub-review-table-for-array(:table="table.lft", :values="patient.laboratory.lft.result")
</template>

<style scoped>
  .ui.color.divider {
    color: #ffa100;
    border-top: 1px solid rgba(220, 127, 12, 0.15);
    border-bottom: 1px solid rgb(196, 65, 65);
  }
</style>


<script>
  import subReviewTableForArray from '../../shared/SubReviewTableForArray'
  export default {
    name: 'LaboratoryForm',
    components: {
      subReviewTableForArray
    },
    data () {
      return {
        currentStep: 1,
        table: {
          cbc: {
            title: 'CBC',
            head: ['WBC', 'Hb', 'Hct', 'Plt']
          },
          blood: {
            title: 'Blood chemistry',
            head: ['Na+', 'K+', 'Cl-', 'HCO3-', 'BUN', 'Cr', 'GFR', 'GLU']
          },
          coagulogram: {
            title: 'Coagulagram',
            head: ['PT', 'INR', 'PTT', 'APTT']
          },
          lft: {
            title: 'LFT',
            head: ['Alb', 'Glb', 'TB', 'DB', 'IB', 'SGOT', 'SGPT', 'ALP']
          }
        },
        patient: {
          laboratory: {
            cbc: {
              date: '',
              result: ['', '', '', '']
            },
            blood: {
              date: '',
              result: ['', '', '', '', '', '', '', '']
            },
            coagulogram: {
              date: '',
              result: ['', '', '', '']
            },
            lft: {
              date: '',
              result: ['', '', '', '', '', '', '']
            }
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
      }
    }
  }
</script>
