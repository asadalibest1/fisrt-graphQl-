const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const Students = [
                {
                    "id": 1,
                    "name": "ali",
                    "email": "ali123@gmail.com",
                    "age": 15
                },
                {
                    "id": 2,
                    "name": "raza",
                    "email": "raza234gmail.com",
                    "age": 16
                },
                {
                    "id": 3,
                    "name": "zain",
                    "email": "zain567@gmail.com",
                    "age": 17
                }
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    students: () => Students,
  },
};

const typeDefs = gql`
  type Student {
    id: Int,
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})