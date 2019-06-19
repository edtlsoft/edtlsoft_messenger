
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Vue Router
import VueRouter from 'vue-router';
import Messenger from './components/Chat/Messenger.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/chat', component: Messenger },
    { path: '/chat/:conversationId', component: Messenger },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});




import store from './store';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    router,
    methods: {
    	logout() {
    		document.getElementById('logout-form').submit();
    	}
    }
});
