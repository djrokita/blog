<template>
  <div class="flex">
    <main class="w-8/12">
      <Post v-for="post in postsToDisplay" :key="post.id" :post="post" />
    </main>
    <aside class="px-6 w-4/12">
      <div>
        <h3 class="uppercase mb-2">most liked</h3>
        <ul class="text-sm">
          <li
            v-for="post in getMostLiked(3)"
            :key="post.id"
            class="px-2 pb-2"
          >{{ post.title }} rating: {{ post.rating }}</li>
        </ul>
      </div>
      <div>
        <form class="w-full my-4">
          <input
            v-model="input"
            type="text"
            class="border border-solid border-gray-400 block bg-gray-300 w-full p-2 mb-4 tracking-wide"
            placeholder="post title"
          />
          <button
            class="bg-gray-500 hover:bg-gray-700 hover:text-gray-100 transition-all duration-200 ease-in py-2 px-6"
          >Go</button>
        </form>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Post from '../components/Post'

export default {
  components: {
    Post
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  },
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters(['getMostLiked']),
    ...mapState(['allPosts', 'postsToDisplay'])
  },
  methods: {
    ...mapActions(['filterPosts']),
    submitHandler(e) {
      this.filterPosts(e.target.value)
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
