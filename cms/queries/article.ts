export default gql`
query MyQuery($slug: SlugFilter) {
  article(filter: {slug: $slug}) {
    title
    subtitle
    content
    _createdAt
    _seoMetaTags {
      tag
      content
      attributes
    }
  }
}
`
