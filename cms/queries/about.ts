export default gql`
query MyQuery {
    aboutPage {
        title
        subtitle
        heroImage {
            responsiveImage(imgixParams: { fit: crop, w: 1600, auto: format }) {
                src
                srcSet
                sizes
                width
                height
                alt
                title
            }
        }
        content {
            value
        }
        modularContent {
            blockTitleImageTitle
            blockTitleImageImage {
                responsiveImage(imgixParams: { fit: crop, w: 1600, h: 450, auto: format }) {
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
