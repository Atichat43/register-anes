<template lang="pug">
  .ui.container
    h1.ui.right.aligned.header {{ $route.params.hn }}
    .ui.tabular.menu.attached.visible(v-if="isSelectedPatient")
      router-link.item(:to="{ name: 'PatientProfile' }", exact) Profile
      router-link.item(:to="{ name: 'PatientPre'}", exact) Pre
      router-link.item(:to="{ name: 'PatientIntra'}", exact) Intra
      router-link.item(:to="{ name: 'PatientPost'}", exact) Post
    router-view
</template>

<script>
  export default {
    name: 'PatientLayout',
    methods: {
      isSelectedPatient () {
        if (typeof this.$route.params.hn !== 'undefined') {
          return true
        } else return false
      }
    },
    created () {
      console.log(this.$children)
    }
  }
</script>
