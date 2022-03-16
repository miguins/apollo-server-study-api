import { randomUUID } from 'crypto';

export const typeDef = `
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
    updateProduct(id: String!, price: Float!): Product
    deleteProduct(id: String): [Product]
  }
`;

var products = []

export const resolvers = {
  Query: {
    products: () => products,
    product: (_, {id}) => products.find(p=> p.id === id)
  },

  Mutation: {
    addProduct: (_, args) => {
      const product = {
        id: randomUUID(),
        name: args.name,
        price: args.price
      }

      products.push(product)

      return product
    },

    updateProduct: (_, args) => {
      const product = products.find(p => p.id === args.id)

      if (!product) {
        throw new Error('Product does not exit.')
      }

      if (args.name != undefined) {
        product.name = args.name
      }

      if (args.price != undefined) {
        product.price = args.price
      }

      return product
    },

    deleteProduct: (_, {id}) => products = products.filter(p => p.id === id)
  }
}
