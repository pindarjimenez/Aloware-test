require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
import moment from 'moment';
import router from './routes';
import store from './store';

Vue.use(VueRouter);

Vue.prototype.moment = moment;

new Vue({
    el: '#app',
    router,
    store,
});