import React, {forwardRef, useImperativeHandle, useState} from "react";
import styled from "styled-components";
import { activateNextItemOnList, activatePrevItemOnList } from "../../services/input.service";
import Logo from "../../components/Logo/Logo";
import Icon from "../../components/Icon/Icon";

const Highlights = forwardRef(({ exit, active }, ref) => {
    const initialControls = [
        {
            label: 'Assista',
            icon: 'play',
            active: true
        }, {
            label: 'Veja mais'
        }
    ];

    const [controls, setControls] = useState(initialControls);

    useImperativeHandle(ref, () => ({
        handlerKeyPressed
    }));

    const handlerKeyPressed = (direction) => {
        let result = [];

        switch (direction) {
            case 'left':
                result = activatePrevItemOnList(controls);
                break;
            case 'right':
                result = activateNextItemOnList(controls);
                break;
            case 'bottom':
                exit('bottom', true);
                break;
            default: break;
        }

        commitChanges({ result, direction });
    };

    const commitChanges = ({ result, direction }) => {
        const [newLlist, endOfList] = result;

        if(endOfList) {
            exit(direction);
        } else if(newLlist) {
            setControls(newLlist);
        }
    };

    return <Wrapper >
        <Logo/>
        <Subtitle>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</Subtitle>

        <Controls>
            { controls.map((control, index) =>
                <Control
                    key={index}
                    active={ control.active }
                    componentActive={ active }
                >
                    { control.icon &&
                        <PlayIcon
                            name={ control.icon }
                            active={ control.active }
                            componentActive={ active }
                        />
                    }

                    { control.label }
                </Control>
            )}
        </Controls>
    </Wrapper>;
});

const Wrapper = styled.div`
  margin-bottom: 50px;
  padding: 0 40px;
`;

const Subtitle = styled.h2`
  color: #fff;
`;

const Controls = styled.div``;

const Control = styled.button`
  font-size: 16px;
  color: ${ props => props.active && props.componentActive ? '#707070' : '#cacfcd' };
  padding: 10px 30px;
  background-color: ${ props => props.active && props.componentActive ? '#fff' : 'transparent' };
  border: 1px solid #cacfcd;
  border-radius: 3px;
  margin-right: 15px;
  transition: all .3s ease;
  font-weight: bold;
`;

const PlayIcon = styled(Icon)`
  fill: ${ props => props.active && props.componentActive ? '#707070' : '#cacfcd' };
  height: 15px;
  margin-right: 5px;
  width: 15px;
  transition: fill .2s linear;
  position: relative;
  left: -3px;
  top: 2px;
`;

export default Highlights;
