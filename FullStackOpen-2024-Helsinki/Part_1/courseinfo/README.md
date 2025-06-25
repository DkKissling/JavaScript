# Exercises 1.1 to 1.5 - Half Stack Application Development

This project implements solutions to exercises from the "Half Stack application development" course using React. Below is a detailed breakdown of how each exercise step was implemented:

## Exercise 1.1: Course Information, Step 1

Implemented the Header component to display the course title using props in React.

## Exercise 1.2: Course Information, Step 2

Extended the application by adding Content and Total components:
- **Content**: Displays the name and number of exercises for each part of the course.
- **Total**: Calculates and displays the total number of exercises across all parts.

## Exercise 1.3: Course Information, Step 3

Refactored the code to use JavaScript objects to represent each part of the course instead of individual variables.

## Exercise 1.4: Course Information, Step 4

Modified the application to store course parts in an array, simplifying management and rendering in the Content and Total components.

## Exercise 1.5: Course Information, Step 5

Consolidated all course information into a single JavaScript object named `course`, including the course name and an array of objects representing each part with its respective name and exercise count.

## Project Structure

- **App.jsx**: Main component defining the `course` object and utilizing Header, Content, and Total components.
- **Header.jsx**: Functional component displaying the course title.
- **Content.jsx**: Functional component displaying course parts and their exercises.
- **Total.jsx**: Functional component calculating and displaying the total number of course exercises.

## Running the Project

To run the project:
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the application with `npm start`.

## Additional Notes

This project showcases the use of React and demonstrates a structured approach to managing course information, emphasizing data passing between components and code refactoring for improved organization and maintainability.

