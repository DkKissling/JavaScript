import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from '../queries/queries';

const Books = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const result = useQuery(ALL_BOOKS, {
    variables: { genre: selectedGenre }
  });

  if (result.loading) {
    return <div>loading...</div>;
  }

  const books = result.data.allBooks;
  const genres = [...new Set(books.flatMap(book => book.genres))];

  return (
    <div>
      <h2>Books</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {genres.map(genre => (
          <button key={genre} onClick={() => setSelectedGenre(genre)}>{genre}</button>
        ))}
        <button onClick={() => setSelectedGenre(null)}>all genres</button>
      </div>
    </div>
  );
};

export default Books;