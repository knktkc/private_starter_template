<template lang="pug">
  section.container
    div
      app-logo
      h1.title private_starter_template
      h2.subtitle Nuxt.js project
      .links
        a.button--green(href="https://nuxtjs.org/", target="_blank") Documentation
        a.button--grey(href="https://github.com/nuxt/nuxt.js", target="_blank") GitHub
      p
        button(@click="increment") {{ counter }}
        nuxt-link(to="/about") About
</template>

<script>
import { mapState } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  fetch({ store }) {
    store.commit('increment')
  },
  computed: mapState(['counter']),
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="sass">
.container
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

.title
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;

.subtitle
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;

.links
  padding-top: 15px;
</style>
