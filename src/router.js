import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/CV/',
            component: Home
        },
        {
            path: '/CV/portfolio',
            component: Portfolio
        }
    ]
})