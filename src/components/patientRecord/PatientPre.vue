<template lang="pug">
  .ui.basic.segment
    i.large.write.link.icon(@click="editMode", style="float:right;")
    .ui.container
      h3.ui.header Pre Planning by Doctor
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Pre Operation Diagnosis
            td {{ patient.preRecord.diagnose }}
          tr
            td Operation Plan
            td {{ patient.preRecord.plan }}
          tr
            td Underlying
            td {{ patient.preRecord.underlying }}
          tr
            td Special Treatment
            td {{ patient.preRecord.specialTreatment }}
          tr
            td Note
            td {{ patient.preRecord.note }}


      h3.ui.header ICU Record
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Service Record
            td {{ patient.preRecord.icu }}
          tr
            td Bed Number
            td {{ patient.preRecord.bedNumber }}
          tr
            td Service
            td {{ patient.preRecord.service }}
          tr
            td ASA
            td {{ patient.preRecord.asa }}

      h3.ui.header Personal Health Record
      table.ui.definition.fixed.single.line.table
        tbody
          tr
            td(class="five wide") Premed
            td {{ patient.preRecord.premed }}
          tr
            td PRC
            td {{ patient.preRecord.prc }}
          tr
            td FFP
            td {{ patient.preRecord.ffp }}
          tr
            td PLT
            td {{ patient.preRecord.plt }}
          tr
            td PC
            td {{ patient.preRecord.pc }}
          tr
            td Weight
            td {{ patient.preRecord.weight }}
          tr
            td Height
            td {{ patient.preRecord.height }}
          tr
            td Blood Pressure
            td {{ patient.preRecord.bloodPressure }}
          tr
            td P
            td {{ patient.preRecord.p }}
          tr
            td RR
            td {{ patient.preRecord.rr }}
          tr
            td T
            td {{ patient.preRecord.t }}
          tr
            td GSC
            td {{ patient.preRecord.gsc }}
          tr
            td Smoking
            td {{ patient.preRecord.smoking }}
          tr
            td Alcoholic
            td {{ patient.preRecord.alcoholic }}
          tr(rowspan="2")
            td Allergy
            td
              label(v-for=" allergy in patient.preRecord.allergy") {{ allergy.medName }} &nbsp;


</template>

<script>
  export default {
    name: 'PatientPre',
    data () {
      return {
        patient: {
          // from parent page
          hn: '10001',
          an: '20001',
          firstName: 'Atichat',
          lastName: 'Lappanopakon',
          // Patient Record
          preRecord: {
            // -------  Basic Information --------------
            photo: 'https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png',
            caseNumber: 10001,
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
            premed: 'premed',
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
          },
          intraRecord: {
            // BRING PATIENT
            number: 0,
            date: '11/07/1996',
            caseNumber: 10001,
            room: 5,
            building: 'select',
            preEvalNurse: ['คนที่หนึ่ง', 'คนที่สอง'],
            comfrom: 'select',
            sendback: 'select',
            // OPERATION
            diagnose: 'diagnose',
            operation: 'operation',
            type: 'select',
            department: 'select',
            surgeon: 'surgeon',
            note: 'noteeeee',
            // SEND BACK
            preAnesEval: 'select',
            service: 'select',
            asad: 'select',
            dormicum: 'dorm',
            ephedrine: 'ephedrine',
            ketamine: 'ketamine',
            anes_technique: 'anes_technique',
            combine_technique: 'combine_technique',
            airway: 'airway',
            start: '11:00',
            end: '22:00',
            reason: 'reason',
            nurses: ['nurse คนที่หึ่ง', 'nurse คนที่หึ่ง']
          },
          postRecord: {
            surgery: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            },
            rehab: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            },
            twoHour: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            },
            oneDay: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            },
            after: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            },
            twoDay: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            },
            sevenDay: {
              incident: 'mutiple select',
              note: 'note',
              result: 'result',
              name: 'name',
              date: '11/07/2556'
            }
          }
        }
      }
    },
    methods: {
      editMode () {
        this.$router.push({ name: 'PatientPreEdit' })
      }
    }
  }
</script>
