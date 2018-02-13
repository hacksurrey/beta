<template>
  <div class="content">
    <hero :date="event.date" :location="event.location">
      <a class="scroller" v-scroll-to="'#faq-section'"><i class="material-icons">keyboard_arrow_down</i></a>
    </hero>
    <faq id="faq-section"></faq>
    <team />
    <sponsors />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Faq from '../components/Faq.vue'
import Team from '../components/Team.vue'
import Sponsors from '../components/Sponsors.vue'

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
    hero: Hero,
    faq: Faq,
    team: Team,
    sponsors: Sponsors,
  }
}
</script>

<style lang="scss">
.scroller {
  color: #FF3232;
  position: absolute;
  bottom: 25px;
  text-align: center;
  cursor: pointer;

  .material-icons {
    font-size: 4em;
    position: relative;
    animation: pulse 1.3s infinite;
  }
}
</style>
