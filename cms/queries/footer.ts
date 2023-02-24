import link from '~/cms/fragments/link'
export default gql`
${link}
query Footer {
    footer {
        differentUsage {
          ...link
        }
        footerNavigation {
          lien {
            blogSlug
          }
          navigationLabel
        }
    }
}`