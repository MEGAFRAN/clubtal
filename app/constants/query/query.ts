import { LANGUAGE, queryPostByLanguageAndSlug } from "../types/components_props/types"

const queries = {
  allInformation: (language: LANGUAGE) => `query New {
        posts (where: {categoryName: \"${language}\"}) {
            edges {
              node {
                id
                title
                readingTime
                content
                uri
                date
                author {
                  node {
                    id
                    name
                  }
                }
                categories {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }`,
  byLanguageAndSlug: ({ language, slug }: queryPostByLanguageAndSlug) => `query New {
    posts (where: {categoryName: \"${language}"\, uri: \"${slug}\"}) {
      edges {
        node {
          id
          title
          readingTime
          content
          uri
          date
          author {
            node {
              id
              name
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`,
}

export default queries
