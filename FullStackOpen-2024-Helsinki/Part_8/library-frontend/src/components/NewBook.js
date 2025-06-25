import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, ALL_BOOKS, ALL_AUTHORS } from '../queries/queries';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);

  const [ addBook ] = useMutation(ADD_BOOK, {
    update: (cache, { data: { addBook } }) => {
      const { allBooks } = cache.readQuery({ query: ALL_BOOKS });
      cache.writeQuery({
        query: ALL_BOOKS,
        data: { allBooks: allBooks.concat(addBook) },
      });
      
      // Actualizar también la caché de ALL_AUTHORS si es necesario
      try {
        const { allAuthors } = cache.readQuery({ query: ALL_AUTHORS });
        const authorExists = allAuthors.find(a => a.name === addBook.author.name);
        if (!authorExists) {
          cache.writeQuery({
            query: ALL_AUTHORS,
            data: { allAuthors: allAuthors.concat({ name: addBook.author.name, born: null, bookCount: 1 }) },
          });
        }
      } catch (e) {
        console.log('Error updating authors cache:', e);
      }
    },
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });
  
  const submit = async (event) => {
    event.preventDefault();

    console.log('add book...');

    addBook({  variables: { title, author, published: parseInt(published), genres } });

    setTitle('');
    setPublished('');
    setAuthor('');
    setGenres([]);
    setGenre('');
  };

  const addGenre = () => {
    setGenres(genres.concat(genre));
    setGenre('');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">add genre</button>
        </div>
        <div>genres: {genres.join(' ')}</div>
        <button type='submit'>create book</button>
      </form>
    </div>
  );
};

export default NewBook;