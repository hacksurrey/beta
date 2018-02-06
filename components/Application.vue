<template>
  <hero :date="event.date" :location="event.location">
  </hero>
</template>

<script>
import Hero from './Hero.vue'

export default {
  name: 'app',
  data () {
    return {
      event: {
        date: "5th - 6th May 2018",
        location: "University of Surrey"
      }
    }
  },
  components: {
    hero: Hero
  }
}
</script>
