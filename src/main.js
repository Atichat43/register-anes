import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueMask from 'v-mask'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(VeeValidate)

firebase.initializeApp({
  apiKey: 'AIzaSyBBqyPw0p6gmq7T8rXVhCWjKbF6bJaTPEU',
  authDomain: 'mom-register-anes.firebaseapp.com',
  databaseURL: 'https://mom-register-anes.firebaseio.com',
  projectId: 'mom-register-anes',
  storageBucket: 'mom-register-anes.appspot.com',
  messagingSenderId: '963245929118'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
