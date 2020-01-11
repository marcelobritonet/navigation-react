import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { activatePrevItemOnList, activateNextItemOnList } from '../../services/input.service';

const Menu = forwardRef(({ exit }, ref) => {
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
            let result = [];

            switch (direction) {
                case 'top':
                    result = activatePrevItemOnList(menu);
                    break;
                case 'bottom':
                    result = activateNextItemOnList(menu);
                    break;
                case 'right':
                    exit('right');
                    break;
            }

            const [newLlist, endOfList] = result;

            if(endOfList) {
                exit(direction);
            } else if(newLlist) {
                setMenu(newLlist);
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
