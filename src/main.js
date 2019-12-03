import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import * as firebase from 'firebase'

import store from './store'
import router from './router'
import AlertCmp from './components/crud/shared/Alert'
import DateFilter from './components/crud/shared/date'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.dispatch('clearError')
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.dispatch('clearError')
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCa2VuBK_54uSIygqegmguYVJiaCk9gliU',
      authDomain: 'kamagera-aa372.firebaseapp.com',
      databaseURL: 'https://kamagera-aa372.firebaseio.com/',
      projectId: 'kamagera-aa372',
      storageBucket: 'gs://kamagera-aa372.appspot.com'
    })
    // firebase.functions().useFunctionsEmulator('http://localhost:8080')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // store.dispatch('clearError')
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadJobs')
    this.$store.dispatch('loadCompanys')
  }
})
