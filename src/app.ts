import express from "express";
import { ApolloServer } from '@apollo/server';
import { schema } from './graphql/schema'
import { json } from "body-parser";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import initMessages from "./consoleMessages/initMessages";

const app = express();
app.use(express.json());

const startApolloServer = async () => {
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageLocalDefault()]
    });

    await apolloServer.start();
    console.log(initMessages.apolloReady);

    app.use('/graphql', json(), expressMiddleware(apolloServer));
    app.get('/', (req, res) => {
        res.send(initMessages.apiRunning);
    });
};

startApolloServer();

export default app;



