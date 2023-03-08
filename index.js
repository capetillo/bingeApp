const { ApolloServer } = require("apollo-server")

const server = new ApolloServer({typeDefs, resolvers});
// resolvers are functions that deal with the data w graphql

server.listen().then(({url}) => {
    console.log(`YOUR API IS RUNNING AT: ${url}`)
});