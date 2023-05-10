const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash");

// will co ntain all of the resolver functions needed to retrieve data from api

const resolvers = {
    Mutation: {
      signupUser: async (parent, args, context, info) => {
        // Create a new user account and return the user object
        const user = await createUser(args.input);
        return user;
      },
    },
  };
  

module.exports = { resolvers };