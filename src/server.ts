import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import resolvers from './resolvers';
import typeDefs from './typedefs';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      process.env.NODE_ENV === 'production' ? ApolloServerPluginLandingPageDisabled : ApolloServerPluginLandingPageLocalDefault,
    ],
    introspection:  process.env.NODE_ENV === 'production' ? false : true
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)
