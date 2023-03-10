const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash");

// will co ntain all of the resolver functions needed to retrieve data from api

const resolvers = {
    Query: {
        // here we define all of the resolver functions that will exist as a subfield for the Query type
        // right now it is only users 
        // here we make the api call 
        // user resolvers 
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, {id: Number(id)})
            return user;
        },
        // movie resolvers 
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const title = args.title
            const movie = _.find(MovieList, {title})
            return movie;
        }
    },
};

module.exports = { resolvers };