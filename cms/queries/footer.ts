export default gql`
query Footer {
  footer {
    navigationItemsFooter {
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
  }
}`