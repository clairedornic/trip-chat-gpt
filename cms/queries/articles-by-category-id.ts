export default gql`
query MyQuery($idCategory: [ItemId]) {
 allArticles(filter: {categories: {allIn: $idCategory}}) {
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
`
