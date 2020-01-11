import React, {forwardRef, useImperativeHandle, useState} from "react";
import styled from "styled-components";
import TrailItem from "../../components/trail-item/TrailItem";
import { activateNextItemOnList, activatePrevItemOnList, getArrowKeyPressed } from "../../services/input.service";

const Trails = forwardRef((props, ref) => {
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
            switch (direction) {
                case 'top':
                    // exti();
                    break;
                case 'left':
                    setTrail(activatePrevItemOnList(trail));
                    break;
                case 'right':
                    setTrail(activateNextItemOnList(trail));
                    break;
            }
        }
    }));

    return (
        <Wrapper>
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

const Wrapper = styled.div``;
const Title = styled.div``;
const Trail = styled.ul``;
const Item = styled.li``;

export default Trails;
