import React from "react";
import styled from "styled-components";

function Menu() {
    const menu = ['Buscar', 'Início', 'Agora na Globo', 'Categorias', 'Minha Conta'];
    // inserir imagens e ids no formato de objeto

    return (
        <Wrapper>
            <List>
                { menu.map(item =>
                    <Itens key={ item }>
                        <Link href="#">{ item }</Link>
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
