const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        friends: [User]
      #for now, movies is string but movies will be its own type later
        movies: String

    }

    type Movie {
        id: ID!
        title: String!
        year: Int!
        cast: String
        rating: Int!
        liked: Boolean!
    }


# first level 
    type Query {
        users: [User!]! 
        user(id: ID!): User!
        movies: [Movie!]!
        movie(title: String!): Movie!
    }
`;

module.exports = {typeDefs}