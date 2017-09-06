import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import VueMask from 'v-mask'
import VeeValidate from 'vee-validate'
import JsonExel from 'vue-json-excel'
import firebase from 'firebase'
const moment = require('moment')

import './components/filter'

import Radio from './components/shared/Radio'
import BasicTable from './components/shared/basicTable'
import ReviewTable from './components/shared/reviewTable'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(VeeValidate)
Vue.use(require('vue-moment'), {moment})
Vue.use(VueFire)
Vue.component('downloadExcel', JsonExel)
Vue.component('basic-table', BasicTable)
Vue.component('review-table', ReviewTable)
Vue.component('radio', Radio)

var config = {
  apiKey: 'AIzaSyBBqyPw0p6gmq7T8rXVhCWjKbF6bJaTPEU',
  authDomain: 'mom-register-anes.firebaseapp.com',
  databaseURL: 'https://mom-register-anes.firebaseio.com',
  projectId: 'mom-register-anes',
  storageBucket: 'mom-register-anes.appspot.com',
  messagingSenderId: '963245929118'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
