import React, { useRef, useState, useEffect } from "react";
import { getArrowKeyPressed } from "../../services/input.service";
import styled from "styled-components";
import Highlights from "../Highlights/Highlights";
import Trails from "../Trails/Trails";
import Menu from "../Menu/Menu";
import { ContainerFactory as ContainerInitial } from "../../factory/factory";

function Home() {
    const highlightsRef = useRef();
    const menuRef = useRef();
    const trailsRef = useRef();
    const wrapperRef = useRef();

    const initialContainers = [
        new ContainerInitial({
            alias: 'highlights',
            active: true,
            ref: highlightsRef,
            bottom: 'trail',
            left: 'menu'
        }),
        new ContainerInitial({
            alias: 'menu',
            ref: menuRef,
            right: ['highlights', 'trail']
        }),
        new ContainerInitial({
            alias: 'trail',
            ref: trailsRef,
            top: 'highlights',
            left: 'menu'
        })
    ];

    const [containers, setContainers] = useState(initialContainers);
    const [containerActive, setcontainerActive] = useState(initialContainers.find(container => container.active));
    const [mainBackground, setMainBackground] = useState();

    useEffect(() => {
        wrapperRef.current.focus();
    }, []);

    useEffect(() => {
        setcontainerActive(containers.find(container => container.active));
    }, [containers]);

    const handlerKeyPress = (event) => {
        const direction = getArrowKeyPressed(event);
        containerActive.ref.current.handlerKeyPressed(direction);
        event.preventDefault();
    };

    const exit = (direction, shouldHide) => {
        const nextContainerAlias = getNextContainerAlias({ direction });
        const updatedContainerStatus = nextContainerAlias && containers.map(container => ({
            ...container,
            hide: getHideProperty({container, shouldHide, nextContainerAlias}),
            active: container.alias === nextContainerAlias
        }));

        if(nextContainerAlias) {
            setContainers(updatedContainerStatus);
            const active = updatedContainerStatus.find(container => container.active);
            active.ref.current.init && active.ref.current.init(direction);
        }
    };

    const getHideProperty = ({container, shouldHide, nextContainerAlias}) => {
        return (container.alias === containerActive.alias && typeof shouldHide !== 'undefined')
            ? shouldHide
            : (container.alias === nextContainerAlias)
                ? false
                : container.hide;
    };

    const getNextContainerAlias = ({ direction }) => {
        const nextDirection = containerActive[direction];

        return (typeof nextDirection === 'string')
            ? nextDirection
            : (typeof nextDirection === 'object')
                ? containers.find(container =>
                    !container.hide && nextDirection.indexOf(container.alias) > -1
                ).alias
                : '';
    };

    return <Wrapper
        onKeyDown={ handlerKeyPress }
        tabIndex="0"
        cover={ mainBackground }
        ref={ wrapperRef }
    >
        <Aside>
            <Menu
                ref={ menuRef }
                exit={ exit }
                active={ containerActive.alias === 'menu' }
            />
        </Aside>

        <Main
            hideHighlights={ containers.find(container => container.alias === 'highlights').hide }
        >
            <Highlights
                ref={ highlightsRef }
                exit={ exit }
                active={ containerActive.alias === 'highlights' }
            />

            <Trails
                ref={ trailsRef }
                exit={ exit }
                active={ containerActive.alias === 'trail' }
                setMainBackground={ setMainBackground }
            />
        </Main>
    </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #000 url(${ props => props.cover ? props.cover : 'https://s2.glbimg.com/CC4G7Z6ghe8pwTv_p4Lyo4d5g2g=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/q/j/DLfVsaS66iuFucjQm8fQ/bbb19-programa-web.jpg' }) center center no-repeat;
  background-size: cover;
  align-items: stretch;
  height: 100%;
`;

const Aside = styled.aside`
  position: fixed;
  height: 100%;
  z-index: 1;
`;



const Main = styled.main`
  position: relative;
  left: 80px;
  height: 100%;
  z-index: 0;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  transform: translateY(${ props => props.hideHighlights ? '-300px' : '0' });
  transition: transform .3s ease;
`;

export default Home;
