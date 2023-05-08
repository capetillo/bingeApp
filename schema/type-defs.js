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

    type Mutation {
        signUp(name: String!, email: String!, password: String!): String!
        signIn(email: String!, password: String!): String!
        signOut: Boolean!
        addFriend(userId: ID!): User!
        swipeMovie(movieId: Int!, swipedRight: Boolean!): SwipedMovie!
    }

    type Subscription {
        matchMade(userId: ID!): SwipedMovie!
    }
`;

module.exports = {typeDefs}