<template>
  <div class="mb-6">
    <div class="mb-4 h-64">
      <img class="w-full object-cover h-full" :src="post.picture" />
    </div>
    <div class="mb-4 min-h-40">
      <p class="text-sm">{{ date }}</p>
      <h2 class="mb-4">{{ post.title }}</h2>
      <p>
        {{ lead }}
      </p>
    </div>
    <div>Read more...</div>
  </div>
</template>

<script>
import { textToPost, formatDate } from '../utils'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    lead() {
      return textToPost(this.post.article, 35)
    },
    date() {
      return formatDate(this.post.uploaded)
    }
  }
}
</script>

<style></style>
