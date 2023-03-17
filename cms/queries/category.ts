export default gql`
query MyQuery($slug: SlugFilter) {
    category(filter: {slug: $slug}) {
      title
      subtitle
      id
      _seoMetaTags {
        tag
        content
        attributes
      }
    }
}
`
