import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'

import router from './router.js'
import { Header,Swipe, SwipeItem} from 'mint-ui'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.component('mt-header',Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


var vm = new Vue({
    el:"#app",
    render:c=>c(App),
    router
})