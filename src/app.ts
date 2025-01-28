import express from "express";
import PropertyDbModel from "./models/property.db.model";
import { Property } from "./models/property.types";
import {ApolloServer} from '@apollo/server';
import {schema} from './graphql/schema'
import { json } from "body-parser";
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginLandingPageLocalDefault} from '@apollo/server/plugin/landingPage/default'
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

// //Fetch all
// app.get('/properties', async (req, res) => {
//     const properties = await PropertyDbModel.findAll();
//     res.json(properties);
// });

// //Fetch by id
// app.get('/properties/:id', async (req, res) => {
//     const property = await PropertyDbModel.findByPk(req.params.id);
//     if (property) {
//         res.json(property);
//     } else {
//         res.status(404).send('Property not found');
//     }
// });

// //Add new
// app.post('/properties', async (req, res) => {
//     const {city, street, state, zipCode} = req.body as Property;
//     const property = await PropertyDbModel.create({city, street, state, zipCode});
//     res.status(201).json(property);
// });

// //Delete
// app.delete('/properties/:id', async (req, res) => {
//     const result = await PropertyDbModel.destroy({ where: { id: req.params.id } });
//     if (result) {
//         res.status(204).send();
//     } else {
//         res.status(404).send('Property not found');
//     }
// });


