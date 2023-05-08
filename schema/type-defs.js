const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        email: String!
        friends: [User!]!
        swipedMovies: [SwipedMovie!]!
    }

    type SwipedMovie {
        id: ID!
        movieId: Int!
        user: User!
        swipedRight: Boolean!
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