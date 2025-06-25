import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS, ME } from '../queries/queries';

const Recommend = () => {
  const user = useQuery(ME);
  const books = useQuery(ALL_BOOKS, {
    variables: { genre: user.data?.me?.favoriteGenre },
    skip: !user.data?.me
  });

  if (user.loading || books.loading) {
    return <div>loading...</div>;
  }

  const favoriteGenre = user.data.me.favoriteGenre;
  const recommendedBooks = books.data.allBooks;

  return (
    <div>
      <h2>Recommendations</h2>
      <p>Books in your favorite genre <strong>{favoriteGenre}</strong></p>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
          {recommendedBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommend;