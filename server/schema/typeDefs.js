const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    description: String
  }

  type Query{
    getAllUsers: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, description: String!): User
  }
`
module.exports = typeDefs;