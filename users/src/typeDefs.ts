import gql from "graphql-tag";

export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.5", import: ["@key", "@shareable"])

  type User @key(fields: "id") {
    id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID): User
  }
`;
