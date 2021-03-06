import React from 'react';
import styled from "styled-components";
import Home from "./containers/Home/Home";
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import Svgs from './components/Svg/Svg';

function App() {
  return <Wrapper>
    <GlobalStyle/>
    <Svgs />
    <Home/>
  </Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: absolute;
`;
export default App;
