import fs from 'fs';
import path from 'path';
// import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import connectDB from './config/db';

// GraphQL Dependecies:
import resolvers from './GraphQL/resolvers'; // Resolvers:
const typeDefs = fs.readFileSync(path.join(__dirname, './GraphQL/schemas.gql'), 'utf-8'); // Schemas:

// Starting .env file:
dotenv.config();

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
    .then(async ({ url }) => {
        await connectDB();
        console.log(`🚀  Server ready at: ${url}`);
    });


/* app.listen(0, async () => {
    const { url } = await startStandaloneServer(apollo, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}); */