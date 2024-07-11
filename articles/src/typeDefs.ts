import gql from "graphql-tag";

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.5", import: ["@key"])

  type User @key(fields: "id") {
    id: ID!
    articles: [Article!]
  }

  type Article {
    id: ID!
    url: String!
    author: User!
  }

  type Query {
    getArticles: [Article!]
    getArticle(id: ID!): Article
  }
`;
