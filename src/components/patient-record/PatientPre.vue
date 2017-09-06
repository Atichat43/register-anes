<template lang="pug">
  .ui.basic.segment
    i.large.write.link.icon(@click="editMode", style="float:right;")
    .ui.hidden.divider
    basic-table(@create="create('Doctor')", :table="table.doctor", :values="patient.preRecord.doctor")
    .ui.hidden.divider.mainPage
    basic-table(@create="create('PhysicalInfo')", :table="table.physicalInfo", :values="patient.preRecord.physicalInfo")

</template>

<style scoped>
  .ui.hidden.divider.mainPage {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>

<script>
  import basicTable from '../shared/basicTable'
  export default {
    name: 'PatientPre',
    components: {
      basicTable
    },
    data () {
      return {
        table: {
          doctor: {
            title: 'Pre Planning by Doctor',
            head: ['Pre Operation Diagnosis', 'Operation Plan', 'Underlying', 'Special Treatment', 'Note']
          },
          physicalInfo: {
            title: 'Physical Information 1',
            head: ['ASA Physical status', 'High alert condition', 'Allergy', 'Smoking', 'Alcohol']
          }
        },

        patient: {
          // from parent page
          hn: '10001',
          an: '20001',
          firstName: 'Atichat',
          lastName: 'Lappanopakon',
          // Patient Record
          preRecord: {
            // -------  Basic Information --------------
            doctor: {
//              photo: 'https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png',
//              caseNumber: 10001,
//              age: 20,
//              opd: 'OPD',
//              phone: '0971249197',
//              // ---------  Appointment --------------
//              type: 'Elective case',
//              date: '28/5/2017',
//              time: 'Morning',
              // ---------  Pre Diagnosis --------------
              diagnose: 'Pre_od',
              plan: 'plan',
              underlying: 'underlying',
              specialTreatment: 'treatment',
              note: 'note'
            },
            doctorTest: null
          }
        }
      }
    },
    methods: {
      editMode () {
        this.$router.push({ name: 'PatientPreEdit' })
      },
      create (name) {
        name = 'Create' + name
        this.$router.push({ name: name, params: { hn: this.patient.hn, no: 1 } })
      }
    }
  }
</script>
