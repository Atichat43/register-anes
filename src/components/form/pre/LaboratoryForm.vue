<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 CBC
      // แก้ตรงนี้ด้วย
      .field
        label ผลเมือวันที่
        input(v-model="patient.laboratory.cbc.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .field
        label WBC
        input(v-model="patient.laboratory.cbc.result[0]")
      .field
        label Hb
        input(v-model="patient.laboratory.cbc.result[1]")
      .field
        label Hct
        input(v-model="patient.laboratory.cbc.result[2]")
      .field
        label Plt
        input(v-model="patient.laboratory.cbc.result[3]")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 Blood chemistry
        // แก้ตรงนี้ด้วย
      .field
        label ผลเมื่อวันที่
        input(v-model="patient.laboratory.blood.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .field
        label Na+
        input(v-model="patient.laboratory.blood.result[0]")
      .field
        label K+
        input(v-model="patient.laboratory.blood.result[1]")
      .field
        label Cl-
        input(v-model="patient.laboratory.blood.result[2]")
      .field
        label HCO3-
        input(v-model="patient.laboratory.blood.result[3]")
      .ui.color.divider
      .field
        label BUN
        input(v-model="patient.laboratory.blood.result[4]")
      .field
        label Cr
        input(v-model="patient.laboratory.blood.result[5]")
      .field
        label GFR
        input(v-model="patient.laboratory.blood.result[6]")
      .ui.color.divider
      .field
        label GLU
        input(v-model="patient.laboratory.blood.result[7]")
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      h2 Coagulagram
      .field
        label ผลของวันทั้
        input(v-model="patient.laboratory.coagulogram.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
        .field
          label PT
          input(v-model="patient.laboratory.coagulogram.result[0]")
        .field
          label INR
          input(v-model="patient.laboratory.coagulogram.result[1]")
        .field
          label PTT
          input(v-model="patient.laboratory.coagulogram.result[2]")
        .field
          label APTT ratio
          input(v-model="patient.laboratory.coagulogram.result[3]")
    .field(v-show="getCurrentStep === 4")
      h2 LFT
        // แก้ตรงนี้ด้วย
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

    // .field(v-show="getCurrentStep === 5")
      h2 CBC {{ patient.laboratory.cbc.date }}
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") WBC
            td {{ patient.laboratory.cbc.result[0] }}
          tr
            td Hb
            td {{ patient.laboratory.cbc.result[1] }}
          tr
            td Hct
            td {{ patient.laboratory.cbc.result[2] }}
          tr
            td Plt
            td {{ patient.laboratory.cbc.result[3] }}
      .ui.color.divider
      h2 Blood chemistry {{ patient.laboratory.blood.date }}
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Na+
            td {{ patient.laboratory.blood.result[0] }}
          tr
            td K+
            td {{ patient.laboratory.blood.result[1] }}
          tr
            td Cl-
            td {{ patient.laboratory.blood.result[2] }}
          tr
            td HCO3-
            td {{ patient.laboratory.blood.result[3] }}
          tr
            td BUN
            td {{ patient.laboratory.blood.result[4] }}
          tr
            td Cr
            td {{ patient.laboratory.blood.result[5] }}
          tr
            td GFR
            td {{ patient.laboratory.blood.result[6] }}
          tr
            td GLU
            td {{ patient.laboratory.blood.result[7] }}

      .ui.color.divider
      h2 Blood chemistry {{ patient.laboratory.blood.date }}
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Na+
            td {{ patient.laboratory.blood.result[0] }}
          tr
            td K+
            td {{ patient.laboratory.blood.result[0] }}
          tr
            td Cl-
            td {{ patient.laboratory.blood.result[0] }}
          tr
            td HCO3-
            td {{ patient.laboratory.blood.result[0] }}

      .ui.color.divider
      h2 Coagulagram {{ patient.laboratory.cbc.date }}
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") PT
            td {{ patient.laboratory.coagulogram.result[0] }}
          tr
            td INR
            td {{ patient.laboratory.coagulogram.result[1] }}
          tr
            td PTT
            td {{ patient.laboratory.coagulogram.result[2] }}
          tr
            td APTT ratio
            td {{ patient.laboratory.coagulogram.result[3] }}

      .ui.color.divider
      h2 LFT {{ patient.laboratory.lft.date }}
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Alb
            td {{ patient.laboratory.lft.result[0] }}
          tr
            td Glb
            td {{ patient.laboratory.lft.result[1] }}
          tr
            td TB
            td {{ patient.laboratory.lft.result[2] }}
          tr
            td DB
            td {{ patient.laboratory.lft.result[3] }}
          tr
            td IB
            td {{ patient.laboratory.lft.result[4] }}
          tr
            td SGOT
            td {{ patient.laboratory.lft.result[5] }}
          tr
            td SGPT
            td {{ patient.laboratory.lft.result[6] }}
          tr
            td ALP
            td {{ patient.laboratory.lft.result[7] }}

</template>

<style scoped>
  .ui.color.divider {
    color: #ffa100;
    border-top: 1px solid rgba(220, 127, 12, 0.15);
    border-bottom: 1px solid rgb(196, 65, 65);
  }
</style>


<script>
  // import { getConfig } from './config'
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
    },
    methods: {
    }
  }
</script>
