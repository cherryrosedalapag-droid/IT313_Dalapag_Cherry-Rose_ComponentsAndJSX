# IT313 Laboratory 4 - Components and JSX

## Student Roster Card Renderer

This project is a React Native Expo application that displays a list of
students using reusable components.

## Components

### StudentCard

StudentCard is a functional component that receives the following props:

- name
- course
- units
- isFullLoad

The props are destructured in the function parameter.

The "Full Load" label is conditionally rendered when isFullLoad is true.

### StudentRoster

StudentRoster contains the student roster and uses the map() method to
render one StudentCard for every student.

Each StudentCard uses the student's id as its key.

The total number of students is displayed using students.length.

## Data

The application contains four students:

- Ana Cruz
- Bea Santos
- Cid Ramos
- Dex Alonzo

## How to Run

Start the Expo development server using:

npx expo start

The application can be opened using Expo Go or an emulator.

## Technologies

- React Native
- Expo
- TypeScript
- JSX