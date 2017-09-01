<template lang="pug">
  .div
    h1 Home
    .ui.modal
      i.close.icon
      .header
        | Modal Title
      .image.content
        .image
          | An image can appear on left or an icon
        .description
          | A description can appear on the right
      .actions
        .ui.button Cancel
        .ui.button OK
    // download-excel(class="btn btn-default", :data="json_data", :fields="json_fields", name="testDatabase.xls")
</template>

<script>
  export default {
    mounted () {
      $('.ui.modal').modal('hide')
    },
    computed: {
//      list () {
//        return this.patients.map((patient) => {
//          return {
//            ...patient
//          }
//        })
//      }
    },
    data () {
      return {
        patients: [],
        json_fields: {
          name: 'String',
          city: 'String',
          country: 'String',
          birthdate: 'String',
          amount: 'Number'
        },
        json_data: [
          {
            name: 'Tony Peña',
            city: 'New York',
            country: 'United States',
            birthdate: '1978-03-15',
            amount: 42
          },
          {
            name: 'Thessaloniki',
            city: 'Athens',
            country: 'Greece',
            birthdate: '1987-11-23',
            amount: 42
          }
        ]
      }
    }
  }
</script>
