import React, {useRef} from "react";
import { getArrowKeyPressed } from "../../services/input.service";
import styled from "styled-components";
import Highlights from "../highlights/Highlights";
import Trails from "../trails/Trails";
import Menu from "../menu/Menu";

function Home() {
    const highlightsRef = useRef();
    const menuRef = useRef();
    const trailsRef = useRef();

    const containers = [
        {
            alias: 'highlights',
            active: true,
            ref: highlightsRef,
            bottom: 'trail'
        },
        {
            alias: 'menu',
            active: false,
            ref: menuRef,
            right: ['highlights', 'trail']
        },
        {
            alias: 'trail',
            active: false,
            ref: trailsRef,
            top: 'highlights'
        }
    ];

    const handlerKeyPress = (event) => {
        const ref = containers.find(component => component.active).ref;
        const direction = getArrowKeyPressed(event);
        ref.current.handlerKeyPressed(direction);
        event.preventDefault();
    };

    return <HomeWrapper
        onKeyDown={handlerKeyPress}
        tabIndex="0"
    >
        <Logo/>
        <Highlights
            ref={ highlightsRef }
        />
        <Menu
            ref={menuRef}
        />
        <Trails
            // ref={ trailsRef }
        />
    </HomeWrapper>;
}

const HomeWrapper = styled.div``;
const Logo = styled.div``;

export default Home;
