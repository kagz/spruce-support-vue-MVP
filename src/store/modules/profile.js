import * as firebase from 'firebase'

const state = {
  loadedProfiles (state) {
    return state.loadedProfiles
  },
  featuredProfiles (state, getters) {
    return getters.loadedProfiles.slice(0, 5)
  },
  loadedProfile (state) {
    return (profileId) => {
      return state.loadedProfiles.find((profile) => {
        return profile.id === profileId
      })
    }
  }
}

const mutations = {
  setLoadedProfiles (state, payload) {
    state.loadedProfiles = payload
  },
  createProfile (state, payload) {
    state.loadedProfiles.push(payload)
  },
  updateProfile (state, payload) {
    const profile = state.loadedProfiles.find((profile) => {
      return profile.id === payload.id
    })
    if (payload.fullname) {
      profile.fullname = payload.fullname
    }
    if (payload.phone) {
      profile.phone = payload.phone
    }
    if (payload.date) {
      profile.date = payload.date
    }
  }
}

const actions = {
  loadProfiles ({ commit }) {
    commit('setLoading', true)
    firebase
      .database()
      .ref('profiles')
    // .once('value')
      .onSnapshot((data) => {
        const profiles = []
        const obj = data.val()
        for (let key in obj) {
          profiles.push({
            id: key,
            fullname: obj[key].fullname,
            phone: obj[key].phone,
            imageUrl: obj[key].imageUrl,
            imagePath: obj[key].imagePath,
            email: obj[key].email,
            date: obj[key].date,
            // location: obj[key].location,
            userId: obj[key].userId
          })
        }
        commit('setLoadedProfiles', profiles)
        commit('setLoading', false)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  },
  createProfile ({ commit, getters }, payload) {
    const profile = {
      fullname: payload.fullname,
      //   location: payload.location,
      phone: payload.phone,
      date: payload.date,
      imagePath: payload.imagePath,
      imageUrl: payload.imageUrl,
      email: payload.email,
      passport: payload.passport,
      userId: getters.user.id
    }
    firebase
      .database()
      .ref('profiles')
      .push(profile)
      .then(() => {
        commit('createProfile', {
          ...profile
        })
      })
      .catch((error) => {
        console.log(error)
      })

    // Reach out to firebase and store it
  },
  updateProfileData ({ commit }, payload) {
    commit('setLoading', true)
    const updateObj = {}
    if (payload.fullname) {
      updateObj.fullname = payload.fullname
    }
    if (payload.phone) {
      updateObj.phone = payload.phone
    }
    if (payload.date) {
      updateObj.date = payload.date
    }
    firebase
      .database()
      .ref('profiles')
      .child(payload.id)
      .update(updateObj)
      .then(() => {
        commit('setLoading', false)
        commit('updateProfile', payload)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
