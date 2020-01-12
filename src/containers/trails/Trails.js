import React, {forwardRef, useImperativeHandle, useState} from "react";
import styled from "styled-components";
import TrailItem from "../../components/trail-item/TrailItem";
import { activateNextItemOnList, activatePrevItemOnList } from "../../services/input.service";

const Trails = forwardRef(({ exit, active }, ref) => {
    const initialTrail = [
        {
            name: 'Sala de Estar',
            cover: 'https://revistanews.com.br/wp-content/uploads/2018/01/sofa-bbb.jpg',
            active: true
        },
        {
            name: 'Varanda',
            cover: 'http://g1.globo.com/BBB10/Fotos/foto/0,,34639160-EXH,00.jpg'
        }, {
            name: 'Piscina',
            cover: 'http://g1.globo.com/BBB10/Fotos/foto/0,,34639207-EXH,00.jpg'
        }, {
            name: 'Academia',
            cover: 'http://g1.globo.com/BBB10/Fotos/foto/0,,34639283-EXH,00.jpg'
        }, {
            name: 'Chuveiro',
            cover: 'https://cdn-ofuxico.akamaized.net/img/upload/noticias/2015/02/25/231235_36.jpg'
        }
    ];

    const [trails, setTrail] = useState(initialTrail);
    const [trailPosition, setTrailPosition] = useState(0);

    useImperativeHandle(ref, () => ({
        handlerKeyPressed(direction) {
            let result = [];

            switch (direction) {
                case 'top':
                    exit('top');
                    break;
                case 'left':
                    result = activatePrevItemOnList(trails);
                    break;
                case 'right':
                    result = activateNextItemOnList(trails);
                    break;
                default: break;
            }

            const [newLlist, endOfList] = result;

            if(endOfList) {
                exit(direction);
            } else if(newLlist) {
                setTrail(newLlist);
                switch (direction) {
                    case 'left':
                        setTrailPosition(trailPosition + 360);
                        break;
                    case 'right':
                        setTrailPosition(trailPosition - 360);
                        break;
                }

            }
        }
    }));

    return (
        <Wrapper active={ active }>
            <Top>
                <Title active={ active }>Big Brother Brasil</Title>
                <SubTitle active={ active }>{ trails.find(trail => trail.active).name }</SubTitle>
            </Top>

            <Bottom>
                <TrailTitle>Agora no BBB</TrailTitle>
                <Frame/>

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

const Wrapper = styled.div``;

const Top = styled.div``;

const Bottom = styled.div`
  overflow: hidden;
`;

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
  padding: 0;
`;

const Trail = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  transform: translateX(${ props => props.position }px);
  transition: all .3s ease;
`;

const Frame = styled.div`
  border: 3px solid #fff;
  width: 334px;
  height: 194px;
  position: absolute;
  z-index: 1;
  background: url(https://maquinadeaprovacao.com.br/wp-content/uploads/2018/09/play-icon-300x300.png) center center no-repeat;
  background-size: 50px;
`;

const Item = styled.li`
  margin: 0 20px 0 0;
  padding: 0;
`;

export default Trails;
