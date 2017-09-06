<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2 ASA Physical status
      select.ui.dropdown(v-model="patient.asa")
        option(value='') Please define this !
        option(value='1') I
        option(value='2') II
        option(value='3') III
        option(value='4') IV
        option(value='5') V
        option(value='6') VI
        option(value='-1') Emergency
    // Step 2 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      h2 High alert condition
      input(v-model="patient.alertCondition", placeholder="condition")
    // Step 3 --------------------------------------------------------------------
    .grouped.fields(v-show="getCurrentStep === 3")
      h2 Allergy
      .field
        radio(name="allergy", v-model="patient.allergy.value", :selectedValue="false") No
      .field
        radio(name="allergy", v-model="patient.allergy.value", :selectedValue="true") Yes
      .required.field(:class="allergyValue? '':'disabled'")
        label Allergy Symptom
        input(v-model="patient.allergy.text", placeholder="None")
    // Step 4 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 4")
      h2 Smoking
      .grouped.fields
        .field
          radio(name="smoking", v-model="patient.smoking.value", :selectedValue="false") No
        .field
          radio(name="smoking", v-model="patient.smoking.value", :selectedValue="true") Yes

      .field(:class="smokingValue? '':'disabled'")
        .field
          label จำนวนกี่ม้วนต่อวัน
          input(v-model="smokingDuration.amount", v-mask="'##'", placeholder="ม้วน/วัน")
        .field
          label สูบมาเป็น เวลานานกี่ เดือน, ปี
          select.ui.dropdown(v-model="smokingDuration.monthYear")
            option(value='') ระบุ เดือน/ปี
            option(value='1') Month
            option(value='12') Year
        .field
          input(v-model="smokingDuration.times", v-mask="'##'", placeholder="นาน(เดือน,ปี)")

      .field(:class="smokingValue? '':'disabled'")
        label หยุดสูบมาเป็นเวลา
        .field
          select.ui.dropdown(v-model="smokingDuration.stoppedMonthYear")
            option(value='') ระบุ วัน/เดือน/ปี
            option(value='0') Day
            option(value='1') Month
            option(value='12') Year
        .field
          input(v-model="smokingDuration.stoppedAmount", v-mask="'##'", placeholder="นาน(เดือน,ปี)")
    // Step 5 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 5")
      label Alcohol
      .field
        radio(name="alcohol", v-model="patient.alcohol.value", :selectedValue="false") No
      .field
        radio(name="alcohol", v-model="patient.alcohol.value", :selectedValue="true") Yes
      .required.field(:class="alcoholValue? '':'disabled'")
        label Alcohol Note
        input(v-model="patient.alcohol.text", placeholder="โปรดระบุปริมาณ และความถี่ในการดื่ม")

    // Step 6 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 6")
      review-table(:table="table", :values="patient")
</template>

<script>
  import radio from '../../shared/Radio'
  import BasicTable from '../../shared/basicTable.vue'
  export default {
    name: 'CreatePhysicalInfo',
    components: {
      BasicTable,
      radio
    },
    data () {
      return {
        currentStep: 1,
        table: {
          title: 'Review Data',
          head: ['ASA level', 'High Alert Condition', 'Allergy', 'Smoking', 'Alcohol']
        },
        smokingDuration: {
          amount: '',
          times: '',
          monthYear: '',
          stoppedAmount: '',
          stoppedMonthYear: ''
        },
        patient: {
          asa: 0,
          alertCondition: '',
          allergy: {
            value: false,
            text: ''
          },
          smoking: {
            value: false,
            text: ''
          },
          alcohol: {
            value: false,
            text: ''
          }
        }
      }
    },
    mounted () {
      $('select.dropdown').dropdown()
    },
    methods: {
      reload () {
        this.getCurrentStep
      }
    },
    computed: {
      getCurrentStep () {
        this.currentStep = this.$route.params.no
        return this.currentStep
      },
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
      }
    }
  }
</script>
