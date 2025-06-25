const Blog = require('../models/blog');

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const createBlog = async (req, res) => {
  const blog = new Blog(req.body);

  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create blog' });
  }
};

const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedBlog) {
      res.json(updatedBlog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Unable to update blog' });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndRemove(req.params.id);
    if (blog) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Unable to delete blog' });
  }
};
const likeBlog = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Attempting to find blog with id:', id);
    const blog = await Blog.findById(id);
    if (!blog) {
      console.log('Blog not found');
      return res.status(404).json({ error: 'Blog not found' });
    }
    console.log('Blog found, current likes:', blog.likes);
    blog.likes += 1;
    const updatedBlog = await blog.save();
    console.log('Blog updated, new likes:', updatedBlog.likes);
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error in likeBlog:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  likeBlog
};
