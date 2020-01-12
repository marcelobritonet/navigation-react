import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { activatePrevItemOnList, activateNextItemOnList } from '../../services/input.service';

const Menu = forwardRef(({ exit, active }, ref) => {
    const initialMenu = [
        {
            label: 'Buscar',
            icon: '../../assets/svgs/search-24px.svg',
            active: true,
        },
        {
            label: 'Início',
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

    return <Wrapper containerActive={ active }>
        <List>
            { menu.map((item, index) =>
                <Itens
                    key={ index }
                    itemActive={ item.active }
                    containerActive={ active }
                >
                    <Icon
                        src={ item.icon }
                        itemActive={ item.active }
                        containerActive={ active }
                    />

                    <Link
                        href="#"
                        itemActive={ item.active }
                        containerActive={ active }
                    >{ item.label }</Link>
                </Itens>
            )}
        </List>
    </Wrapper>;
});

const Wrapper = styled.div`
  background-color: #000;
  height: 100%;
  width: ${props => props.containerActive ? '275px' : '80px'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease .3s;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Itens = styled.li`
  list-style-type: none;
  margin: 0;
  position: relative;
  background-color: ${ props => props.itemActive && props.containerActive  ? '#fff' : 'transparent' };
  display: flex;
  align-items: center;
  padding: 15px 30px;
  height: 30px;
  width: calc(275px - 60px);
`;

const Link = styled.a`
  color: ${ props => props.itemActive ? '#333' : '#fff' };
  text-decoration: none;
  visibility: ${ props => props.containerActive ? 'visible' : 'hidden' };
  opacity: ${ props => props.containerActive ? '1' : '0' };
  transition: all ease .5s;
`;

const Icon = styled.img`
  height: 15px;
  width: 15px;
  background-color: ${ props => props.itemActive ? props.containerActive ? '#000' : '#ccc' : '#333' };
  margin-right: 25px;
`;

export default Menu;
