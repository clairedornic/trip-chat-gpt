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
    }
  }
`