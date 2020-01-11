import React, { useRef, useState } from "react";
import { getArrowKeyPressed } from "../../services/input.service";
import styled from "styled-components";
import Highlights from "../highlights/Highlights";
import Trails from "../trails/Trails";
import Menu from "../menu/Menu";

function Home() {
    const highlightsRef = useRef();
    const menuRef = useRef();
    const trailsRef = useRef();

    const initialContainers = [
        {
            alias: 'highlights',
            active: true,
            ref: highlightsRef,
            bottom: 'trail',
            left: 'menu'
        },
        {
            alias: 'menu',
            active: false,
            ref: menuRef,
            // right: ['highlights', 'trail']
            right: 'highlights'
        },
        {
            alias: 'trail',
            active: false,
            ref: trailsRef,
            top: 'highlights',
            left: 'menu'
        }
    ];

    const [containers, setContainers] = useState(initialContainers);

    const handlerKeyPress = (event) => {
        const ref = containers.find(component => component.active).ref;
        const direction = getArrowKeyPressed(event);
        ref.current.handlerKeyPressed(direction);
        event.preventDefault();
    };

    const exit = (direction) => {
        const actualContainer = containers.find(container => container.active);
        const nextContainer = actualContainer[direction];
        const updatedContainerStatus = nextContainer && containers.map(container => ({
            ...container,
            active: container.alias === nextContainer
        }));

        if(nextContainer) {
            setContainers(updatedContainerStatus);
        }
    };

    return <HomeWrapper
        onKeyDown={handlerKeyPress}
        tabIndex="0"
    >
        <Logo/>
        <Highlights
            ref={ highlightsRef }
            exit={ exit }
        />
        <Menu
            ref={ menuRef }
            exit={ exit }
        />
        <Trails
            ref={ trailsRef }
            exit={ exit }
        />
    </HomeWrapper>;
}

const HomeWrapper = styled.div``;
const Logo = styled.div``;

export default Home;
