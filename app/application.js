import Vue from 'vue'

/*
 * Use any Vue Plugins here
 */
// ...

/*
 * Our main Application component which we will use to render the page
 */
import Application from '../components/Application.vue'

new Vue({
  el: '#app',
  render: h => h(Application)
})
