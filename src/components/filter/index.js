import Vue from 'vue'

Vue.filter('tableValue', (object) => {
  if (object.value === undefined) return object
  if (!object.value) return '-'
  return object.text
})

Vue.filter('asaValue', (value) => ({
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  '-1': 'Emergency'
})[value])
