import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  
import VueCircleSlider from 'vue-circle-slider'
import AOS from 'aos'
import 'aos/dist/aos.css'
import quickMenu from 'vue-quick-menu'
import router from './router'

library.add(faUserSecret)

Vue.use(VueCircleSlider)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-quick-menu', quickMenu)


Vue.config.productionTip = false


import VueScrollTo from 'vue-scrollto'
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
