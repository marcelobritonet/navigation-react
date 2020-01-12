import React from 'react';
import styled from "styled-components";
import Home from "./containers/home/Home";

function App() {
  return <Wrapper>
    <Home/>
  </Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export default App;
