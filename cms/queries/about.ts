export default gql`
query MyQuery {
    aboutPage {
        content
        title
        subtitle
        _seoMetaTags {
            tag
            content
            attributes
        }
    }
}
`
