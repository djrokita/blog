export default {
  async fetchPosts({ commit }) {
    await this.$axios
      .$get('http://www.json-generator.com/api/json/get/bXSGRIeOGa?indent=2')
      .then((posts) => {
        commit('setAllPosts', posts)
        commit('setPostsToDisplay', posts)

        return posts
      })
  },

  filterPosts({ state, commit }, posts) {
    console.log('state', state)
    // setPostsToDisplay(state, title) {
    //   const { allPosts } = state
    //   state.postsToDisplay = allPosts.filter((post) => post.title.includes(title))
    // }
    commit('setPostsToDisplay', posts)
  }
}
