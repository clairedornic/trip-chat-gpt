export default gql`
query MyQuery($idCategory: [ItemId]) {
  allArticles(orderBy: _createdAt_DESC, first: "3", filter: {categories: {allIn: $idCategory}, featureArticle: {eq: "true"}}) {
    title
    subtitle
    slug
    id
    image {
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 250, auto: format }) {
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