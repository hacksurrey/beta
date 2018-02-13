<template>
  <section>
    <div class="item">
      <h1>Team.</h1>
    </div>
    <div class="item">
      <img src="~resources/avatars/ted.jpg" />
      <span class="subtitle">Ted</span>
    </div>
    <div class="item">
      <img src="~resources/avatars/dan.jpg" />
      <span class="subtitle">Dan</span>
    </div>
    <div class="item">
      <img src="~resources/avatars/hannah.jpg" />
      <span class="subtitle">Hannah</span>
    </div>
    <div class="item">
      <img src="~resources/avatars/rishi.jpg" />
      <span class="subtitle">Rishi</span>
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
  flex-direction: row
  flex-wrap: wrap
  justify-content: center

.item:first-child
  margin: .5em
  flex: 1 1 auto
  padding: .5em 1.5em
  flex-basis: 100%
  min-width: 300px
  border-radius: 2px
  break-inside: avoid-column
  h1
    padding: 0
    color: #FF3232
    font-size: 3.5em
    font-weight: 500
    margin: 0 0 5px 0

.item:not(:first-child)
  margin: 0 1px
  display: flex
  flex-direction: column
  text-align: center
  img
    margin: 0
    width: 150px
  .subtitle
    padding: .35em
    color: #ffffff
    font-weight: 300
    font-size: 1.25em
    background-color: #111116
</style>
