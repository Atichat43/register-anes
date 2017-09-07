<template lang="pug">
  .ui.basic.segment
    .ui.basic.segment(v-for="(value, key, index) in table")
      i.large.write.link.icon(v-show="patient.preRecord[key] !== null", @click="editMode(key)", style="float:right;")
      basic-table(@create="create(key)", :table="table[key]", :values="patient.preRecord[key]")
</template>

<style scoped>
  .ui.hidden.divider {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  .ui.basic.segment {
    margin-top: 0rem;
  }
</style>

<script>
  import { getConfig } from '../form/pre/config'
  export default {
    name: 'PatientPre',
    data () {
      return {
        table: {
          doctor: getConfig('doctor'),
          physicalInfo: getConfig('physicalInfo'),
          information: getConfig('information'),
          planning: getConfig('planning'),
          laboratory: getConfig('laboratory'),
          investigation: getConfig('investigation'),
          discussion: getConfig('discussion'),
          examination: getConfig('examination')
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
              diagnose: 'Pre_od',
              plan: 'plan',
              underlying: 'underlying',
              specialTreatment: 'treatment',
              note: 'note'
            },
            physicalInfo: null,
            information: null,
            planning: null,
            laboratory: null,
            investigation: null,
            discussion: null,
            examination: null
          }
        }
      }
    },
    methods: {
      editMode () {
        console.log('editMode')
      },
      create (part) {
        this.$router.push({ name: 'CreatePreRecord', params: { hn: this.patient.hn, no: 1, part: part } })
      }
    }
  }
</script>
