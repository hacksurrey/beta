<template>
  <section>
    <div class="item">
      <h1>Partners.</h1>
    </div>
    <div class="item">
      <a href="https://github.com/">
        <img src="~resources/sponsors/github.svg" />
      </a>
    </div>
    <div class="item">
      <a href="https://ussu.co.uk/">
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
  flex-direction: row
  justify-content: center

.item
  margin: .5em .75em
  display: flex
  // flex: 1 1 auto
  // min-width: 300px
  // flex-basis: 25%
  border-radius: 2px
  h1
    padding: 0
    color: #FF3232
    font-size: 3.5em
    font-weight: 500
    margin: 0 0 5px 0

.item:first-child
  flex-basis: 100%

.item:not(:first-child)
  height: 5em
  img
    max-height: 65px

.item:last-child
  text-align: center
</style>
