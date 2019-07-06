import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Show from '@/components/Show'
import Swap from '@/components/Swap'
// import Add from '@/components/Add'
// import Redact from '@/components/Redact'

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/articles/:id',
      name: 'articles-show',
      component: Show
    },

    // {
    //   path: '/redact',
    //   name: 'redact',
    //   component: Redact
    // },

    {
      path: '/swap',
      name: 'swap',
      component: Swap
    }

    // {
    //   path: '/add',
    //   name: 'add',
    //   component: Add
    // }
  ]
})
// import Signup from "./views/Signup.vue";
// import Login from "./views/Login.vue";
// import Logout from "./views/Logout.vue";
// import Template from "./views/template.vue";
// import Profile from "./views/Profile.vue";
// import test from './views/test.vue';
// import details from './components/details.vue';

// {
//   path: '/articles:id',
//   name: 'test',
//   component: test
// },

// {
//   path: "/signup",
//   name: "signup",
//   component: Signup
// },

// {
//   path: "/login",
//   name: "login",
//   component: Login
// },

// {
//   path: "/logout",
//   name: "logout",
//   component: Logout
// },

// {
//   path: "/template",
//   name: "template",
//   component: Template
// },

// {
//   path: "/profile",
//   name: "profile",
//   component: Profile
// }
