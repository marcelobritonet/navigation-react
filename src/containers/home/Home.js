import React, { useRef, useState} from "react";
import { getArrowKeyPressed } from "../../services/input.service";
import styled from "styled-components";
import Highlights from "../highlights/Highlights";
import Trails from "../trails/Trails";
import Menu from "../menu/Menu";

function Home() {
    const highlightsRef = useRef();
    const menuRef = useRef();
    const trailsRef = useRef();

    const initialContainers = [
        {
            alias: 'highlights',
            active: true,
            ref: highlightsRef,
            bottom: 'trail',
            left: 'menu'
        },
        {
            alias: 'menu',
            active: false,
            ref: menuRef,
            // right: ['highlights', 'trail']
            right: 'highlights'
        },
        {
            alias: 'trail',
            active: false,
            ref: trailsRef,
            top: 'highlights',
            left: 'menu'
        }
    ];

    const [containers, setContainers] = useState(initialContainers);

    const handlerKeyPress = (event) => {
        const ref = containers.find(component => component.active).ref;
        const direction = getArrowKeyPressed(event);
        ref.current.handlerKeyPressed(direction);
        event.preventDefault();
    };

    const exit = (direction) => {
        const actualContainer = containers.find(container => container.active);
        const nextContainer = actualContainer[direction];
        const updatedContainerStatus = nextContainer && containers.map(container => ({
            ...container,
            active: container.alias === nextContainer
        }));

        if(nextContainer) {
            setContainers(updatedContainerStatus);
        }
    };

    return <Wrapper
        onKeyDown={handlerKeyPress}
        tabIndex="0"
    >
        <Aside>
            <Menu
                ref={ menuRef }
                exit={ exit }
                active={ containers.find(container => container.active).alias === 'menu' }
            />
        </Aside>

        <Container>
            <Main>
                <HighlightsWrapper
                    componentActive={ containers.find(container => container.active).alias }
                >
                    <Highlights
                        ref={ highlightsRef }
                        exit={ exit }
                        active={ containers.find(container => container.active).alias === 'highlights' }
                    />
                </HighlightsWrapper>

                <Trails
                    ref={ trailsRef }
                    exit={ exit }
                    active={ containers.find(container => container.active).alias === 'trail' }
                />
            </Main>
        </Container>
    </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff url(https://s2.glbimg.com/CC4G7Z6ghe8pwTv_p4Lyo4d5g2g=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/q/j/DLfVsaS66iuFucjQm8fQ/bbb19-programa-web.jpg) top center no-repeat;
  background-size: cover;
  align-items: stretch;
  height: 100%;
`;

const Aside = styled.aside`
  position: fixed;
  height: 100%;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 80px);
  position: relative;
  left: 80px;
  height: 100%;
  z-index: 0;
`;

const Main = styled.main`
  width: 90%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;

const HighlightsWrapper = styled.div`
  display: ${ props => props.componentActive === 'trail' ? 'none' : 'block' };
  margin-bottom: 50px;
`;

export default Home;
