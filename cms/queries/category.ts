export default gql`
query MyQuery($slug: SlugFilter) {
    category(filter: {slug: $slug}) {
      title
      subtitle
      articles {
        title
        subtitle
        slug
        id
        _modelApiKey
        image {
          url
          title
          alt
          responsiveImage {
            srcSet
          }
        }
      }
    }
}
`
