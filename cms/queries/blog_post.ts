export default gql`
query blogPosts {
  allBlogPosts {
    id
    title
    blogSlug
    content
    _publishedAt
  }
}
`