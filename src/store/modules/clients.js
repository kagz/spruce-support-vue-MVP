import * as firebase from 'firebase'

const state = {

  loadedCompanys (state) {
    return state.loadedCompanys
  },
  featuredCompanys (state, getters) {
    return getters.loadedCompanys.slice(0, 5)
  },
  loadedCompany (state) {
    return (companyId) => {
      return state.loadedCompanys.find((company) => {
        return company.id === companyId
      })
    }
  }

}

const mutations = {
  setLoadedCompanys (state, payload) {
    state.loadedCompanys = payload
  },
  createCompany (state, payload) {
    state.loadedCompanys.push(payload)
  },
  updateCompany (state, payload) {
    const company = state.loadedCompanys.find((company) => {
      return company.id === payload.id
    })
    if (payload.companyname) {
      company.companyname = payload.companyname
    }
    if (payload.companytype) {
      company.companytype = payload.companytype
    }
    if (payload.phone) {
      company.phone = payload.phone
    }
  }
}

const actions = {
  loadCompanys ({
    commit
  }) {
    commit('setLoading', true)
    firebase
      .database()
      .ref('companys')
      .once('value')
      .then((data) => {
        const companys = []
        const obj = data.val()
        for (let key in obj) {
          companys.push({
            id: key,
            companyname: obj[key].companyname,
            phone: obj[key].phone,
            email: obj[key].email,
            companytype: obj[key].companytype,
            location: obj[key].location,
            creatorId: obj[key].creatorId
          })
        }
        commit('setLoadedCompanys', companys)
        commit('setLoading', false)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  },
  createCompany ({
    commit,
    getters
  }, payload) {
    const company = {
      companyname: payload.companyname,
      location: payload.location,
      companytype: payload.companytype,

      email: payload.email,
      phone: payload.phone,
      creatorId: getters.user.id
    }
    firebase
      .database()
      .ref('companys')
      .push(company)

      .then(() => {
        commit('createCompany', {
          ...company,

        })
      })
      .catch((error) => {
        console.log(error)
      })
    // Reach out to firebase and store it
  },
  updateCompanyData ({
    commit
  }, payload) {
    commit('setLoading', true)
    const updateObj = {}
    if (payload.companyname) {
      updateObj.companyname = payload.companyname
    }
    if (payload.companytype) {
      updateObj.companytype = payload.companytype
    }
    if (payload.phone) {
      updateObj.phone = payload.phone
    }
    firebase
      .database()
      .ref('companys')
      .child(payload.id)
      .update(updateObj)
      .then(() => {
        commit('setLoading', false)
        commit('updateCompany', payload)
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
  actions,
}
