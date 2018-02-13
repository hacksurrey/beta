<template>
  <section>
    <div class="item">
      <h1>Partners.</h1>
    </div>
    <div class="item">
      <img src="~resources/sponsors/github.svg" />
      <img src="~resources/sponsors/union.svg" />
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
  padding: 1.5em 12em
  flex-direction: column
  background-color: #fcfcfc
  flex-wrap: wrap
  justify-content: space-around

.item
  margin: .5em
  display: flex
  flex: 1 1 auto
  min-width: 300px
  flex-basis: 25%
  border-radius: 2px
  padding: .5em 1.5em
  h1
    padding: 0
    color: #FF3232
    font-size: 3.5em
    font-weight: 500
    margin: 0 0 5px 0

.item:not(:first-child)
  height: 7em
  justify-content: center
  img
    width: 40%

.item:last-child
  text-align: center
</style>
