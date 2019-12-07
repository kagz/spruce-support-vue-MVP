const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const loadedJobs = state => state.job.loadedJobs
const loadedJob = state => state.job.loadedJob
const loadedCompanys = state => state.clients.loadedCompanys
const loadedProfiles = state => state.clients.loadedProfiles

export {
  toggleWithoutAnimation,
  config,
  palette,
  isLoading,
  loadedJobs,
  loadedJob,
  loadedCompanys,
  loadedProfiles,
//
}
