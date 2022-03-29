import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import { productsResolvers } from '@modules/products/graphql/products.resolvers';
import { usersResolvers } from '@modules/users/graphql/users.resolvers';
import path from 'path';

const mergePath = loadFilesSync(
  path.join(__dirname, 'modules/**/graphql/*'), { extensions: ['resolvers.ts'] }
);

const resolvers = mergeResolvers([productsResolvers, usersResolvers]);

export default resolvers;
