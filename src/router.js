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
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
 
        }
 
         if (to.hash) {
            return { selector: to.hash };
        }
    return { x: 0, y: 0 }
  },
   
})
