import { merge } from 'lodash';
import { resolvers as Book } from './Book';
import { resolvers as Product } from './Products';

export const resolvers = merge(
  Product,
  Book
)
