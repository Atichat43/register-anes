<template lang="pug">
  .ui.basic.segment
    .ui.container
      .ui.relaxed.divided.items
        .item
          .ui.small.image
            img(src="../../assets/logo.png")
          .ui.content
            .header Name: {{ mockData.patient.name }}
            .meta CASE NO: {{ mockData.patient.caseNumber }}
            .description HN: {{ mockData.patient.hn }}
            .description AN: {{ mockData.patient.an }}
            .description Phone: {{ mockData.patient.phone }}
            .description Age: {{ mockData.patient.age }}
      h3.ui.header Pre planning by Doctor
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Pre Operation Diagnosis
            td {{ mockData.patient.diagnose }}
          tr
            td Operation Plan
            td {{ mockData.patient.plan }}
</template>

<script>
  export default {
    name: 'Paitent',
    data () {
      return {
        mockData: {
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
            type: 'Elective case',
            date: '28/5/2017',
            time: 'Morning',
            // ---------  Pre Diagnosis --------------
            diagnose: 'Pre_od',
            plan: 'plan',
            underlying: 'underlying',
            specialTreatment: 'treatment',
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
      }
    }
  }
</script>
