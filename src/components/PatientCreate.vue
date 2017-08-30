<template lang="pug">
  .ui.basic.segment
    h6 Patient create layout
    patient-create-form(:patient="patient")
    .ui.hidden.divider
</template>

<script>
  import patientCreateForm from '../components/patientCreateForm'
  export default {
    name: 'patientCreate',
    data () {
      return {
        patient: {
          // -------  Basic Information --------------
          hn: 'HN00001',
          an: 'AN00001',
          caseNumber: 10001,
          name: 'Atichat Lappanopakon',
          age: 20,
          opd: 'OPD',
          phone: '0971249197',
          // ---------  Appointment --------------
          type: 'ergency',
          date: '',
          time: 'morning',
          // ---------  Pre Diagnosis --------------
          diagnose: 'Pre_od',
          plan: 'plan',
          underlying: 'underlying',
          treatment: 'treatment',
          note: 'note',
          // -------- personal health record -----------
          premed: '',
          prc: 50,
          ffp: 50,
          plt: 50,
          pc: 50,
          // ---
          icu: false,
          bedNumber: 3,
          service: 'in',
          asa: 'I',
          // ---
          weight: 100,
          height: 100,
          bloodPressure: 20,
          p: 0,
          rr: 0,
          t: 0,
          gsc: 'E',
          smoking: true,
          alcoholic: true,
          allergy: [
            { medName: 'ชื่อยา', symptom: 'คัน' },
            { medName: 'ชื่อยา', symptom: 'คัน' },
            { medName: 'ชื่อยา', symptom: 'คัน' }
          ]
        }
      }
    },
    components: {
      patientCreateForm
    },
    methods: {
      create () {
        console.log('create')
      }
    },
    mounted () {
    }
  }
</script>
