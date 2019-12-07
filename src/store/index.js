import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import app from './modules/app'
import user from './modules/user.js'
import job from './modules/job.js'
import clients from './modules/clients.js'
import shared from './modules/shared'
import profile from './modules/profile'

import * as getters from './getters'

Vue.use(Vuex)
// $store.state.app.config.palette.primary
const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    job: job,
    user: user,
    shared: shared,
    clients: clients,
    profile: profile
  },
  state: {

  },
  mutations: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
