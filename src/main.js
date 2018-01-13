import './css/index.sass';
import Vue from 'vue';
import App from './App.vue';
import Twit from 'twit';
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});

//var Twit = require('twit');
