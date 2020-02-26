export default {
  getMostLiked: (state) => {
    return (num) => {
      const ratingSortedPosts = [...state.posts]
      return ratingSortedPosts
        .sort((a, b) => b.rating - a.rating)
        .splice(0, num)
    }
  }
}
