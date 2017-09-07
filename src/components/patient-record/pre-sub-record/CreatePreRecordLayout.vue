<template lang="pug">
  .container
    .ui.center.aligned.header title
    .ui.indicating.progress(ref="progress")
      .bar
    .ui.small.ordered.steps(ref="stepsRef", :class="numberString[steps.length]")
      .step(v-for="(step, index) in steps", :class="getStepClass(index+1)", @click="backStep(index+1)")
        .content
          .title {{ step.name }}
    .ui.segment
      physical-info-form(v-if="part === 'physicalInfo'")
      information-form(v-else-if="part === 'information'")
      planning-form(v-else-if="part === 'planning'")
      laboratory-form(v-else-if="part === 'laboratory'")
      investigation-form(v-else-if="part === 'investigation'")
      discussion-form(v-else-if="part === 'discussion'")
      examination-form(v-else-if="part === 'examination'")
      not-found(v-else)
    .ui.hidden.divider
      .ui.primary.right.floated.button(v-if="this.$route.params.no < steps.length", @click="nextStep") next
      .ui.green.right.floated.button(v-else, @click="confirm") confirm
</template>

<style scoped>
  .ui.indicating.progress {
    margin-bottom: 0rem;
  }
  .ui.right.floated.button {
    width: 25%;
    min-height: 1.3rem;
  }
  .ui.center.aligned.header {
    font-size: 3rem;
    margin-bottom: 0rem;
  }
</style>

<script>
  import { getConfig } from '../../form/pre/config'
  import PhysicalInfoForm from '../../form/pre/PhysicalInfoForm'
  import InformationForm from '../../form/pre/InformationForm'
  import PlanningForm from '../../form/pre/PlanningForm'
  import LaboratoryForm from '../../form/pre/LaboratoryForm'
  import InvestigationForm from '../../form/pre/InvestigationForm'
  import DiscussionForm from '../../form/pre/DiscussionForm'
  import ExaminationForm from '../../form/pre/ExaminationForm'
  export default {
    name: 'CreatePreRecordLayout',
    components: {
      PhysicalInfoForm,
      InformationForm,
      PlanningForm,
      LaboratoryForm,
      InvestigationForm,
      DiscussionForm,
      ExaminationForm
    },
    mounted () {
      console.log(getConfig('doctor'))
      $(this.$refs.progress).progress({
        value: 1,
        total: this.steps.length
      })
    },
    computed: {
      getCurrentStep () {
        return this.steps.length
      }
    },
    data () {
      return {
        part: this.$route.params.part,
        currentStep: parseInt(this.$route.params.no),
        numberString: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        title: '',
        description: '',
        steps: [
          { name: 'ASA physical status' },
          { name: 'High alert condition' },
          { name: 'Allergy' },
          { name: 'Smoking' },
          { name: 'Alcohol' },
          { name: 'Confirm' }
        ],
        patient: {
          hn: 100001
        }
      }
    },
    methods: {
      getStepClass (index) {
        if (index === this.currentStep) {
          return { active: true }
        } else if (index < this.currentStep) {
          return { completed: true, link: true }
        } else {
          return { disabled: true }
        }
      },
      reload () {
        this.currentStep = parseInt(this.$route.params.no)
        $(this.$refs.progress).progress({
          value: this.currentStep,
          total: this.steps.length
        })
      },
      backStep (index) {
        this.$router.push({ name: this.$route.name, params: { hn: this.patient.hn, no: index } })
        this.reload()
      },
      nextStep () {
        this.$router.push({ name: this.$route.name, params: { hn: this.patient.hn, no: this.currentStep + 1 } })
        this.reload()
      },
      confirm () {
        console.log('confirm')
      }
    }
  }
</script>
