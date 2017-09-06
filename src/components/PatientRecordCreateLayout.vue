<template lang="pug">
  .ui.container
    .ui.center.aligned.basic.segment
      h1.ui.header {{ title }}
      label {{ description }}
    .ui.indicating.progress(ref="progress")
      .bar
    .ui.small.ordered.steps(ref="stepsRef", :class="numberString[steps.length]")
      .step(v-for="(step, index) in steps", :class="getStepClass(index+1)", @click="backStep(index+1)")
        .content
          .title {{ step.name }}
    router-view.ui.segment
    .ui.hidden.divider
    .ui.primary.right.floated.button(v-if="this.$route.params.no < steps.length", @click="nextStep") next
    .ui.green.right.floated.button(v-else, @click="confirm") confirm
</template>

<style scoped>
  .ui.center.aligned.basic.segment {
    margin-bottom: 0rem;
  }
  .ui.indicating.progress {
    margin-bottom: 0rem;
  }
  .ui.right.floated.button {
    width: 25%;
    min-height: 1.3rem;
  }
  .ui.header {
    font-size: 3rem;
    margin-bottom: 0rem;
  }
</style>

<script>
  export default {
    name: 'PatientRecordCreateLayout',
    created () {
      this.title = this.$route.name
    },
    mounted () {
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
