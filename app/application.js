import Styling from '../stylesheets/base.scss'

import Vue from 'vue'

/*
 * Use any Vue Plugins here
 */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

/*
 * Our main Application component which we will use to render the page
 */
import Application from '../components/Application.vue'

new Vue({
  el: '#app',
  render: h => h(Application)
})
