import React, {forwardRef, useImperativeHandle, useState} from "react";
import styled from "styled-components";
import { activateNextItemOnList, activatePrevItemOnList, getArrowKeyPressed } from "../../services/input.service";

const Highlights = forwardRef(({ exit }, ref) => {
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

    useImperativeHandle(ref, () => ({
        handlerKeyPressed(direction) {
            let result = [];

            switch (direction) {
                case 'left':
                    result = activatePrevItemOnList(controls);
                    break;
                case 'right':
                    result = activateNextItemOnList(controls);
                    break;
                case 'bottom':
                    exit('bottom');
                    break;
            }

            const [newLlist, endOfList] = result;

            if(endOfList) {
                exit(direction);
            } else if(newLlist) {
                setControls(newLlist);
            }
        }
    }));

    return <Wrapper>
        <Logo>BBB</Logo>
        <Subtitle>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</Subtitle>
        <Controls>
            { controls.map((control, index) =>
                <Control key={index}>{ control.label } / { control.active ? 'ativo' : 'inativo'}</Control>
            )}
        </Controls>
    </Wrapper>;
});

const Wrapper = styled.div``;
const Logo = styled.h1``;
const Subtitle = styled.h2``;
const Controls = styled.div``;
const Control = styled.button``;

export default Highlights;
