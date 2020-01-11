import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { activatePrevItemOnList, activateNextItemOnList } from '../../services/input.service';

const Menu = forwardRef((props, ref) => {
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

    useImperativeHandle(ref, () => ({
        handlerKeyPressed(direction) {
            switch (direction) {
                case 'top':
                    setMenu(activatePrevItemOnList(menu));
                    break;
                case 'bottom':
                    setMenu(activateNextItemOnList(menu));
                    break;
                case 'right':
                    // exit();
            }
        }
    }));

    return <Wrapper>
        <List>
            {menu.map((item, index) =>
                <Itens key={index}>
                    {item.active ? 'ativo' : 'inativo'}
                    <Link href="#">{item.label}</Link>
                </Itens>
            )}
        </List>
    </Wrapper>;
});

const Wrapper = styled.div``;
const List = styled.ul``;
const Itens = styled.li``;
const Link = styled.a``;

export default Menu;
