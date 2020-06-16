import React from 'react';
import './App.css';

// main Container
import MainContainer from './components/containers/MainContainer';

// Material UI
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
      <Container maxWidth={false} component="header" className="appHeader">
        <h1>React Movies App</h1>
      </Container>
      <MainContainer />
    </Container>
  );
}

export default App;
