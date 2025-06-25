import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Blog from './Blog';

describe('<Blog />', () => {
  let blog;
  let user;
  let likeBlog;
  let removeBlog;

  beforeEach(() => {
    blog = {
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      user: {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
      },
      id: '123' // Asegúrate de incluir un id
    };
    user = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
    };
    likeBlog = jest.fn();
    removeBlog = jest.fn();
  });

  test('renders title and author, but not URL or likes by default', () => {
    const { container } = render(
      <Blog blog={blog} user={user} likeBlog={likeBlog} removeBlog={removeBlog} />
    );
    
    expect(screen.getByText('React patterns Michael Chan')).toBeInTheDocument();
    expect(container).not.toHaveTextContent('https://reactpatterns.com/');
    expect(container).not.toHaveTextContent('7 likes');
  });

  test('URL and number of likes are shown when the button is clicked', () => {
    render(<Blog blog={blog} user={user} likeBlog={likeBlog} removeBlog={removeBlog} />);
    
    fireEvent.click(screen.getByText('view'));
    
    expect(screen.getByText('https://reactpatterns.com/')).toBeInTheDocument();
    expect(screen.getByText('7 likes')).toBeInTheDocument();
  });

  test('clicking the like button twice calls the event handler twice', () => {
    render(<Blog blog={blog} user={user} likeBlog={likeBlog} removeBlog={removeBlog} />);
    
    fireEvent.click(screen.getByText('view')); // show details
    const likeButton = screen.getByText('like');
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    
    expect(likeBlog).toHaveBeenCalledTimes(2);
  });
});

