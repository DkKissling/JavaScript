const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');
const api = supertest(app);

const initialBlogs = [
  {
    title: 'First blog',
    author: 'Author 1',
    url: 'http://example.com/1',
    likes: 1
  },
  {
    title: 'Second blog',
    author: 'Author 2',
    url: 'http://example.com/2',
    likes: 2
  }
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(initialBlogs[0]);
  await blogObject.save();
  blogObject = new Blog(initialBlogs[1]);
  await blogObject.save();
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs');
  expect(response.body).toHaveLength(initialBlogs.length);
});

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs');
  const titles = response.body.map(r => r.title);
  expect(titles).toContain('First blog');
});

afterAll(() => {
  mongoose.connection.close();
});

