import Vue from 'vue'
import VueRouter from 'vue-router'
import SurveyPage from '../views/Survey.vue'
import LoginPage from '../views/Login.vue'
import HomePage from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeRouter',
      component:HomePage ,
    },
    {
      path: '/login',
      name: 'LoginRouter',
      component: LoginPage
    },
    {
      path: '/survey',
      name: 'SurveyRouter',
      component: SurveyPage,
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log("router before")
  // redirect to login page if user is not logged in and trying to access a restricted page
  const publicPages = ['/login', '/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  
  // console.log(authRequired)

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router