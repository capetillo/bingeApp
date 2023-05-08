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
        movieId: String!
        user: User!
        swipedRight: Boolean!
    }


# first level 
    type Query {
        me: User!
        searchUsers(query: String!): [User!]!
        getSwipedMovies: [SwipedMovie!]!
    }
`;

module.exports = {typeDefs}