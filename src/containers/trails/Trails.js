import React, { useState } from "react";
import styled from "styled-components";
import TrailItem from "../../components/trail-item/TrailItem";
import { activateNextItemOnList, activatePrevItemOnList, getArrowKeyPressed } from "../../services/input.service";

function Trails({isComponentActive, goToTopContainer}) {
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

    const handlerKeyPress = (event) => {
        const direction = getArrowKeyPressed(event);
        if (!isComponentActive) return;

        switch (direction) {
            case 'top':
                goToTopContainer();
                break;
            case 'left':
                setTrail(activatePrevItemOnList(trail));
                break;
            case 'right':
                setTrail(activateNextItemOnList(trail));
                break;
        }

        event.preventDefault();
    };

    return (
        <Wrapper>
            <Title>Big Brother Brasil</Title>
            <Trail
                onKeyDown={handlerKeyPress}
                tabIndex="0"
            >
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
}

const Wrapper = styled.div``;
const Title = styled.div``;
const Trail = styled.ul``;
const Item = styled.li``;

export default Trails;
