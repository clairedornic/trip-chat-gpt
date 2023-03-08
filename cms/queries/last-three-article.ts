export default gql`
query MyQuery($idCategory: [ItemId]) {
  allArticles(orderBy: _createdAt_DESC, first: "3", filter: {categories: {allIn: $idCategory}}) {
    title
    subtitle
    slug
    id
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