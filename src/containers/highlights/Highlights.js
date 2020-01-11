import React from "react";
import styled from "styled-components";

function Highlights() {
    return (
        <Wrapper>
            <Logo>BBB</Logo>
            <Subtitle>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</Subtitle>
            <Controls>
                <Control>Assista</Control>
                <Control>Veja mais</Control>
            </Controls>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
const Logo = styled.h1``;
const Subtitle = styled.h2``;
const Controls = styled.div``;
const Control = styled.button``;

export default Highlights;
