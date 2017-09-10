<template lang="pug">
  .ui.container
    .ui.hidden.divider
    .ui.large.form
      .ui.hidden.divider
      h2.ui.dividing.header Laboratory
      .inline.field
        label CBC
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.cbc.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
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

      .ui.hidden.divider
      .inline.field
        label Blood chemistry
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.blood.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
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
        .ui.hidden.divider
        .fields
          .field
            label BUN
            input(v-model="patient.laboratory.blood.result[4]")
          .field
            label Cr
            input(v-model="patient.laboratory.blood.result[5]")
          .field
            label GFR
            input(v-model="patient.laboratory.blood.result[6]")
        .ui.hidden.divider
        .three.wide.field
          label GLU
          input(v-model="patient.laboratory.blood.result[7]")

      .ui.hidden.divider
      .inline.field
        label Coagulagram
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.coagulogram.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
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

      .ui.hidden.divider
      .inline.field
        label LFT
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.lft.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
          .field
            label Alb
            input(v-model="patient.laboratory.lft.result[0]")
          .field
            label Glb
            input(v-model="patient.laboratory.lft.result[1]")
          .field
            label TB
            input(v-model="patient.laboratory.lft.result[2]")
          .field
            label DB
            input(v-model="patient.laboratory.lft.result[3]")
          .field
            label IB
            input(v-model="patient.laboratory.lft.result[4]")
          .field
            label SGOT
            input(v-model="patient.laboratory.lft.result[5]")
          .field
            label SGPT
            input(v-model="patient.laboratory.lft.result[6]")
          .field
            label ALP
            input(v-model="patient.laboratory.lft.result[7]")




</template>

<style scoped>
  .ui.right.floated.label {
    float: right;
    margin-right: 0.25em;
  }
</style>

<script>
  import Radio from '../shared/Radio'
  export default {
    name: 'patientPreEdit',
    components: {
      Radio
    },
    mounted () {
      // console.log(this.$refs.inputColor)
      // $(this.$refs.inputColor).addClass('moreRange')
      $('select.dropdown').dropdown()
    },
    updated () {
    },
    data () {
      return {
          icu: {
            value: false,
            getBed: ''
          },
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
    computed: {
    },
    methods: {
    }
  }
</script>
