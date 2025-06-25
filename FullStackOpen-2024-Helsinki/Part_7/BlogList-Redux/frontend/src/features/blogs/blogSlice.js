import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/blogs';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const fetchSingleBlog = createAsyncThunk('blogs/fetchSingleBlog', async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
});

export const createBlog = createAsyncThunk('blogs/createBlog', async (blogData) => {
  const response = await axios.post(baseUrl, blogData);
  return response.data;
});

export const updateBlog = createAsyncThunk('blogs/updateBlog', async ({ id, blogData }) => {
  const response = await axios.put(`${baseUrl}/${id}`, blogData);
  return response.data;
});

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
});

export const likeBlog = createAsyncThunk('blogs/likeBlog', async (id) => {
  const response = await axios.put(`${baseUrl}/${id}/like`);
  return response.data;
});

export const addBlog = createAsyncThunk('blogs/addBlog', async (blog) => {
  const response = await axios.post('/api/blogs', blog);
  return response.data;
});


const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    currentBlog: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSingleBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentBlog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(blog => blog._id === action.payload.id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
        if (state.currentBlog && state.currentBlog.id === action.payload.id) {
          state.currentBlog = action.payload;
        }
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter(blog => blog._id !== action.payload);
        if (state.currentBlog && state.currentBlog.id === action.payload) {
          state.currentBlog = null;
        }
      })
      .addCase(likeBlog.fulfilled, (state, action) => {
        const updatedBlog = action.payload;
        const existingBlog = state.blogs.find(blog => blog._id === updatedBlog._id);
        if (existingBlog) {
          existingBlog.likes = updatedBlog.likes;
        }
      });
      
  }
});

export default blogSlice.reducer;