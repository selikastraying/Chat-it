import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import store from '@/store/index.js'
import UserServices from '@/services/UserServices.js'
import LoginForm from '../views/LoginForm.vue'
import RegisterForm from '../views/RegisterForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login,
    beforeEnter(routeTo, routeFrom, next) {
      if (!store.getters['user/getToken']) next()
      else {
        UserServices.checkToken(store.getters['user/getToken'])
          .then(name => {
            if (name === store.getters['user/getName']) {
              next('/')
            } else {
              store.dispatch('user/resetState')
            }
            next()
          })
          .catch(error => {
            console.log(error.message)
            next()
          })
      }
    },
    children: [
      { path: '', name: 'LoginForm', component: LoginForm },
      { path: 'registerForm', name: 'RegisterForm', component: RegisterForm }
    ]
  },
  {
    path: '/',
    name: 'Profile',
    component: Profile,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      if (!store.getters['user/getToken']) {
        next('/login')
      } else {
        UserServices.checkToken(store.getters['user/getToken'])
          .then(name => {
            if (name !== store.getters['user/getName']) {
              console.log('name different')
              store.dispatch('user/resetState')
              next('/login')
            } else {
              UserServices.getFriends(store.getters['user/getToken'])
                .then(friends => {
                  routeTo.params.friends = friends
                  next()
                })
                .catch(error => {
                  console.log(error.message)
                  next()
                })
            }
          })
          .catch(error => {
            console.log(error.message)
            next('/login')
          })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  console.log(routeTo)
  next()
})

export default router
