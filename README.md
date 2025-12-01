# Little Lemon Booking App

A table reservation web application built as part of the Meta Front-End Developer Capstone Project.
Users can select a date, choose a time, pick the number of guests, and specify an occasion.
The app validates input on both the client and HTML5 level and confirms the booking.

This project was created using Create React App, styled with Tailwind CSS, tested with Jest + React Testing Library, and designed with accessibility standards in mind.

## Features

### Booking Form

- Select reservation date, time, number of guests, and occasion
- Available times update dynamically based on selected date
- Client-side + HTML5 validation
- Submit button auto-enables only when form is valid

### Form Validation

- Required fields enforced
- Guest count between 1–10
- Invalid inputs disable the submit button
- Fully tested with unit tests

### Accessibility

- Semantic HTML
- Proper labels and htmlFor usage
- ARIA attributes:
    `aria-label="On Click"` added to submit button
- Keyboard navigable

### UI

- Clean, modern Tailwind CSS styling
- Responsive layout
- Form centered on screen


## Technologies Used

- React
- React Router
- Tailwind CSS
- Jest
- React Testing Library
- Create React App (CRA)

## Running the Project

1. Install dependencies
### `npm install`

2. Start the development server
### `npm start`

The app will be available at:
[http://localhost:3000](http://localhost:3000)

## Running Tests

This project includes unit tests for:

- HTML5 validation attributes
- React validation logic
- Submit button states
- Form submission behavior

Run the tests using:
### `npm test`


## How the Booking System Works

- Main.js initializes available times
- updateTimes() reducer updates times based on chosen date
- submitForm() handles successful form submission
- BookingForm manages form inputs, validation, and user interaction
- Redirects to ConfirmedBooking after successful reservation

## Building for Production
### `npm run build`

This generates the optimized React production build.

## License

This project is part of the Meta Front-End Developer Professional Certificate Capstone and is for educational purposes.
