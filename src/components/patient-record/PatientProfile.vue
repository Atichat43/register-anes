<template lang="pug">
  .ui.basic.segment
    i.large.write.link.icon(@click="editMode", style="float:right;")
    .ui.container
      .ui.relaxed.divided.items
        .item
          .ui.small.image
            img(src="../../assets/logo.png")
          .ui.content
            .header Name: {{ patient.firstName }} {{ patient.lastName }}
            .meta CASE NO: {{ patient.caseNumber }}
            .description HN: {{ patient.hn }}
            .description AN: {{ patient.an }}
            .description Phone: {{ patient.preRecord.phone }}
            .description Age: {{ patient.preRecord.age }}
</template>

<script>
  export default {
    name: 'PaitentProfile',
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
        console.log('editMode')
      }
    }
  }
</script>
