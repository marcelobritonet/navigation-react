import React, { useState } from "react";
import styled from "styled-components";
import { activateNextItemOnList, activatePrevItemOnList, getArrowKeyPressed } from "../../services/input.service";

function Highlights({ goToBottomContainer, isComponentActive }) {
    const initialControls = [
        {
            label: 'Assista',
            cover: '',
            active: true
        }, {
            label: 'Veja mais',
            cover: ''
        }
    ];

    const [controls, setControls] = useState(initialControls);

    const handlerKeyPress = (event) => {
        const direction = getArrowKeyPressed(event);
        if (!isComponentActive) return;

        switch (direction) {
            case 'left':
                setControls(activatePrevItemOnList(controls));
                break;
            case 'right':
                setControls(activateNextItemOnList(controls));
                break;
            case 'bottom':
                goToBottomContainer();
                break;
        }

        event.preventDefault();
    };

    return (
        <Wrapper>
            <Logo>BBB</Logo>
            <Subtitle>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</Subtitle>
            <Controls
                onKeyDown={ handlerKeyPress }
                tabIndex="0"
            >
                { controls.map((control, index) =>
                    <Control key={index}>{ control.label } / { control.active ? 'ativo' : 'inativo'}</Control>
                )}
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
