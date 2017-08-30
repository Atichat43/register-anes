<template lang="pug">
  .ui.container
    h1.ui.header Create new patient
    .ui.hidden.divider
    .ui.large.form
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
      .ui.hidden.divider

      h2.ui.dividing.header Appointment
      .field
        label Type
        select.ui.search.dropdown
          option(value='') default
          option(value='ElectiveCase') ElectiveCase
      .ui.teal.right.floated.large.button create



</template>

<script>
  export default {
    name: 'patientCreateForm',
    props: {
      patient: {
        type: Object,
        required: true
      }
    },
    mounted () {
      console.log($(this.$el))
    }
  }
</script>
