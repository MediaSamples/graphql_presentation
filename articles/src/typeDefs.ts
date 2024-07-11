import gql from "graphql-tag";

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.5", import: ["@key"])

  type User @key(fields: "id") {
    id: ID!
    posts: [Post!]
  }

  type Post {
    id: ID!
    url: String!
    author: User!
  }

  type Query {
    getPosts: [Post!]
    getPost(id: ID!): Post
  }
`;
