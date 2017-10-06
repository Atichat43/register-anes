<template lang="pug">
  .ui.basic.segment
    .ui.basic.segment(v-for="(value, key, index) in table")
      i.large.write.link.icon(v-show="patient.intraRecord[key] !== null", @click="editMode(key)", style="float:right;")
      basic-table(@create="create(key)", :table="table[key]", :values="patient.intraRecord[key]")
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
  import { getConfig } from '../form/intra/config_intra'
  export default {
    name: 'PatientInra',
    data () {
      return {
        table: {
          surgeon: getConfig('surgeon'),
          agents: getConfig('agents'),
          technique: getConfig('technique'),
          post: getConfig('post')
        },
        patient: {
          hn: '10001',
          intraRecord: {
            surgeon: null,
            agents: null,
            technique: null,
            post: null
          }
        }
      }
    },
    methods: {
      editMode () {
        console.log('editMode')
      },
      create (part) {
        this.$router.push({ name: 'CreateIntraRecord', params: { hn: this.patient.hn, no: 1, part: part } })
      }
    }
  }
</script>
