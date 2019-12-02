import * as firebase from 'firebase'

const state = {

  loadedJobs (state) {
    return state.loadedJobs.sort((jobA, jobB) => {
      return jobA.date > jobB.date
    })
  },
  featuredJobs (state, getters) {
    return getters.loadedJobs.slice(0, 5)
  },
  loadedJob (state) {
    return (jobId) => {
      return state.loadedJobs.find((job) => {
        return job.id === jobId
      })
    }
  }

}

const mutations = {
  setLoadedJobs (state, payload) {
    state.loadedJobs = payload
  },
  createJob (state, payload) {
    state.loadedJobs.push(payload)
  },
  updateJob (state, payload) {
    const job = state.loadedJobs.find((job) => {
      return job.id === payload.id
    })
    if (payload.title) {
      job.title = payload.title
    }
    if (payload.description) {
      job.description = payload.description
    }
    if (payload.date) {
      job.date = payload.date
    }
  }
}

const actions = {
  loadJobs ({
    commit
  }) {
    commit('setLoading', true)
    firebase
      .database()
      .ref('jobs')
      .once('value')
      .then((data) => {
        const jobs = []
        const obj = data.val()
        for (let key in obj) {
          jobs.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            imagePath: obj[key].imagePath,
            staffs: obj[key].staffs,
            date: obj[key].date,
            location: obj[key].location,
            creatorId: obj[key].creatorId
          })
        }
        commit('setLoadedJobs', jobs)
        commit('setLoading', false)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  },
  createJob ({
    commit,
    getters
  }, payload) {
    const job = {
      title: payload.title,
      location: payload.location,
      description: payload.description,
      date: payload.date,
      imagePath: payload.imagePath,
      imageUrl: payload.imageUrl,
      staffs: payload.staffs,
      clientname: payload.clientname,
      creatorId: getters.user.id
    }
    firebase
      .database()
      .ref('jobs')
      .push(job)

      .then(() => {
        commit('createJob', {
          ...job,

        })
      })
      .catch((error) => {
        console.log(error)
      })
    // Reach out to firebase and store it
  },
  updateJobData ({
    commit
  }, payload) {
    commit('setLoading', true)
    const updateObj = {}
    if (payload.title) {
      updateObj.title = payload.title
    }
    if (payload.description) {
      updateObj.description = payload.description
    }
    if (payload.date) {
      updateObj.date = payload.date
    }
    firebase
      .database()
      .ref('jobs')
      .child(payload.id)
      .update(updateObj)
      .then(() => {
        commit('setLoading', false)
        commit('updateJob', payload)
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
