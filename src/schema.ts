import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';
import resolvers from './resolvers';

const mergePath = loadFilesSync(
  path.join(__dirname, 'modules/**/graphql/*'), { extensions: ['graphql', 'gql'] }
);

const typeDefs = mergeTypeDefs(mergePath);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
