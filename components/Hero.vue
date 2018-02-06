<template>
  <section>
    <header>
      <img src="~resources/logo.svg" />
      <h1>{{ date }}</h1>
      <h1>{{ location }}</h1>
    </header>

    <vue-particles class="background" color="#FF3232" :particleOpacity="1" :particlesNumber="100" shapeType="circle" :particleSize="2"
    linesColor="#FF3232" :linesWidth="0.5" :lineLinked="true" :lineOpacity="1" :linesDistance="100"
      :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="false" />
  </section>
</template>

<script scoped>
export default {
  props: {
    date: {
      "required": true
    },
    location: {
      "required": true
    }
  }
}
</script>

<style lang="scss">
section {
  background-color: #111116;
  display: flex;
  vertical-align: bottom;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.background {
  width: 100%;
  position: fixed;
  min-height: 100%;
}

h1 {
  margin: 0;
  color: #FF3232;
  display: block;
  line-height: 1;
  font-weight: 300;
  text-align: center;
}

img {
  width: 42vw;
  min-width: 400px;
  max-width: 850px;
  margin-bottom: 20px;
}
</style>
