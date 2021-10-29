import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
  query SearchTopics($searchValue: String!) {
    search(query: $searchValue, type: REPOSITORY, first: 15) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            stargazers {
              totalCount
            }
            resourcePath
            repositoryTopics(first: 15) {
              totalCount
              nodes {
                topic {
                  name
                  stargazerCount
                  relatedTopics {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
