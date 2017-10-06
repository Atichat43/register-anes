<template lang="pug">
  .container
    .ui.center.aligned.header {{ title }}
    .ui.indicating.progress(ref="progress")
      .bar
    .ui.small.ordered.steps(v-if="steps.length <= 6", ref="stepsRef", :class="numberString[steps.length]")
      .step(v-for="(step, index) in steps", :class="getStepClass(index+1)", @click="backStep(index+1)")
        .content
          .title {{ step }}
    .ui.small.fluid.vertical.ordered.steps(v-else, ref="stepsRef")
      .step(v-for="(step, index) in steps", :class="getStepClass(index+1)", @click="backStep(index+1)")
        .content
          .title {{ step }}
    .ui.segment
      surgeon-form(v-if="part === 'surgeon'")
      agents-form(v-else-if="part === 'agents'")
      technique-form(v-else-if="part === 'technique'")
      post-form(v-else-if="part === 'post'")
      not-found(v-else)
    .ui.hidden.divider
      .ui.primary.right.floated.button(v-if="this.$route.params.no < steps.length", @click="nextStep") next
      .ui.green.right.floated.button(v-else, @cick="confirm") confirm
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
  import { getConfig } from '../../form/intra/config_intra'
  import SurgeonForm from '../../form/intra/SurgeonForm'
  import AgentsForm from '../../form/intra/AgentsForm'
  import TechniqueForm from '../../form/intra/TechniqueForm'
  import PostForm from '../../form/intra/PostForm'
  export default {
    name: 'CreateIntraRecordLayout',
    components: {
      SurgeonForm,
      AgentsForm,
      TechniqueForm,
      PostForm
    },
    mounted () {
      var temp = getConfig(this.$route.params.part)
      this.title = temp.title
      this.steps = temp.head
      this.steps.push('confirm')
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
        numberString: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
        title: '',
        description: '',
        steps: [],
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
