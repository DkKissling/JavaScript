import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notifications: notificationReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});