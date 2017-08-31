<template lang="pug">
  .ui.container
    .ui.basic.segment
      .ui.teal.right.floated.button(:class="{'disabled': loading }", @click="createNewPatient") New Patient
    .ui.hidden.divider
    h1.ui.center.aligned.header ค้นหาคนไข้
    .row
      .ui.fluid.input
        input(v-model="keyword", placeholder="Enter typing")
    .row
    .ui.hidden.divider
    .ui.basic.segment
      .ui.active.inverted.dimmer(v-if="loading")
        .ui.huge.text.loader Loading
      table.ui.very.basic.selectable.definitiontable.table(v-if="mockDB.patients !== null")
        thead
          tr
            th HN
            th AN
            th FirstName
            th LastName
        tbody
          tr(:class="{'pointer': pointer}", v-for="patient in mockDB.patients", @click="selectPatient(patient.hn)")
            td {{ patient.hn }}
            td {{ patient.an }}
            td {{ patient.firstName }}
            td {{ patient.lastName }}


    newPatientModal(ref="newPatientModal")

</template>

<script>
  import newPatientModal from './modal/newPatientModal'
  export default {
    name: 'SearchPatient',
    components: {
      newPatientModal
    },
    data () {
      return {
        loading: false,
        mockDB: {
          patients: [
            { hn: 'HN00001', an: 'AN00002', firstName: 'Atichat', lastName: 'lastName' },
            { hn: 'HN00002', an: 'AN00002', firstName: 'Garce', lastName: 'lastName' },
            { hn: 'HN00003', an: 'AN00002', firstName: 'Damn', lastName: 'lastName' }
          ]
        }
      }
    },
    props: {
      pointer: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      selectPatient (patientHN) {
        this.$router.push({ name: 'Patient', params: { hn: patientHN } })
      },
      createNewPatient () {
        this.$router.push({ name: 'PatientCreate' })
      }
    }
  }
</script>
