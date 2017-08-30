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
            th Pic
            th HN
            th AN
            th Name
            th Phone
        tbody
          tr(:class="{'pointer': pointer}", v-for="patient in mockDB.patients", @click="selectPatient(patient.hn)")
            td
              img.ui.circular.image(src="patient.photo", width="50", height="50")
            td {{ patient.hn }}
            td {{ patient.an }}
            td {{ patient.name }}
            td {{ patient.phone }}

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
            { photo: '../assets/logo.png', hn: 'HN00001', an: 'AN00002', name: 'Atichat', phone: '0971249197' },
            { photo: '../assets/logo.png', hn: 'HN00002', an: 'AN00002', name: 'Garce', phone: '0971249197' },
            { photo: '../assets/logo.png', hn: 'HN00003', an: 'AN00002', name: 'Damn', phone: '0971249197' }
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
