export default gql`
query MyQuery($slug: SlugFilter) {
    category(filter: {slug: $slug}) {
      id
    }
}
`
