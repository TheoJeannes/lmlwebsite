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
import {getTexts} from "./helpers";

const ColorDiv = styled(Div)`
  background: #fdfdfd;
  box-shadow: 0 0 8px #000000;
  padding-bottom: 0;
  padding-top: 0;
`

const Img = styled.img`
  height: 9vh;
  @media (max-aspect-ratio: 16/9) and (max-height: 1200px) and (orientation: landscape){
    height: 10vw;
  }
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  margin-bottom: 2%;
  
  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait){
    width: 98%;
  }
  /*Tablette*/
  @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait){
    width: 50%;
  }
  @media (max-aspect-ratio: 16/9) and (max-height: 1200px) and (orientation: landscape){
    width: 50%;
  }
  
`

const Title = styled.h2`
  margin-top: .4em;
  padding-top: .6em;
  margin-bottom: 0;
`

const CarouselItem = React.forwardRef(({src, alt}, ref) => (<Item ref={ref}>
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
            duration: 6000, animationDuration: 1000, stopOnHover: true, delayAfterHover: 100
        })]
        return (<ColorDiv id={"clients"}>
            <Title>{getTexts("Clients",this.props.langCode)["title"]}</Title>
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
            </Flicking>
        </ColorDiv>);
    }

}

export default Clients;