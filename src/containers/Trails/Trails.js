import React, {forwardRef, useImperativeHandle, useState} from "react";
import styled from "styled-components";
import TrailItem from "../../components/TrailItem/TrailItem";
import { activateNextItemOnList, activatePrevItemOnList } from "../../services/input.service";
import { TrailsFactory as TrailsInitial } from '../../factory/factory';

const Trails = forwardRef(({ exit, active, setMainBackground }, ref) => {
    const initialTrail = [
        new TrailsInitial({
            name: 'Sala de Estar',
            cover: 'https://revistanews.com.br/wp-content/uploads/2018/01/sofa-bbb.jpg',
            active: true
        }),
        new TrailsInitial({
            name: 'Varanda',
            cover: 'http://g1.globo.com/BBB10/Fotos/foto/0,,34639160-EXH,00.jpg'
        }),
        new TrailsInitial({
            name: 'Piscina',
            cover: 'http://g1.globo.com/BBB10/Fotos/foto/0,,34639207-EXH,00.jpg'
        }),
        new TrailsInitial({
            name: 'Academia',
            cover: 'http://g1.globo.com/BBB10/Fotos/foto/0,,34639283-EXH,00.jpg'
        }),
        new TrailsInitial({
            name: 'Chuveiro',
            cover: 'https://cdn-ofuxico.akamaized.net/img/upload/noticias/2015/02/25/231235_36.jpg'
        })
    ];

    const [trails, setTrail] = useState(initialTrail);
    const [trailPosition, setTrailPosition] = useState(40);

    useImperativeHandle(ref, () => ({
        handlerKeyPressed,
        init
    }));

    const handlerKeyPressed = (direction) => {
        let changes = [];

        switch (direction) {
            case 'top':
                exit('top');
                setMainBackground();
                break;
            case 'left':
                changes = activatePrevItemOnList(trails);
                break;
            case 'right':
                changes = activateNextItemOnList(trails);
                break;
            default: break;
        }

        commitChanges({ direction, changes });
    };

    const init = () => {
        setMainBackground(trails.find(item => item.active).cover);
    };

    const commitChanges = ({ direction, changes }) => {
        const [newLlist, endOfList] = changes;

        if(endOfList) {
            exit(direction);
        } else if(newLlist) {
            setTrail(newLlist);
            setMainBackground(newLlist.find(item => item.active).cover);
            switch (direction) {
                case 'left':
                    setTrailPosition(trailPosition + 360);
                    break;
                case 'right':
                    setTrailPosition(trailPosition - 360);
                    break;
                default: break;
            }

        }
    };

    return (
        <Wrapper active={ active }>
            <Top>
                <Title active={ true }>Big Brother Brasil</Title>
                <SubTitle active={ true }>{ trails.find(trail => trail.active).name }</SubTitle>
            </Top>

            <Bottom>
                <TrailTitle>Agora no BBB</TrailTitle>
                <Frame active={ active }/>

                <Trail position={ trailPosition }>
                    { trails.map((item, index) =>
                        <Item key={index}
                              active={ item.active }
                        >
                            <TrailItem
                                name={ item.name }
                                cover={ item.cover }
                            />
                        </Item>
                    )}
                </Trail>
            </Bottom>
        </Wrapper>
    );
});

const Wrapper = styled.div`
  padding-top: 50px;
`;

const Top = styled.div`
  padding: 0 40px;
`;

const Bottom = styled.div``;

const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  display: ${ props => props.active ? 'block' : 'none' };
`;

const SubTitle = styled.h4`
  color: #fff;
  display: ${ props => props.active ? 'block' : 'none' };
  font-size: 26px;
  margin: 0;
`;

const TrailTitle = styled.h5`
  font-size: 16px;
  color: #fff;
  margin: 0 0 25px 0;
  padding: 0 40px;
`;

const Trail = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  transform: translateX(${ props => props.position }px);
  transition: all .5s ease;
`;

const Frame = styled.div`
  border: 3px solid ${ props => props.active ? '#fff' : 'transparent' };
  width: 334px;
  height: 194px;
  position: absolute;
  z-index: 1;
  background: url(${ props => props.active ? 'https://maquinadeaprovacao.com.br/wp-content/uploads/2018/09/play-icon-300x300.png' : 'none' }) center center no-repeat;
  background-size: 50px;
  left: 40px;
`;

const Item = styled.li`
  margin: 0 20px 0 0;
  padding: 0;
`;

export default Trails;
