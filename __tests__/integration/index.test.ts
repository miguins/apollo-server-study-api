import "reflect-metadata";
import resolvers from '@src/resolvers';
import typeDefs from '@src/schema';
import { ApolloServer } from 'apollo-server-express';

describe('Apollo Server', () => {

  let testServer: ApolloServer;

  beforeAll(() => {
    testServer = new ApolloServer({ typeDefs, resolvers });
  });

  it('should execute query operation', async () => {
    const result = await testServer.executeOperation({
      query: 'query Products { products { id,name,price } }'
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toBeDefined();
    expect(result).toMatchSnapshot();
  });

  it('should not execute query operation', async () => {

    const result = await testServer.executeOperation({
      query: 'query { products { } }'
    });

    expect(result.errors).toBeDefined();
    expect(result.data).toBeUndefined();
    expect(result).toMatchSnapshot();
  });
});
