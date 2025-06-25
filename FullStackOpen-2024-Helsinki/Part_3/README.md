# Fullstack Phonebook Application

This repository contains a fullstack application for managing a phonebook, including both backend and frontend deployed online.

## Description

This project implements a phonebook where users can add, delete, and view contacts. The backend provides a RESTful API built with Node.js and Express to manage contact data stored in a MongoDB database. The frontend interacts with this API to provide an intuitive user interface.

## Features Implemented

- **Backend**: Node.js and Express.js API for handling phonebook contacts. Includes CRUD (Create, Read, Update, Delete) operations.
- **Frontend**: User interface built with HTML, CSS, and JavaScript to interact with the backend. Enables users to add new contacts, delete existing ones, and view the complete list.
  
## Online Deployment

The backend is deployed at [https://phonebook-backend-fragrant-paper-2482.fly.dev/](https://phonebook-backend-fragrant-paper-2482.fly.dev/). The entire application is accessible online for testing all functionalities.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB Atlas for database storage.
- **Frontend**: HTML, CSS, JavaScript for the user interface.
- **Deployment**: Hosted on Fly.io for backend deployment online.

## Setup Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB Atlas account or local MongoDB server

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/phonebook.git
   cd phonebook
   ```

2. **Install dependencies for both backend and frontend:**

   ```bash
   # Navigate to backend directory and install dependencies
   cd backend
   npm install
   
   # Navigate to frontend directory and install dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the backend directory and add your MongoDB connection string and any other necessary environment variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=3001
   ```

4. **Run the application:**

   ```bash
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend development server (in a separate terminal)
   cd ../frontend
   npm start
   ```

   The backend server should be running at `http://localhost:3001` and the frontend at `http://localhost:3000`.

### Additional Notes

- The `.gitignore` file has been configured to exclude unnecessary files and directories such as `node_modules`, logs, environment files, and other local configurations.
- Ensure that your MongoDB database is properly configured and accessible from your local machine or deployment environment.

## Completed Exercises

- Initial setup of Node.js and Express server.
- Implementation of endpoints for phonebook management (CRUD operations).
- Integration of middleware like Morgan for logging messages.
- Deployment of backend on Fly.io and verification of online functionality.
- Integration with frontend for a complete user experience.
- Configuration of MongoDB Atlas and advanced operations using Mongoose.


