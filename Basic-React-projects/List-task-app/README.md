
# Aplicación_de_Listado_de_Tareas

This is a task list application developed with React and styled with Tailwind CSS. The application offers a unique user access through predefined credentials and features functionalities such as a task list and a dark mode. Additionally, the task data is fetched from the public JSONPlaceholder API.

## Getting Started

Follow these steps to set up and run the application in your local environment:

1. Clone this repository to your machine:
   ```bash
   git clone https://github.com/your-username/Aplicación_de_Listado_de_Tareas.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Aplicación_de_Listado_de_Tareas
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

The application will run in your browser at [http://localhost:3000](http://localhost:3000).

## Features

### Authentication
The application has a predefined user authentication. You can use the following credentials to log in:
- Username: `user`
- Password: `pass`

### Task List
Once authenticated, you will be able to view a list of tasks fetched from the JSONPlaceholder API. These tasks are displayed in a list, and you can mark them as completed.

### Dark Mode
The application provides a button to enable or disable the dark mode. The state of the dark mode is persisted even if the application is restarted.

### User Persistence
The application remembers if you are authenticated, so you don't need to enter your credentials again after an application restart. If you were authenticated in your previous session, the application will start in that state.

## Task Data
The task data is fetched from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) API.

## Contributing
If you'd like to contribute to this project, feel free to open issues or submit pull requests on the GitHub repository.

## License
This project is licensed under the [MIT](LICENSE) license.

---

If you have any questions or need assistance, feel free to contact the developers:
- Name: [Juan Cruz Tobares and Guillermo Daniel Kissling]
- Email: [j.tobares@itecriocuarto.org.ar, g.kissling@itecriocuarto.org.ar]

We hope you enjoy using Aplicación_de_Listado_de_Tareas! 😊
