import React, {forwardRef, useImperativeHandle, useState} from "react";
import styled from "styled-components";
import TrailItem from "../../components/trail-item/TrailItem";
import { activateNextItemOnList, activatePrevItemOnList, getArrowKeyPressed } from "../../services/input.service";

const Trails = forwardRef(({ exit, active }, ref) => {
    const initialTrail = [
        {
            name: 'Sala de Estar',
            cover: '',
            active: true
        }, {
            name: 'Piscina',
            cover: ''
        }, {
            name: 'Academia',
            cover: ''
        }, {
            name: 'Varanda',
            cover: ''
        }
    ];

    const [trail, setTrail] = useState(initialTrail);

    useImperativeHandle(ref, () => ({
        handlerKeyPressed(direction) {
            let result = [];

            switch (direction) {
                case 'top':
                    exit('top');
                    break;
                case 'left':
                    result = activatePrevItemOnList(trail);
                    break;
                case 'right':
                    result = activateNextItemOnList(trail);
                    break;
                default: break;
            }

            const [newLlist, endOfList] = result;

            if(endOfList) {
                exit(direction);
            } else if(newLlist) {
                setTrail(newLlist);
            }
        }
    }));

    return (
        <Wrapper active={ active }>
            <Title>Big Brother Brasil</Title>
            <Trail>
                {trail.map((item, index) =>
                    <Item key={index}>
                        {item.active ? 'ativo' : 'inativo'}
                        <TrailItem
                            name={item.name}
                            cover={item.cover}
                        />
                    </Item>
                )}
            </Trail>
        </Wrapper>
    );
});

const Wrapper = styled.div`
  border: 1px solid ${props => props.active ? '#000' : 'transparent'}
`;
const Title = styled.div``;
const Trail = styled.ul``;
const Item = styled.li``;

export default Trails;
