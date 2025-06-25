const { ApolloServer, gql, UserInputError } = require('apollo-server');
const { v4: uuid } = require('uuid');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'YOUR_SECRET_KEY_HERE'; // Asegúrate de usar una clave secreta segura

// Datos iniciales
let books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    published: 1998,
    genres: ['Fantasy', 'Adventure']
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    published: 1937,
    genres: ['Fantasy', 'Adventure']
  },
  {
    title: '1984',
    author: 'George Orwell',
    published: 1949,
    genres: ['Dystopian', 'Science Fiction']
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    published: 1813,
    genres: ['Romance', 'Fiction']
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    published: 1925,
    genres: ['Fiction', 'Classic']
  },
];

let authors = [
  {
    name: 'J.K. Rowling',
    born: 1965,
  },
  {
    name: 'J.R.R. Tolkien',
    born: 1892,
  },
  {
    name: 'George Orwell',
    born: 1903,
  },
  {
    name: 'Jane Austen',
    born: 1775,
  },
  {
    name: 'F. Scott Fitzgerald',
    born: 1896,
  },
];

let users = [
  { username: 'testuser', password: 'password123' },
  { username: 'alice', password: 'alicepass' },
  { username: 'bob', password: 'bobpass' },
  { username: 'charlie', password: 'charliepass' },
];

// Definición de tipos y esquema

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
  }

  type Author {
    name: String!
    born: Int
    bookCount: Int!
  }

  type User {
    username: String!
    favoriteGenre: String!
  }

  type Token {
    value: String!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, setBornTo: Int!): Author
    createUser(username: String!, favoriteGenre: String!): User
    login(username: String!, password: String!): Token
  }
`;

const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: (root, args) => {
      let filteredBooks = books;
      if (args.author) {
        filteredBooks = filteredBooks.filter(book => book.author === args.author);
      }
      if (args.genre) {
        filteredBooks = filteredBooks.filter(book => book.genres.includes(args.genre));
      }
      return filteredBooks;
    },
    allAuthors: () => authors.map(author => ({
      ...author,
      bookCount: books.filter(book => book.author === author.name).length
    })),
    me: (root, args, context) => {
      return context.currentUser;
    }
  },
  Mutation: {
    addBook: (root, args) => {
      const book = { ...args, id: uuid() };
      books = books.concat(book);
      if (!authors.find(a => a.name === args.author)) {
        const newAuthor = { name: args.author, id: uuid() };
        authors = authors.concat(newAuthor);
      }
      return book;
    },
    editAuthor: (root, args) => {
      const author = authors.find(a => a.name === args.name);
      if (!author) {
        return null;
      }
      const updatedAuthor = { ...author, born: args.setBornTo };
      authors = authors.map(a => a.name === args.name ? updatedAuthor : a);
      return updatedAuthor;
    },
    createUser: (root, args) => {
      const user = { ...args, id: uuid() };
      users = users.concat(user);
      return user;
    },
    login: (root, args) => {
      const user = users.find(u => u.username === args.username);
      if (!user || args.password !== user.password) {
        throw new UserInputError("wrong credentials");
      }

      const userForToken = {
        username: user.username,
        id: user.id,
      };

      return { value: jwt.sign(userForToken, JWT_SECRET) };
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), JWT_SECRET
      );
      const currentUser = users.find(u => u.username === decodedToken.username);
      return { currentUser };
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});