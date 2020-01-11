import React, { useState } from "react";
import styled from "styled-components";
import { getArrowKeyPressed, activatePrevItemOnList, activateNextItemOnList } from '../../services/input.service';

function Menu({goToRightContainer, isComponentActive}) {
    const initialMenu = [
        {
            label: 'Buscar'
        },
        {
            label: 'Início',
            active: false
        },
        {
            label: 'Agora na Globo'
        },
        {
            label: 'Categorias'
        },
        {
            label: 'Minha Conta',
            active: true
        }
    ];

    const [menu, setMenu] = useState(initialMenu);

    const handlerKeyPress = (event) => {
        const direction = getArrowKeyPressed(event);
        if (!isComponentActive) return;

        switch (direction) {
            case 'top':
                setMenu(activatePrevItemOnList(menu));
                break;
            case 'bottom':
                setMenu(activateNextItemOnList(menu));
                break;
            case 'right':
                goToRightContainer();
                break;
        }

        event.preventDefault();
    };

    return (
        <Wrapper>
            <List
                onKeyDown={handlerKeyPress}
                tabIndex="0"
            >
                {menu.map((item, index) =>
                    <Itens key={index}>
                        {item.active ? 'ativo' : 'inativo'}
                        <Link href="#">{item.label}</Link>
                    </Itens>
                )}
            </List>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
const List = styled.ul``;
const Itens = styled.li``;
const Link = styled.a``;

export default Menu;
