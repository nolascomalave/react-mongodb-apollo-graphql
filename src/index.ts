import fs from 'fs';
import path from 'path';
// import express from 'express';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

// GraphQL Dependecies:
import resolvers from './GraphQL/resolvers'; // Resolvers:
const typeDefs = fs.readFileSync(path.join(__dirname, './GraphQL/schemas.gql'), 'utf-8'); // Schemas:

// Servers:
// const app = express();
const apollo = new ApolloServer({
    resolvers,
    typeDefs
});

startStandaloneServer(apollo, {
    listen: { port: 4000 },
    /* context: async ({ req, res }: any) => ({
        myContext: 'Examplazo',
    }) */
})
    .then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
    });


/* app.listen(0, async () => {
    const { url } = await startStandaloneServer(apollo, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}); */