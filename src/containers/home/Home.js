import React from "react";
import styled from "styled-components";
import Highlights from "../highlights/Highlights";
import Trails from "../trails/Trails";
import Menu from "../menu/Menu";

function Home() {
    const components = {
        highlights: {
            active: true
        },
        menu: {
            active: true
        },
        trail: {
            active: true
        }
    };

    const right = () => {
        console.log('right');
    };

    const top = () => {
        console.log('top');
    };

    const bottom = () => {
        console.log('bottom');
    };

    return (
        <HomeWrapper>
            <Logo/>
            <Highlights
                goToBottomContainer={ bottom }
                isComponentActive={ components.highlights.active }
            />
            <Menu
                goToRightContainer={ right }
                isComponentActive={ components.menu.active }
            />
            <Trails
                goToTopContainer={ top }
                isComponentActive={ components.trail.active }
            />
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div``;
const Logo = styled.div``;

export default Home;
