import React from "react";
import styled from "styled-components";

function TrailItem({ name, cover }) {
    return (
        <Wrapper>
            <Title>Realities</Title>
            <Subtitle>{ name }</Subtitle>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
const Title = styled.h3``;
const Subtitle = styled.h4``;

export default TrailItem;
