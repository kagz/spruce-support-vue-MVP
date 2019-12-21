import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import jQuery from 'jquery'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
import store from './store'
import router from './router'
import AlertCmp from './components/crud/shared/Alert'
import DateFilter from './components/crud/shared/date'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import VueCarousel from 'vue-carousel'
// NOTE: workaround for VeeValidate + vuetable-2
import Swal from 'sweetalert2'
require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)

Vue.use(VueCarousel)
Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

window.$ = window.jQuery = jQuery

window.Swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-center',
  showConfirmButton: false,
  timer: 3000
})

window.Toast = Toast

Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

let app = ''

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount('#app')
  }
})
