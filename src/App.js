import React from 'react';
import './App.css';

// Container
import MoviesContainer from './components/containers/MoviesContainer';

// Material UI
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
      <Container maxWidth={false} component="header" className="appHeader">
        <h1>React Movies App</h1>
      </Container>
      <MoviesContainer />
    </Container>
  );
}

export default App;
