export default {
  async fetchPosts({ commit }) {
    await this.$axios
      .$get('http://www.json-generator.com/api/json/get/bXSGRIeOGa?indent=2')
      .then((posts) => {
        commit('setAllPosts', posts)

        return posts
      })
  }
}
