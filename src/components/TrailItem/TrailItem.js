import React from "react";
import styled from "styled-components";

function TrailItem({ name, cover }) {
    return (
        <Wrapper cover={ cover }>
            <Category>Realities</Category>
            <Subtitle>{ name }</Subtitle>
            <Mask/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: calc(100% - 40px);
  min-width: 300px;
  height: 160px;
  background: url(${ props => props.cover }) center center no-repeat;
  background-size: cover;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(79,79,82,1) 0%, rgba(46,46,46,1) 0%, rgba(255,255,255,0) 100%);
`;

const Category = styled.h3`
  margin: 0;
  padding: 0;
  color: #fff;
  z-index: 1;
  text-transform: uppercase;
  font-size: 12px;
`;

const Subtitle = styled.h4`
  margin: 0;
  padding: 0;
  color: #fff;
  z-index: 1;
`;

export default TrailItem;
