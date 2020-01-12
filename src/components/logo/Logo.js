import React from "react";
import styled from "styled-components";

function Logo() {
    return <Image/>
}

const Image = styled.div`
  background: url(https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-1.png) center center no-repeat;
  background-size: contain;
  width: 200px;
  height: 100px;
  -webkit-filter: invert(100%); /* Safari/Chrome */
  filter: invert(100%);
`;

export default Logo;
