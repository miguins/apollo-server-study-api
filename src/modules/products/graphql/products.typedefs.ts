import { gql } from 'apollo-server';

export const productTypeDefs = gql`

type Product {
  id: String!
  name: String
  price: Float
}

type Query {
  products: [Product]
  product(id: String!): Product
}

type Mutation {
  addProduct(name: String!, price: Float!): Product
  updateProduct(id: String!, name: String, price: Float): Product
  deleteProduct(id: String!): [Product]
}


`;
