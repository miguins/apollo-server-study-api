export const typeDef = `

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

var books = [
  {
    title: 'Livro 1',
    author: 'Author Livro 1'
  }
]

export const resolvers = {
  Query: {
    books: () => books
  }
}
