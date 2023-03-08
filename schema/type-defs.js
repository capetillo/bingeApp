const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
      #for now, movies is string but movies will be defined later
        movies: String!

    }

# first level 
    type Query {
        users: [User!]!  
    }
`;