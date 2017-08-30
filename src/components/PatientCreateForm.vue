<template lang="pug">
  .ui.container
    h1.ui.header Create new patient
    .ui.hidden.divider
    .ui.large.form
      // --------------------------------------------------------------------------
      h2.ui.dividing.header Basic Information
      .required.field
        label HN
        input(v-model="patient.hn", placeholder="Hospital Number")
      .required.field
        label AN
        input(v-model="patient.an", placeholder="Anes Number")
      .required.field
        label Name
        input(v-model="patient.name", placeholder="Name")
      .field
        label Age
        input(v-model="patient.age", v-mask="'##'", placeholder="Age")
      .field
        label Phone
        input(v-model="patient.phone", placeholder="Phone")

      // --------------------------------------------------------------------------
      .ui.hidden.divider
      h2.ui.dividing.header Appointment
      .field
        label Type
        select.ui.search.dropdown( v-model="patient.type")
          option(value='') default
          option(value='elective') Elective case
          option(value='emergency') Elective case
          option(value='ergency') Ergency case
      .field
        label Date ( TODAY: {{ getCurrentDate }})
        input(v-model="patient.date", v-mask="'##/##/####'")
      .field
        label Time
        select.ui.search.dropdown( v-model="patient.time")
          option(value='') default
          option(value='morning') Morning
          option(value='afternoon') Afternoon
          option(value='none') None
      // --------------------------------------------------------------------------
      .ui.hidden.divider
      h2.ui.dividing.header Diagnosis
      .field
        label Pre Operation Diagnode
        textarea(rows="2", v-model="patient.diagnose")
      .field
        label Pre Operation Plan
        textarea(rows="2", v-model="patient.plan")
      .field
        label Underlying
        textarea(rows="2", v-model="patient.underlying")
      .field
        label Speacial treatment
        textarea(rows="2", v-model="patient.treatment")
      .field
        label Note
        textarea(rows="2", v-model="patient.note")
      .row
        .ui.teal.right.floated.large.button(@click="create") create
        .ui.right.floated.large.button(@click="cancel") cancel
      confirm-cancel(ref="confirmCancel")
</template>

<script>
  import moment from 'moment'
  import confirmCancel from '../components/modal/confirmCancel'
  export default {
    name: 'patientCreateForm',
    components: {
      confirmCancel
    },
    props: {
      patient: {
        type: Object,
        required: true
      }
    },
    mounted () {
      $('select.dropdown').dropdown()
      if (!this.patient.date) { this.patient.date = moment().format('L') }
    },
    methods: {
      create () {
        console.log(this.patient)
      },
      cancel () {
        console.log('cancel')
        this.$refs.confirmCancel.show(() => {
          console.log('after')
        })
      }
    },
    computed: {
      getCurrentDate: function () {
        console.log(this.patient.date)
        return moment().format('L')
      }
    }
  }
</script>
