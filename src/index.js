// Importing dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/reducers/index';
import App from './Components/App';
// Importing CSS stylings
import './Styles/index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  // Providing redux store to react components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);