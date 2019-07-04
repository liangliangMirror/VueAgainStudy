import Vue from 'vue';
import Router from 'vue-router';
import xxx from './components/xxx.vue';
import home from './views/home.vue'
Vue.use(Router);
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/xxx',
                    name: 'xxx',
                    component: xxx,
                },
                {
                    path: '/',
                    redirect: '/xxx',
                    name: 'xxx'
                }
            ]
        }
    ]
})
