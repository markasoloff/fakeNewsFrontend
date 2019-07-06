// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// var history = require('connect-history-api-fallback');

// var express = require('express');

// var app = express();
// app.use(history());

// var SocialSharing = require('vue-social-sharing');
// Vue.use(SocialSharing);

var jwt = localStorage.getItem('jwt')
if (jwt) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
