# Country Information App

This is a React application that allows users to retrieve information about different countries using the REST Countries API. Additionally, it integrates functionality to display weather reports using the OpenWeatherMap API for each selected country's capital.

## Features

- **Country Search:**
  - Users can search for country information by typing the country name into the search field.

- **Result Handling:**
  - If there are more than 10 countries matching the search, the user is prompted to make a more specific query.
  - If there are 10 or fewer countries but more than one, a list of matching countries with buttons to view additional details is displayed.
  - When a single country matches the search, detailed information about the country is shown, including capital, area, flag, and spoken languages.

- **Country Details:**
  - Clicking on a button next to the country name in the multiple results list shows a detailed view of the selected country.

- **Weather Report:**
  - For each selected country, the current weather report for its capital city is displayed using the OpenWeatherMap API. This includes the current temperature and weather description.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your_username/country-info-app.git
   cd country-info-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up OpenWeatherMap API Key:**
   - Create a `.env` file in the project root directory.
   - Add your OpenWeatherMap API key to the `.env` file:
     ```plaintext
     REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```
   - Ensure not to share this key in public repositories like GitHub.

4. **Start the Application:**
   ```bash
   npm start
   ```

   This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Technologies Used

- React
- Axios for making HTTP requests
- CSS for basic styling

## Author

- Name: [Daniel Kissling]
- GitHub: [DkKissling]

## License

This project is licensed under the [License Daniel Kissling]. For more details, see the `LICENSE.md` file.
```
