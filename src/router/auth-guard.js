import { fb } from '../firebase'

export default (to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/auth/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
}
