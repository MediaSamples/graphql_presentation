import gql from "graphql-tag";

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.5", import: ["@key"])

  type User @key(fields: "id") {
    id: ID!
    videos: [Video!]
  }

  type Video {
    id: ID!
    title: String!
    duration: Int!
    url: String!
    author: User!
  }

  type Query {
    getVideos: [Video!]
    getVideo(id: ID!): Video
  }
`;
