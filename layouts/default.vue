<template>
  <div class="bg-gray-400 flex flex-col min-h-screen">
    <navbar />
    <layout-header />
    <layout-content>
      <nuxt />
    </layout-content>
    <layout-footer />
  </div>
</template>
<script>
import LayoutHeader from '~/components/Header.vue'
import LayoutContent from '~/components/Content.vue'
import LayoutFooter from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    Navbar
  }
}
</script>
<style></style>
