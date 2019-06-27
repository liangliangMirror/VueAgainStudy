import Vue from 'vue';
import Router from 'vue-router';
import xxx from './components/xxx.vue';
import home from './views/home.vue'
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/xxx',
            name: 'xxx',
            component: xxx,
        }, {
            path: '/',
            name: 'home',
            component: home,
        }
    ]
})
