import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <Title>Título</Title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
    color: green;
`;

export default App;
