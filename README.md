# React-App

## Setup and Configuration. 

### Pre-requisites

* node

### Installation

* Install dependencies using npm

    - ```npm install```

### Dependencies Used

* react (^16.13.1)
* react-dom (^16.13.1)
* react-redux (^7.2.0)
* react-router-dom (^5.2.0)
* react-scripts (3.4.1)
* redux (^4.0.5)
* redux-thunk (^2.3.0)
* semantic-ui-css (^2.4.1)
* semantic-ui-react (^0.88.2)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Global state management

- Global state management using [React-Redux](https://github.com/reduxjs/react-redux)

  Take a look at the following files

  - Providing Store to React app [src/index.js](src/index.js)

- Computing and getting state from the redux store using [Redux](https://github.com/reduxjs/redux)

  Take a look at the following files

  - [src/Redux/reducers/index.js](src/Redux/reducers/index.js)

## Design and Style

- Styling components using [Custom CSS](./src/Styles/index.css)

- Reusing components from [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)

## Routing

- Routing is done using [React-Router-DOM](https://github.com/ReactTraining/react-router)

    Routes using in this projects are `http://localhost:3000`

## App entry point

- [src/index.js](src/index.js)

## Using App

- Open `http://localhost:3000` in your browser.
- Login with predefined credentials.
- Now see your employees in table.