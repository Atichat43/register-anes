<template lang="pug">
  .ui.container
    h2.ui.header {{ table.title }}
    table.ui.definition.fixed.single.line.table
      tbody
        tr(v-for="(value, key, index) in values")
          td(class="five wide") {{ table.head[index] }}
          td {{ value | tableValue | asaValue}}
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
    }
  }
</script>
