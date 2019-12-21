import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import app from './modules/app'
import shared from './modules/shared'

import * as getters from './getters'

Vue.use(Vuex)
// $store.state.app.config.palette.primary
const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,

    shared: shared,

  },
  state: {

  },
  mutations: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
