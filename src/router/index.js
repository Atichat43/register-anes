import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/Layout'

import Home from '../components/Home'
import PatientCreate from '../components/PatientCreate'
import SearchPatient from '../components/SearchPatient'
import PatientRecordLayout from '../components/PatientRecordLayout'
import PatientCreateLayout from '../components/PatientRecordCreateLayout.vue'
import PatientEditLayout from '../components/PatientRecordEditLayout'

import PatientProfile from '../components/patient-record/PatientProfile'
import PatientPre from '../components/patient-record/PatientPre'
import PatientIntra from '../components/patient-record/PatientIntra'
import PatientPost from '../components/patient-record/PatientPost'

import CreatePreRecordLayout from '../components/patient-record/pre-sub-record/CreatePreRecordLayout'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '',
      component: Layout,
      children: [
        { path: '/home', name: 'Home', component: Home },
        { path: '/searchPatient', name: 'SearchPatient', component: SearchPatient },
        { path: '/patientCreate', name: 'PatientCreate', component: PatientCreate },
        { path: '/patient',
          component: PatientRecordLayout,
          children: [
            { path: ':hn/profile', name: 'PatientProfile', component: PatientProfile, props: (to) => ({ hn: +to.params.hn }) },
            { path: ':hn/pre', name: 'PatientPre', component: PatientPre },
            { path: ':hn/intra', name: 'PatientIntra', component: PatientIntra },
            { path: ':hn/post', name: 'PatientPost', component: PatientPost }
          ]
        },
        { path: '/patient',
          component: PatientCreateLayout,
          children: [
            { path: ':hn/create/pre-record/:part/step/:no', name: 'CreatePreRecord', component: CreatePreRecordLayout, props: (to) => ({ hn: +to.params.hn, no: to.params.no, part: +to.params.part }) }
          ]
        },
        {
          path: '/patient/edit',
          component: PatientEditLayout,
          children: []
        }
      ]
    }

  ]
})
