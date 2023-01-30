import React from 'react';
import Flicking, {ViewportSlot} from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import {AutoPlay, Pagination} from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import Agroenergie from '../resources/clients/agroenergie.png';
import Alteo from '../resources/clients/alteo.png';
import Gazel from '../resources/clients/gazel.webp';
import Elyze from '../resources/clients/elyze.jpeg';
import Ttshipping from '../resources/clients/tt.png';
import styled from "styled-components";
import Div, {handleDragStart} from "./styledComponents";
import './fonts.css'
// import Hgk from '../../resources/tt.png';

const ColorDiv = styled(Div)`
  background: #fdfdfd;
  box-shadow: 0 0 8px #000000;
  padding-top: 1% ;
`

const Img = styled.img`
  height: 200px;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 33%;
  margin-bottom: 2%;
`

const CarouselItem = React.forwardRef(({src, alt}, ref) => (
    <Item ref={ref}>
        <Img src={src} onDragStart={handleDragStart} alt={alt}/>
    </Item>))

class Clients extends React.Component {
    render() {
        const ref0 = React.createRef()
        const ref1 = React.createRef()
        const ref2 = React.createRef()
        const ref3 = React.createRef()
        const ref4 = React.createRef()
        const plugin = [new Pagination({type: 'scroll'}), new AutoPlay({
            duration: 6000,
            animationDuration: 1000,
            stopOnHover: true,
            delayAfterHover: 100
        })]
        return (<ColorDiv id={"clients"}>
            <h2>Nos Clients</h2>
            <Flicking plugins={plugin} circular={true} hideBeforeInit={true} align={"prev"} circularFallback={"bound"}
                      renderOnlyVisible={true}>
                <CarouselItem ref={ref0} src={Agroenergie} alt={"AgroEnergie"}/>
                <CarouselItem ref={ref1} src={Alteo} alt={"Alteo"}/>
                <CarouselItem ref={ref2} src={Elyze} alt={"Elyze Energie"}/>
                <CarouselItem ref={ref3} src={Gazel} alt={"Gazel Enery"}/>
                <CarouselItem ref={ref4} src={Ttshipping} alt={"T&T Shipping"}/>
                <ViewportSlot>
                    <div className="flicking-pagination"></div>
                </ViewportSlot>
                {/*    https://hgkshipping.de/en/*/}
            </Flicking>
        </ColorDiv>);
    }

}

export default Clients;