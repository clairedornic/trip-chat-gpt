export default gql`
query MyQuery {
    homePage {
      subtitle
      title
      titleBestDestination
      titleLastArticles
      textCallToAction
      calltoaction {
        slug
        id
      }
      image {
        responsiveImage(imgixParams: { fit: crop, w: 600, h: 400, auto: format }) {
          src
          srcSet
          sizes
          width
          height
          alt
          title
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