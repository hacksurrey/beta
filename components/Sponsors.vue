<template>
  <section>
    <div class="row">
      <h1 class="title">Partners.</h1>
    </div>
    <div class="row center">
      <a class="logo" href="https://github.com/">
        <img src="~resources/sponsors/github.svg" />
      </a>
    </div>
    <div class="row">
      <h1 class="title">Sponsors.</h1>
    </div>
    <div class="row center">
      <a class="logo" href="https://www.accenture.com/gb-en/">
        <img src="~resources/sponsors/accenture.svg" />
      </a>
    </div>
    <div class="row">
      <h1 class="title">Supporters.</h1>
    </div>
    <div class="row center">
      <a class="logo" href="https://digitalocean.com/">
        <img src="~resources/sponsors/digitalocean.svg" />
      </a>
      <a class="logo" href="https://www.jetbrains.com/">
        <img src="~resources/sponsors/jetbrains.svg" />
      </a>
    </div>
    <div class="row center">
      <a class="logo" href="https://www.surrey.ac.uk/department-electrical-electronic-engineering/">
        <img src="~resources/sponsors/surrey.svg" />
      </a>
      <a class="logo" href="https://activity.ussu.co.uk/ears">
        <img src="~resources/sponsors/ears.png" />
      </a>
      <a class="logo" href="https://ussu.co.uk/">
        <img src="~resources/sponsors/union.svg" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
section
  display: flex
  flex-wrap: wrap
  padding: 1.5em 12em
  flex-direction: column
  justify-content: center

.row
  padding: .5em 1.5em
  margin: .5em .75em
  display: flex
  flex: 1 1 auto
  h1
    padding: 0
    color: #FF3232
    font-size: 3.5em
    font-weight: 500
    margin: 0 0 5px 0

.center
  justify-content: center

.logo
  display: flex
  align-items:  center
  padding: 0 1.5em

img
  max-width: 400px
  max-height: 85px
</style>
