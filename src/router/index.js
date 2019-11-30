import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import MainHome from '../components/MainHome'
import lazyLoading from './lazyLoading'
import AuthGuard from '../router/auth-guard'
Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book').default

  demoRoutes.push(
    VueBook(require.context('./..', true, /.demo.vue$/), '/demo'),
    VueBook(require.context('./../components', true, /.vue$/), '/presentation'),
  )
}

// const EmptyParentComponent = {
//   template: '<router-view></router-view>',
// }

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'mainhome' },
    },
    {
      path: '/',
      name: 'mainhome',
      component: MainHome,

    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup'),
        },

      ],
    },

    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      beforeEnter: AuthGuard,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
        },

        {
          name: 'addjob',
          path: 'addjob',

          component: lazyLoading('crud/AddJob'),

        },
        {
          name: 'addclient',
          path: 'addclient',
          component: lazyLoading('crud/AddClient'),

        },

        {
          name: 'myprofile',
          path: 'myprofile',
          component: lazyLoading('crud/MyProfile'),

        },
        {
          name: 'viewclients',
          path: 'viewclients',

          component: lazyLoading('crud/ViewClients'),

        },

        {
          name: 'viewjobs',
          path: 'viewjobs',
          component: lazyLoading('crud/ViewJobs'),

        },

        {
          name: 'viewstaffs',
          path: 'viewstaffs',
          component: lazyLoading('crud/ViewStaffs'),
        },

      ]
    }
  ],

})
