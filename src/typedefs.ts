import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';

const mergePath = loadFilesSync(
  path.join(__dirname, 'modules/**/graphql/*'), { extensions: ['graphql', 'gql'] }
);

const typeDefs = mergeTypeDefs(mergePath);

export default typeDefs;
