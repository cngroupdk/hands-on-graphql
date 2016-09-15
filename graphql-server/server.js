import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './src/schema';

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 8844;

const graphQLServer = express();

(function enableCORS() {
  graphQLServer.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  graphQLServer.options('*', (req, res) => {
    res.sendStatus(200);
  });
})();


graphQLServer.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

graphQLServer.listen(GRAPHQL_PORT, () => {
  console.log('listening at localhost:%s/graphql (POST method)', GRAPHQL_PORT);
});
