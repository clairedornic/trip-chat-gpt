export default gql`
query MyQuery {
    aboutPage {
        title
        subtitle
        content {
            value
        }
        modularContent {
            blockTitleImageTitle
            blockTitleImageImage {
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
        }
        _seoMetaTags {
            tag
            content
            attributes
        }
    }
}
`
