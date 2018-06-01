<template lang="pug">
  section.hero.is-primary.is-bold
    .hero-body
      h1.title.is-size-2 About
      h2.subtitle.is-size-4 Avocadoとは？
      p {{data.body}}
</template>
<script>
export default {
  async asyncData({ app }) {
    const data = await app.$axios.$get('http://localhost:8000/comments/1')
    return { data }
  },
  head: {
    title: 'about'
  }
}
</script>
