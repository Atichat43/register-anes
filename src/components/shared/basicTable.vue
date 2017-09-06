<template lang="pug">
  .ui.container(v-if="isEmpty")
    h1.ui.center.aligned.header {{ table.title }}
    .ui.center.aligned.segment
      .ui.large.green.button(@click="create") create

  .ui.container(v-else)
    h1.ui.center.aligned.header {{ table.title }}
    table.ui.definition.fixed.single.line.table
      tbody
        tr(v-for="(value, key, index) in values")
          td(class="five wide") {{ table.head[index] }}
          td {{ value }}

</template>

<style scoped>
  .ui.segment {
    padding: 3em;
  }
  .ui.large.button {
    width: 250px;
  }
</style>

<script>
  export default {
    name: 'basicTable',
    props: {
      table: Object,
      values: [Object, String]
    },
    computed: {
      isEmpty () {
        return this.values === null || this.values === undefined || this.values.length === 0 || this.values === ''
      }
    },
    methods: {
      create () { this.$emit('create') }
    }
  }
</script>
