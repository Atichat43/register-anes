import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/Layout'
import Home from '../components/Home'

import SearchPatient from '../components/SearchPatient'
import PatientLayout from '../components/PatientLayout'

import Patient from '../components/patientRecord/Patient'
import PatientPre from '../components/patientRecord/PatientPre'
import PatientPreEdit from '../components/patientRecord/PatientPreEdit'
import PatientIntra from '../components/patientRecord/PatientIntra'
import PatientIntraEdit from '../components/patientRecord/PatientIntraEdit'
import PatientPost from '../components/patientRecord/PatientPost'
import PatientPostEdit from '../components/patientRecord/PatientPostEdit'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '',
      component: Layout,
      children: [
        { path: '/Home', name: 'Home', component: Home },
        { path: '/SearchPatient', name: 'SearchPatient', component: SearchPatient },
        { path: '/patientRecord',
          component: PatientLayout,
          children: [
            { path: ':hn', name: 'Patient', component: Patient, props: (to) => ({ hn: +to.params.hn }) },
            { path: ':hn/pre', name: 'PatientPre', component: PatientPre },
            { path: ':hn/pre/edit', name: 'PatientPreEdit', component: PatientPreEdit },
            { path: ':hn/intra', name: 'PatientIntra', component: PatientIntra },
            { path: ':hn/intra/edit', name: 'PatientIntraEdit', component: PatientIntraEdit },
            { path: ':hn/post', name: 'PatientPost', component: PatientPost },
            { path: ':hn/post/edit', name: 'PatientPostEdit', component: PatientPostEdit }
          ]
        }
      ]
    }

  ]
})
