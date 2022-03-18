import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from "path";

const mergePath = loadFilesSync(
  path.join(__dirname, "modules/**/graphql/*.graphql")
);

const typeDefs = mergeTypeDefs(mergePath);

export default typeDefs;
