<template lang="pug">
  .ui.big.form
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 1")
      h2.ui.dividing.header Blood components/ ICU
      .inline.fields
        label Blood components prepared
        .field
          radio(name="components", v-model="patient.componentsPrepare.value", :selectedValue="false") No
        .field
          radio(name="components", v-model="patient.componentsPrepare.value", :selectedValue="true") Yes
      .ui.small.form
        .field(:class="getComponentsValue? '':'disabled'")
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
    // Step 1 --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 2")
      .inline.fields
        label Planned ICU
        .field
          radio(name="icu", v-model="patient.icu.value", :selectedValue="false") No
        .field
          radio(name="icu", v-model="patient.icu.value", :selectedValue="true") Yes
      .required.field(:class="icuValue? '':'disabled'")
        label ได้เตียงไหม ?
        .field
          select.ui.dropdown(ref="selectDropdownRef", v-model="patient.icu.text")
            option(value='') select an option
            option(value='-1') ได้เตียง
            option(v-for="queue in 10", :value="queue") เตียงเต็มได้คิวที่ {{ queue }}
    // Step Confirm --------------------------------------------------------------------
    .field(v-show="getCurrentStep === 3")
      review-table(:table="table", :values="patient")
</template>


<script>
  import { getConfig } from './config_pre'
  export default {
    name: 'PlanningForm',
    data () {
      return {
        text: '',
        currentStep: 1,
        table: getConfig(this.$route.params.part),
        patient: {
          componentsPrepare: {
            value: false,
            components: ['', '', '', '']
          },
          icu: {
            value: false,
            text: ''
          }
        }
      }
    },
    updated () {
      this.addEmptyLastElements(this.patient.componentsPrepare.components)
    },
    mounted () {
      $('select.dropdown').dropdown()
    },
    computed: {
      getCurrentStep () {
        this.currentStep = this.$route.params.no
        return this.currentStep
      },
      getComponentsValue () {
        if (this.patient.componentsPrepare.value === false) {
          this.patient.componentsPrepare.components = ['', '', '', '']
        }
        return this.patient.componentsPrepare.value
      },
      icuValue () {
        if (this.patient.icu.value === false) {
          this.patient.icu.text = ''
          $(this.$refs.selectDropdownRef).dropdown('clear')
        }
        return this.patient.icu.value
      }
    },
    methods: {
      deleteComponentsPrepare (index) {
        this.patient.componentsPrepare.components.splice(index, 1)
        if (this.patient.componentsPrepare.components.length === 3) {
          this.patient.componentsPrepare.components.push('')
        }
      },
      addEmptyLastElements (target) {
        if (target[target.length - 1] !== '') {
          target.push('')
        }
      }
    }
  }
</script>
