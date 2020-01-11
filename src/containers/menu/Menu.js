import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { activatePrevItemOnList, activateNextItemOnList } from '../../services/input.service';

const Menu = forwardRef(({ exit, active }, ref) => {
    const initialMenu = [
        {
            label: 'Buscar',
            icon: '../../assets/svgs/search-24px.svg'
        },
        {
            label: 'Início',
            active: true,
            icon: '../../assets/svgs/search-24px.svg'
        },
        {
            label: 'Agora na Globo',
            icon: '../../assets/svgs/search-24px.svg'
        },
        {
            label: 'Categorias',
            icon: '../../assets/svgs/search-24px.svg'
        },
        {
            label: 'Minha Conta',
            icon: '../../assets/svgs/search-24px.svg'
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
                default: break;
            }

            const [newLlist, endOfList] = result;

            if(endOfList) {
                exit(direction);
            } else if(newLlist) {
                setMenu(newLlist);
            }
        }
    }));

    return <Wrapper active={ active }>
        <List>
            { menu.map((item, index) =>
                <Itens
                    key={ index }
                    icon={ item.icon }
                    active={ item.active }
                >
                    <Link href="#"
                          active={ item.active }
                    >{ item.label }</Link>
                </Itens>
            )}
        </List>
    </Wrapper>;
});

const Wrapper = styled.div`
  background-color: #000;
  width: ${props => props.active ? '200px' : '100px'} ;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  
`;

const Itens = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 25px;
  position: relative;
  background-color: ${ props => props.active ? '#fff' : 'transparent' };
  
  &:before {
    background: blue url(${ props => props.icon }) center center no-repeat;
    content: '';
    display: block;
    position: absolute;
    height: 15px;
    width: 15px;
    left: 0;
    top: 3px
  }
`;

const Link = styled.a`
  color: ${ props => props.active ? '#333' : '#fff' };
  text-decoration: none;
`;

export default Menu;
