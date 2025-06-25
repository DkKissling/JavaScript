# Phonebook React App

This project is a simple phonebook application built using React, allowing users to manage contacts, add phone numbers, search for people by name, and perform CRUD (Create, Read, Update, Delete) operations using a JSON server as the backend.

## Implemented Features

### 1. Adding Persons to the Phonebook

Users can add a new person with their name and phone number using the application's form.

### 2. Preventing Duplicate Names

Functionality is in place to prevent adding duplicate names to the phonebook. If an attempt is made to add a name that already exists, a user alert is displayed.

### 3. Adding Phone Numbers

In addition to names, users can add phone numbers to each person in the phonebook.

### 4. Search Field

A search field is included to dynamically filter the list of persons based on the entered name, ignoring case sensitivity.

### 5. Component Refactoring

The application has been refactored to logically separate functionalities into reusable components:
- **Filter**: Component for filtering the list of persons by name.
- **PersonForm**: Component for adding new persons to the phonebook.
- **Persons**: Component displaying the list of persons with options for deletion.

### 6. Backend Data Persistence

Application data is managed by `json-server`, a JSON server providing CRUD operations via HTTP requests. The application performs GET, POST, PUT, and DELETE requests to interact with the server and maintain data integrity.

### 7. Notification Handling

Visual notifications have been implemented to inform users about successful operations (add, update, delete) and errors encountered during these operations.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **axios**: Promise-based HTTP client for making requests to the server.
- **json-server**: JSON server for simulating a RESTful API and persistently storing data.
- **CSS**: Basic styling using CSS to enhance the visual presentation of the application.

## Usage Instructions

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the JSON server with `json-server --port 3001 --watch db.json`.
4. Start the React application with `npm start`.
5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Screenshots

Below are screenshots illustrating different functionalities of the application:

- Screenshot of the person addition form.
- Screenshot of the search filter in action.
- Screenshot of a successful operation notification.

## Contributions

Contributions are welcome. If you have suggestions for improvements, please create a pull request or open an issue in this repository.

## Author

This project was developed by [Daniel Kissling].


