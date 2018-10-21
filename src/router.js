import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PracticesCreate from './views/PracticesCreate.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/practices/new', name: 'practices-new', component: PracticesCreate },
    { path: '/signup', name: 'signup', component: Signup},
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})