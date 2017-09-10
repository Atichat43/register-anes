<template lang="pug">
  .ui.container
    .div
      h2.ui.header Review Data
      label {{ table.title }}
    table.ui.definition.fixed.single.line.table
      tbody(v-if="!isEmpty")
        tr(v-for="(value, key, index) in values")
          td(class="five wide") {{ table.head[index] }}
          td {{ value | tableValue(endValue) }}
      tbody(v-else)
        tr(v-for=" head in table.head")
          td(class="five wide") {{ head }}
          td Not found values for review table
</template>

<style scoped>
  .ui.table {
    font-size: 1rem;
  }
</style>

<script>
  export default {
    props: {
      table: Object,
      values: Object
    },
    data () {
      return {
        empty: false,
        endValue: 'endValue',
        filters: 'asaValue'
      }
    },
    mounted () {
      if (Object.keys(this.values).length === 0) {
        this.empty = true
      }
    },
    computed: {
      getFilter () {
        return this.filters
      },
      isEmpty () {
        return this.empty
      }
    }
  }
</script>
