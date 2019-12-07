import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    registerUserForJob (state, payload) {
      const id = payload.id
      if (state.user.registeredJobs.findIndex((job) => job.id === id) >= 0) {
        return
      }
      state.user.registeredJobs.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserFromJob (state, payload) {
      const registeredJobs = state.user.registeredJobs
      registeredJobs.splice(registeredJobs.findIndex((job) => job.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUserForJob ({ commit, getters }, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase
        .database()
        .ref('/users/' + user.id)
        .child('/registrations/')
        .push(payload)
        .then((data) => {
          commit('setLoading', false)
          commit('registerUserForJob', {
            id: payload,
            fbKey: data.key
          })
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromJob ({ commit, getters }, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase
        .database()
        .ref('/users/' + user.id + '/registrations/')
        .child(fbKey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserFromJob', payload)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            email: user.email,
            userProfile: [],
            registeredJobs: [],
            fbKeys: {}
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            email: user.email,
            userProfile: [],
            registeredJobs: [],
            fbKeys: {}
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    autoSignIn ({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        email: payload.email,
        userProfile: [],
        registeredJobs: [],
        fbKeys: {}
      })
    },
    fetchUserData ({ commit, getters }) {
      commit('setLoading', true)
      firebase
        .database()
        .ref('/users/' + getters.user.id + '/registrations/' + getters.user.id + 'profiles')
        .once('value')
        .then((data) => {
          const dataPairs = data.val()
          let registeredJobs = []
          let userProfile = []
          let swappedPairs = {}

          for (let key in dataPairs) {
            registeredJobs.push(dataPairs[key])
            userProfile.push(dataPairs[key])
            swappedPairs[dataPairs[key]] = key
          }

          const updatedUser = {
            id: getters.user.id,
            registeredJobs: registeredJobs,
            email: getters.user.email,
            userProfile: userProfile,

            fbKeys: swappedPairs
          }
          commit('setLoading', false)
          commit('setUser', updatedUser)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
