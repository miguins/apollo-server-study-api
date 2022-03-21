import { makeExecutableSchema } from '@graphql-tools/schema';
import { productTypeDefs } from './modules/products/graphql/products.typedefs';
import resolvers from './resolvers';

const typeDefs = [
  productTypeDefs
]

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
