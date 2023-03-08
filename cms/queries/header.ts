export default gql`
query Header {
  header {
    navigationItems {
      ... on NavigationItemRecord {
        id
        slug
        title
        link {
          ... on CategoryRecord {
            id
            title
            _modelApiKey
          }
          ... on AboutPageRecord {
            id
            title
            slug
          }
        }
      }
    }
    logo {
      url
      title
      alt
      responsiveImage {
        srcSet
      }
    }
  }
}`