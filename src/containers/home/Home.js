import React from "react";
import styled from "styled-components";
import Highlights from "../highlights/Highlights";
import Trails from "../trails/Trails";
import Menu from "../menu/Menu";

function Home() {

    return (
        <HomeWrapper>
            <Logo/>
            <Highlights/>
            <Menu/>
            <Trails/>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div``;
const Logo = styled.div``;

export default Home;
