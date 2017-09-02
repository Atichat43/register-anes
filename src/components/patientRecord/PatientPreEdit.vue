<template lang="pug">
  .ui.container
    .ui.hidden.divider
    .ui.large.form
      // --------------------------------------------------------------------------
      h2.ui.dividing.header Important Condition
      .field
        label ASA Physical status
        select.ui.dropdown( v-model="patient.asa")
          option(value='') Please define this !
          option(value='1') I
          option(value='2') II
          option(value='3') III
          option(value='4') IV
          option(value='5') V
          option(value='6') VI
          option(value='-1') Emergency

      .field
        label High alert condition
        input(v-model="patient.alertCondition", placeholder="condition")

      .inline.fields
        label Allergy
        .field
          radio(name="allergy", v-model="patient.allergy.value", :selectedValue="false") No
        .field
          radio(name="allergy", v-model="patient.allergy.value", :selectedValue="true") Yes
      .required.field(:class="allergyValue? '':'disabled'")
        label Allergy Symptom
        input(v-model="patient.allergy.symptom", placeholder="None")

      .inline.fields
        label Smoking
        .field
          radio(name="smoking", v-model="patient.smoking.value", :selectedValue="false") No
        .field
          radio(name="smoking", v-model="patient.smoking.value", :selectedValue="true") Yes
        .ui.right.floated.label {{ getSmokingDuration }} pack of year
      .inline.fields(:class="smokingValue? '':'disabled'")
        label ระยะเวลาสูบบุหรี่
        .three.wide.field
          input(v-model="smokingDuration.amount", v-mask="'##'", placeholder="ม้วน/วัน")
        label *
        .three.wide.field
          input(v-model="smokingDuration.times", v-mask="'##'", placeholder="นาน(เดือน,ปี)")
        .field
          select.ui.dropdown(v-model="smokingDuration.monthYear")
            option(value='') ระบุ เดือน/ปี
            option(value='1') Month
            option(value='12') Year
      .inline.fields(:class="smokingValue? '':'disabled'")
        label หยุดสูบมาเป็นเวลา
        .four.wide.field
          input(v-model="smokingDuration.stoppedAmount", v-mask="'##'", placeholder="นาน(เดือน,ปี)")
        .field
          select.ui.dropdown(v-model="smokingDuration.stoppedMonthYear")
            option(value='') ระบุ วัน/เดือน/ปี
            option(value='0') Day
            option(value='1') Month
            option(value='12') Year

      .inline.fields
        label Alcohol
        .field
          radio(name="alcohol", v-model="patient.alcohol.value", :selectedValue="false") No
        .field
          radio(name="alcohol", v-model="patient.alcohol.value", :selectedValue="true") Yes
      .required.field(:class="alcoholValue? '':'disabled'")
        label Alcohol Note
        input(v-model="patient.alcohol.note", placeholder="โปรดระบุปริมาณ และความถี่ในการดื่ม")

      h2.ui.dividing.header Previous Operation
      .ui.small.form(v-for="(operation, index) in patient.previousOperations")
        .inline.field
          h3 Previous Operation ครั้งที่ {{ index + 1 }}
            i.delete.link.icon(v-if="index+1 !== 1",@click="patient.previousOperations.splice(index, 1)", style="float:right;")
        .field
          label Date
          input(v-model="operation.date")
        .field
          label Previous Op.
          input(v-model="operation.operation")
        .field
          label Type of anes
          input(v-model="operation.type")
        .field
          label Complication
          input(v-model="operation.complication")
        .ui.hidden.divider
      .ui.right.floated.button(@click="addPreviousOperation") add new

      .ui.hidden.divider
      h2.ui.dividing.header Drugs
      .inline.fields
        label Current drugs
        .field
          radio(name="currentDrugs", v-model="patient.currentDrugs.value", :selectedValue="false") No
        .field
          radio(name="currentDrugs", v-model="patient.currentDrugs.value", :selectedValue="true") Yes
      .field(v-for="(drug, index) in patient.currentDrugs.drugs", :class="patient.currentDrugs.value? '':'disabled'")
        .ui.icon.input
          input(v-model.lazy="patient.currentDrugs.drugs[index]")
          i.delete.link.icon(@click="patient.currentDrugs.drugs.splice(index, 1)")

      .inline.fields
        label Premedication
        .field
          radio(name="premedication", v-model="patient.premedication.value", :selectedValue="false") No
        .field
          radio(name="premedication", v-model="patient.premedication.value", :selectedValue="true") Yes
      .field(v-for="(medication, index) in patient.premedication.medication", :class="patient.premedication.value? '':'disabled'")
        .ui.icon.input
          input(v-model.lazy="patient.premedication.medication[index]")
          i.delete.link.icon(@click="patient.premedication.medication.splice(index, 1)")

      .ui.hidden.divider
      h2.ui.dividing.header Blood components/ ICU
      .inline.fields
        label Blood components prepared
        .field
          radio(name="components", v-model="patient.componentsPrepare.value", :selectedValue="false") No
        .field
          radio(name="components", v-model="patient.componentsPrepare.value", :selectedValue="true") Yes
      .ui.small.form
        .field(:class="patient.componentsPrepare.value? '':'disabled'")
          label PRC
          input(v-model="patient.componentsPrepare.components[0]", v-mask="'##'")
        .field(:class="patient.componentsPrepare.value? '':'disabled'")
          label FFP
          input(v-model="patient.componentsPrepare.components[1]", v-mask="'####'")
        .field(:class="patient.componentsPrepare.value? '':'disabled'")
          label Plt conc
          input(v-model="patient.componentsPrepare.components[2]", v-mask="'##'")
        .field(v-for=" otherIndex in (patient.componentsPrepare.components.length - 3)", :class="patient.componentsPrepare.value? '':'disabled'")
          label Others {{ otherIndex }}
          .ui.icon.input
            input(v-model.lazy="patient.componentsPrepare.components[otherIndex+2]")
            i.delete.link.icon(@click="deleteComponentsPrepare(otherIndex+2)")
      .ui.hidden.divider

      .inline.fields
        label Planned ICU
        .field
          radio(name="icu", v-model="patient.icu.value", :selectedValue="false") No
        .field
          radio(name="icu", v-model="patient.icu.value", :selectedValue="true") Yes
      .required.field(:class="icuValue? '':'disabled'")
        label ได้เตียงไหม ?
        .field
          select.ui.dropdown(v-model="smokingDuration.stoppedMonthYear")
            option(value='-1') ได้เตียง
            option(v-for="queue in 10", value='queue') เตียงเต็มได้คิวที่ {{ queue }}

      .ui.hidden.divider
      h2.ui.dividing.header Laboratory
      .inline.field
        label CBC
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.cbc.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
          .field
            label WBC
            input(v-model="patient.laboratory.cbc.result[0]")
          .field
            label Hb
            input(v-model="patient.laboratory.cbc.result[1]")
          .field
            label Hct
            input(v-model="patient.laboratory.cbc.result[2]")
          .field
            label Plt
            input(v-model="patient.laboratory.cbc.result[3]")

      .ui.hidden.divider
      .inline.field
        label Blood chemistry
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.blood.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
          .field
            label Na+
            input(v-model="patient.laboratory.blood.result[0]")
          .field
            label K+
            input(v-model="patient.laboratory.blood.result[1]")
          .field
            label Cl-
            input(v-model="patient.laboratory.blood.result[2]")
          .field
            label HCO3-
            input(v-model="patient.laboratory.blood.result[3]")
        .ui.hidden.divider
        .fields
          .field
            label BUN
            input(v-model="patient.laboratory.blood.result[4]")
          .field
            label Cr
            input(v-model="patient.laboratory.blood.result[5]")
          .field
            label GFR
            input(v-model="patient.laboratory.blood.result[6]")
        .ui.hidden.divider
        .three.wide.field
          label GLU
          input(v-model="patient.laboratory.blood.result[7]")

      .ui.hidden.divider
      .inline.field
        label Coagulagram
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.coagulogram.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
          .field
            label PT
            input(v-model="patient.laboratory.coagulogram.result[0]")
          .field
            label INR
            input(v-model="patient.laboratory.coagulogram.result[1]")
          .field
            label PTT
            input(v-model="patient.laboratory.coagulogram.result[2]")
          .field
            label APTT ratio
            input(v-model="patient.laboratory.coagulogram.result[3]")

      .ui.hidden.divider
      .inline.field
        label LFT
        // แก้ตรงนี้ด้วย
        .ui.right.aliagned.mini.input
          input(v-model="patient.laboratory.lft.date", v-mask="'##/##/####'" , placeholder="DD/MM/YYYY")
      .ui.tiny.form
        .fields
          .field
            label Alb
            input(v-model="patient.laboratory.lft.result[0]")
          .field
            label Glb
            input(v-model="patient.laboratory.lft.result[1]")
          .field
            label TB
            input(v-model="patient.laboratory.lft.result[2]")
          .field
            label DB
            input(v-model="patient.laboratory.lft.result[3]")
          .field
            label IB
            input(v-model="patient.laboratory.lft.result[4]")
          .field
            label SGOT
            input(v-model="patient.laboratory.lft.result[5]")
          .field
            label SGPT
            input(v-model="patient.laboratory.lft.result[6]")
          .field
            label ALP
            input(v-model="patient.laboratory.lft.result[7]")




</template>

<style scoped>
  .ui.right.floated.label {
    float: right;
    margin-right: 0.25em;
  }
</style>

<script>
  import Radio from '../shared/Radio'
  export default {
    name: 'patientPreEdit',
    components: {
      Radio
    },
    mounted () {
      // console.log(this.$refs.inputColor)
      // $(this.$refs.inputColor).addClass('moreRange')
      $('select.dropdown').dropdown()
    },
    updated () {
      this.addEmptyLastElements(this.patient.currentDrugs.drugs)
      this.addEmptyLastElements(this.patient.premedication.medication)
      this.addEmptyLastElements(this.patient.componentsPrepare.components)
    },
    data () {
      return {
        text: '',
        smokingDuration: {
          amount: '',
          times: '',
          monthYear: '',
          stoppedAmount: '',
          stoppedMonthYear: ''
        },
        contentLab: [
          { name: 'CBC', results: ['WBC', 'Hb', 'Hct', 'Plt'] },
          { name: 'Blood', results: ['Na+', 'K+', 'Cl-', 'HCO3-', 'BUN', 'Cr', 'GFR', 'Glu'] },
          { name: 'Coagulogram', results: ['PT', 'PTT', 'INR', 'APTT ratio'] },
          { name: 'LFT', results: ['Alb', 'Glb', 'TB', 'DB', 'IB', 'SGOT', 'SGPT', 'ALP'] }
        ],
        patient: {
          allergy: {
            value: false
          },
          smoking: {
            value: false,
            duration: ''
          },
          alcohol: {
            value: false,
            note: ''
          },
          previousOperations: [
            {
              date: '',
              operation: '',
              type: '',
              complication: ''
            }
          ],
          currentDrugs: {
            value: false,
            drugs: ['']
          },
          premedication: {
            value: false,
            medication: ['']
          },
          componentsPrepare: {
            value: false,
            components: ['', '', '', '']
          },
          icu: {
            value: false,
            getBed: ''
          },
          laboratory: {
            cbc: {
              date: '',
              result: ['', '', '', '']
            },
            blood: {
              date: '',
              result: ['', '', '', '', '', '', '', '']
            },
            coagulogram: {
              date: '',
              result: ['', '', '', '']
            },
            lft: {
              date: '',
              result: ['', '', '', '', '', '', '']
            }
          }
        }
      }
    },
    computed: {
      allergyValue () {
        if (!this.patient.allergy.value) { this.patient.allergy.symptom = '' }
        return this.patient.allergy.value
      },
      smokingValue () {
        if (!this.patient.smoking.duration) { this.patient.smoking.duration = '' }
        return this.patient.smoking.value
      },
      getSmokingDuration () {
        this.smokingDuration
        this.patient.smoking.duration = 1
        return this.patient.smoking.duration
      },
      alcoholValue () {
        if (!this.patient.alcohol.value) { this.patient.alcohol.note = '' }
        return this.patient.alcohol.value
      },
      icuValue () {
        // if (!this.patient.icu.value) { this.patient.icu.note = '' }
        return this.patient.icu.value
      }
    },
    methods: {
      addPreviousOperation () {
        this.patient.previousOperations.push({
          date: '',
          operation: '',
          type: '',
          complication: ''
        })
      },
      addEmptyLastElements (target) {
        if (target[target.length - 1] !== '') {
          target.push('')
        }
      },
      deleteComponentsPrepare (index) {
        this.patient.componentsPrepare.components.splice(index)
        if (this.patient.componentsPrepare.components.length === 3) {
          this.patient.componentsPrepare.components.push('')
        }
      }
    }
  }
</script>
