export default gql`
query MyQuery($slug: SlugFilter) {
  article(filter: {slug: $slug}) {
    title
    subtitle
    content
    _createdAt
    image {
      responsiveImage(imgixParams: { fit: crop, w: 600, h: 450, auto: format }) {
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
