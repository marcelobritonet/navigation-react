import React from "react";
import styled from "styled-components";
import TrailItem from "../../components/trail-item/TrailItem";

function Trails() {
    const items = [
        {
            name: 'Sala de Estar',
            cover: ''
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

    return (
        <Wrapper>
            <Title>Big Brother Brasil</Title>
            <Trail>
                {items.map((item, index) =>
                    <Item key={index}>
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
