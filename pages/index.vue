<template>
  <div>
    <main class="w-8/12">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </main>
    <aside></aside>
  </div>
</template>

<script>
import Post from '../components/Post'

export default {
  components: {
    Post
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
