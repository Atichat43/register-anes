<template lang="pug">
  .ui.container
    .ui.active.inverted.dimmer(v-if="loading")
      .ui.huge.text.loader Loading
    .ui.basic.segment
      .ui.teal.right.floated.button(@click="createNewPatient") New Patient
    .ui.hidden.divider
    h1.ui.center.aligned.header Search Patient
    .ui.form
      .ui.fields
        .five.wide.field
          select.ui.dropdown(v-model="keywordSearch")
            option(value="hn") HN
            option(value="an") AN
            option(value="firstName") First Name
            option(value="lastName") Last Name
        .nine.wide.field
          .ui.input
            input(v-model="valueSearch", placeholder="Enter typing")
        .two.wide.field
          .ui.primary.button(@click="search") search
    .row
    .ui.hidden.divider
    .ui.basic.segment
      table.ui.very.basic.selectable.definitiontable.table(v-if="patients !== null")
        thead
          tr
            th HN
            th AN
            th FirstName
            th LastName
        tbody
          tr(:class="{'pointer': pointer}", v-for="patient in patients", @click="selectPatient(patient.hn)")
            td {{ patient.hn }}
            td {{ patient.an }}
            td {{ patient.firstName }}
            td {{ patient.lastName }}



</template>

<style scoped>
  .ui.dropdown {
    width: 50%;
  }
</style>

<script>
  import { Patient } from '../services'
  Patient
  export default {
    name: 'SearchPatient',
    created () {
      // Patient.list((list) => { this.patients = list })
    },
    mounted () {
      $('select.dropdown').dropdown()
    },
    data () {
      return {
        loading: false,
        keywordSearch: 'hn',
        valueSearch: '',
        patients: [
          { hn: 'HN00001', an: 'AN00002', firstName: 'Atichat', lastName: 'lastName' },
          { hn: 'HN00002', an: 'AN00002', firstName: 'Garce', lastName: 'lastName' },
          { hn: 'HN00003', an: 'AN00002', firstName: 'Damn', lastName: 'lastName' }
        ]
      }
    },
    props: {
      pointer: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      search () {
        // this.loading = true
        console.log(this.keywordSearch)
        console.log(this.valueSearch)
      },
      selectPatient (patientHN) {
        this.$router.push({ name: 'PatientProfile', params: { hn: patientHN } })
      },
      createNewPatient () {
        this.$router.push({ name: 'PatientCreate' })
      }
    }
  }
</script>
