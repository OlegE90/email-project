import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../Schemas/Main.graphql';

const graphqlRouter = express.Router();

const resolvers = {
    Query: {
        me: () => {
            return {
                id: '123',
                name: 'sdfasdfasdf'
            }
        },
    },
    User: {
        subUser() {
            return {};
        },
    }
};

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// bodyParser is needed just for POST.
graphqlRouter.use('/api', graphqlExpress({ schema }));
graphqlRouter.get('/', graphiqlExpress({ endpointURL: '/graphiql/api' }));

export default graphqlRouter;