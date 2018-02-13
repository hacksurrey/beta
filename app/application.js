import Vue from 'vue'

/*
 * Use any Vue Plugins here
 */
import VueScrollTo from 'vue-scrollto';
import VueParticles from 'vue-particles'
Vue.use(VueScrollTo)
Vue.use(VueParticles)

/*
 * Our main Application component which we will use to render the page
 */
import Application from './Application.vue'

new Vue({
  el: '#app',
  render: h => h(Application)
})
