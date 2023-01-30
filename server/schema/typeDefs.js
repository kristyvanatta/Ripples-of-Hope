const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID,
    name: String,
    email: String,
    password: String,
  }

  type Auth {
    token: ID
    user: User
  } 
  
  type Story {
    _id: ID
    title: String
    description: String
    image: String
    userId: User
  }
  type Query{
    getAllUsers: [User]
    user: User
    story(_id: ID!): Story
    stories(userId: ID, name: String ): [Story]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): User
    deleteUser(_id: ID): User
    addStroy(title: String!, description: String! image: Stirng, userId: userId): Story
    updateStory(_id: ID!): Story
    deleteStory(_id: ID!):[Story]
    login(email: String!, password: String!): Auth
  }
`
module.exports = typeDefs;