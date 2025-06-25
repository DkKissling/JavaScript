import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Blog from '../src/components/Blog';

describe('Blog component', () => {
  test('renders content', () => {
    const blog = {
      title: 'Test Blog',
      author: 'Test Author',
      url: 'http://testblog.com',
      likes: 5,
      id: '123'
    };
    const user = { username: 'testuser' };
    const likeBlog = jest.fn();
    const removeBlog = jest.fn();

    render(<Blog blog={blog} user={user} likeBlog={likeBlog} removeBlog={removeBlog} />);

    expect(screen.getByText('Test Blog Test Author')).toBeInTheDocument();
  });
});
