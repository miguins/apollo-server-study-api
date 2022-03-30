import { ApolloServer } from 'apollo-server-express';
import resolvers from '../../src/resolvers';
import typeDefs from '../../src/schema';

it('returns a list of products', async () => {

  const testServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  const result = await testServer.executeOperation({
    query: 'query Products { products { id,name,price } }'
  });

  expect(result.errors).toBeUndefined();
  expect(result.data?.products[0].name).toBe('Product 1');
});
