// Importing packages
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'; // Importing components

function App() {
  return (
    // All app Routes here
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  )
}

export default App;