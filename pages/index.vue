<template>
  <div class="flex">
    <main class="w-8/12">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </main>
    <aside class="px-6">
      <div>
        <h3 class="uppercase mb-2">most liked</h3>
        <ul class="text-sm">
          <li v-for="post in getMostLiked(3)" :key="post.id" class="px-2 pb-2">
            {{ post.title }} rating: {{ post.rating }}
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Post from '../components/Post'

export default {
  components: {
    Post
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  },
  computed: {
    ...mapGetters(['getMostLiked']),
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
