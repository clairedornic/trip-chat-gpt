export default gql`
query MyQuery($idCategory: [ItemId]) {
 allArticles(filter: {categories: {allIn: $idCategory}}) {
    title
    subtitle
    slug
    id
    _modelApiKey
    image {
      responsiveImage(imgixParams: { fit: crop, w: 250, h: 250, auto: format }) {
        src
        srcSet
        sizes
        width
        height
        alt
        title
      }
    }
  }
}
`
