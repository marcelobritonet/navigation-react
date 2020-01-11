import React, {useRef} from "react";
import { getArrowKeyPressed } from "../../services/input.service";
import styled from "styled-components";
import Highlights from "../highlights/Highlights";
import Trails from "../trails/Trails";
import Menu from "../menu/Menu";

function Home() {
    // const highlightsRef = useRef();
    const menuRef = useRef();
    // const trailsRef = useRef();

    const components = [
        {
            alias: 'highlights',
            active: false
        },
        {
            alias: 'menu',
            active: true,
            ref: menuRef
        },
        {
            alias: 'trail',
            active: false
        }
    ];

    const handlerKeyPress = (event) => {
        const ref = components.find(component => component.active).ref;
        const direction = getArrowKeyPressed(event);
        ref.current.handlerKeyPress(direction);
        event.preventDefault();
    };

    return <HomeWrapper
        onKeyDown={handlerKeyPress}
        tabIndex="0"
    >
        <Logo/>
        <Highlights
            // ref={ highlightsRef }
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
