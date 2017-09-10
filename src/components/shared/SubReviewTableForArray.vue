<template lang="pug">
  .ui.container
    table.ui.definition.fixed.single.line.table
      tbody(v-if="values.length !== 0")
        tr(v-for="(value, index) in values")
          td(class="five wide") {{ table.head[index] }}
          td {{ value }}
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
      values: Array
    }
  }
</script>
