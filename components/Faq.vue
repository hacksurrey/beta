<template>
  <section>
    <div class="container">
      <div class="item">
        <h1>FAQ.</h1>
      </div>

      <div class="item" v-for="i in faqs">
        <h3>{{ i.question }}</h3>
        <p v-html="i.answer" />
      </div>

      <div class="item">
        <h3>Got anything else?</h3>
        <p>
          Contact us by <a href="mailto:contact@hacksurrey.uk">email</a>,
          ping us on <a href="https://facebook.com/hacksurrey">Facebook</a>,
          or shoot us a <a href="https://twitter.com/hacksurrey">tweet</a>.
          We'll get back to you as soon as possible!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
        faqs: [
          {question: 'What exactly is this?', answer: 'HackSurrey Beta is a Hackathon at the University of Surrey: 150 students, 24 hours, what will <b>you</b> build?'},
          {question: 'Are tickets free?', answer: `Of course they are! Thanks to our lovely sponsors, HackSurrey Beta tickets are absolutely free!`},
          {question: 'But when and where?', answer: 'HackSurrey Beta will take place on the 5th and 6th of May 2018 at the University of Surrey in Guildford (Austin Pearce Building).'},
          {question: `What if I can't code?`, answer: `Not a problem! Regardless of what you think of your technical ability, this will be a great opportunity to learn some new skills!`},
          {question: 'What should I bring?', answer: 'You should bring your laptop, charger, and phone. You must not forget to bring your <strong>student ID</strong>, and lots of motivation.'},
          {question: 'What about non-UK ?', answer: 'You are still more than welcome to join us! However, you should know that we do not offer travel reimbursements.'},
          {question: 'How can I help?', answer: `<a href="#">Be a Volunteer!</a> Volunteers can still participate and will receive extra goodies in exchange for their effort.`},
        ]
    }
  }
}
</script>

<style lang="sass" scoped>
section
  display: flex
  padding: 1.5em 12em
  flex-direction: column

.container
  display: flex
  flex-wrap: wrap
  justify-content: space-around

.item
  margin: .5em
  flex: 1 1 auto
  padding: 1.5em
  flex-basis: 30%
  min-width: 300px
  border-radius: 2px
  break-inside: avoid-column
  h1
    padding: 0
    color: #FF3232
    font-size: 3.5em
    font-weight: 500
    margin: 0 0 5px 0
  h3
    padding: 0
    color: #FF3232
    font-weight: 100
    margin: 0 0 5px 0
    font-size: 1.75em
  p
    margin: 0
    color: #FF3232
    font-weight: 300
    text-align: justify

.item:last-child
  background-color: #FF3232
  a
    color: #ffffff
  h3, p
    color: #ffffff

strong
  text-decoration: underline
</style>
