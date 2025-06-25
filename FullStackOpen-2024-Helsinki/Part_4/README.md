# Blog List Application

## Project Summary

This project is a blog list application that allows users to save information about interesting blogs they have found on the Internet. Each listed blog contains the following data: author, title, URL, and the number of upvotes from the application's users.

## Main Features

1. **Blog Listing**: The application allows listing all blogs stored in the database through the endpoint `/api/blogs`.
2. **Blog Creation**: Users can create new blogs through the endpoint `/api/blogs` via POST requests.
3. **Environment Variable Management**: Environment variables, such as the MongoDB database URL, are managed in the module `utils/config.js`.
4. **Centralized Logging**: All log messages (info and error) are handled through the module `utils/logger.js`.
5. **Custom Middleware**: Custom middleware, such as request logging and error handling, is found in the module `utils/middleware.js`.

## Unit Tests

The project includes unit tests for some helper functions defined in the module `utils/list_helper.js`. These tests are located in the `tests` directory and cover the following cases:

- `dummy`: Ensures the dummy function always returns 1.
- `totalLikes`: Tests the function that calculates the total likes in a list of blogs.
- `favoriteBlog`: Tests the function that finds the blog with the most likes.
- `mostBlogs`: Tests the function that finds the author with the most blogs.
- `mostLikes`: Tests the function that finds the author with the most total likes.

To run the tests, use the command `npm test`.

## Setup and Execution

1. Clone the project repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root of the project and add the environment variable `MONGODB_URI` with your MongoDB database URL.
4. Start the application with `npm run dev`.

The application will be available at `http://localhost:3003/api/blogs`.

