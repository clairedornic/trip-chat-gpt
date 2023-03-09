export default gql`
query MyQuery {
    homePage {
      subtitle
      title
      titleBestDestination
      titleLastArticles
      calltoaction {
        slug
        id
      }
      image {
        url
        alt
        responsiveImage {
          srcSet
        }
      }
      _seoMetaTags {
        tag
        content
        attributes
      }
    }
  }
`