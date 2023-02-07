import React, {createRef, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {handleDragStart} from "./styledComponents";
import Flicking, {ViewportSlot} from "@egjs/react-flicking";
import {Arrow, AutoPlay} from "@egjs/flicking-plugins";
import {en_pdca_detailed, en_pdca_short, imgList} from "../assests";

const ESCAPE_KEYS = ["27", "Escape"];

const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

const StyledDiv = styled.div`

  &.pdca {
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    display: grid;
    margin: auto;
  }

  &.detailed {
    //height: 25vw;
    text-align: justify;
  }

  width: 60%;
  margin: auto;
  //justify-content: space-between;
  //align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  //width: 40%;
`;

const Body = styled.div`
  padding-top: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //padding-bottom: 3%;
  max-height: 80%;
`

const QuarterDiv = styled.div`
  width: 100%;
  max-height: 60vh;
  text-align: center;
  //padding: 5%;
  overflow: auto;
  //margin: auto;
  display: flex;

  &.top-left {
    background-color: #1f6df3;
  }

  &.top-right {
    background-color: red;
  }

  &.bottom-left {
    background-color: #8550b1;
  }

  &.bottom-right {
    background-color: #0bf548;
  }
`

const Text = styled.p`
  align-self: center;
  display: flex;
  align-items: center;
  line-height: 1.5em;
  font-size: 1.5em;
  text-align: justify;
  padding-inline: 15%;
  overflow: auto;
`

const Quarter = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5%;
  height: 25vh;
  width: 25vh;
  cursor: pointer;

  //p {
  //  //white-space: nowrap;
  //  overflow: hidden;
  //  text-overflow: ellipsis;
  //  //position: absolute;
  //  right: 5%;
  //  left: 5%;
  //  margin: 0;
  //}

  &:hover {
    height: 27vh;
    width: 27vh;
    margin: -1vh -1vh;
  }

  &.top-left {
    p {
      bottom: 3%;
      text-align: right;
    }

    text-align: right;
    vert-align: bottom;
    background-color: #1f6df3;
    border-radius: 100% 0 0 0;
    justify-self: end;
    align-self: end;
  }

  &.top-right {
    p {
      bottom: 3%;
      text-align: left;
    }

    text-align: left;
    background-color: red;
    align-self: end;
    border-radius: 0 100% 0 0;
  }

  &.bottom-left {
    p {
      top: 3%;
      text-align: right;
    }

    background-color: #8550b1;
    border-radius: 0 0 0 100%;
    justify-self: end;

  }

  &.bottom-right {
    p {
      top: 3%;
      text-align: left;
    }

    background-color: #0bf548;
    border-radius: 0 0 100% 0;
  }

  &.bottom-right:before {
    float: right;
    shape-outside: polygon(100% 0,
    96% 30%,
    80% 60%,
    60% 80%,
    30% 96%,
    0 100%,
    100% 100%);
  }

  &.top-right:before {
    float: right;
    shape-outside: polygon(0 0,
    30% 4%,
    60% 20%,
    80% 40%,
    96% 70%,
    100% 100%,
    100% 0);
  }

  &.top-left:before {
    float: left;
    shape-outside: polygon(0 0,
    100% 0,
    70% 4%,
    40% 20%,
    20% 40%,
    4% 70%,
    0 100%);
  }

  &.bottom-left:before {
    float: left;
    shape-outside: polygon(0 0,
    4% 30%,
    20% 60%,
    40% 80%,
    70% 96%,
    100% 100%,
    0 100%);
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    shape-margin: 1%;
  }

`

const Item = styled.img`
  height: fit-content;
  //width: fit-content;
  padding-inline: 5%;
`

const Carousel = styled(Flicking)`
  width: 30%;
  margin: 2%;
  max-height: 60vh;
`

const Esc = styled.div`
  font-size: 2em;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 5%;
`
const CarouselItem = React.forwardRef(({src, alt}, ref) => (
    <Item ref={ref} src={src} onDragStart={handleDragStart} alt={alt}/>))

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
}

function PhotoCarousel(focusState) {
    let plugins = [new AutoPlay({duration: 3000, animationDuration: 6000, stopOnHover: false})];
    // if(focusState===""){
    //
    // }else if (focusState==="top-left"){
    //
    // }else if (focusState==="top-right"){
    //
    // }else if (focusState==="bottom-right"){
    //
    // }else{
    //
    // }
    let imgListLocal = imgList
    shuffleArray(imgListLocal)
    return (<Carousel align={"prev"} hideBeforeInit={true} circular={true} circularFallback={"bound"} horizontal={false}
                      plugins={plugins}>
        {imgListLocal.map(idx => <CarouselItem ref={createRef} src={idx} alt={""}/>)}
    </Carousel>)
}

function Content() {
    const [focusState, setFocus] = useState("");

    const handler = ({key}) => {
        if (ESCAPE_KEYS.includes(String(key))) {
            setFocus("")
        }
    };
    useEventListener("keydown", handler);

    function pickIndex(focusState) {
        switch (focusState) {
            case "top-left":
                return 0;
            case "top-right":
                return 1;
            case "bottom-left":
                return 2;
            default:
                return 3;

        }
    }

    function findState(index) {
        switch (index) {
            case 0:
                return "top-left";
            case 1:
                return "top-right";
            case 2:
                return "bottom-left";
            default:
                return "bottom-right";
        }
    }

    return (<Body id={"activities"}>
        <PhotoCarousel focusState={focusState}/>
        {focusState === "" && <StyledDiv className={"pdca"}>
            <Quarter className="top-left" onClick={(e) => setFocus(e.target.classList[e.target.classList.length - 1])}>
                {en_pdca_short["top-left"]}
            </Quarter>
            <Quarter className="top-right" onClick={(e) => setFocus(e.target.classList[e.target.classList.length - 1])}>
                {en_pdca_short["top-right"]}
            </Quarter>
            <Quarter className="bottom-left"
                     onClick={(e) => setFocus(e.target.classList[e.target.classList.length - 1])}>
                {en_pdca_short["bottom-left"]}
            </Quarter>
            <Quarter className="bottom-right"
                     onClick={(e) => setFocus(e.target.classList[e.target.classList.length - 1])}>
                {en_pdca_short["bottom-right"]}
            </Quarter>
        </StyledDiv>}
        {focusState !== "" && <StyledDiv className={"detailed"}>

            <Flicking hideBeforeInit={true} circular={true}
                      defaultIndex={pickIndex(focusState)}
                      plugins={[new Arrow()]}
                      onChanged={(e) => {
                          setFocus(findState(e.index))
                      }}>
                <QuarterDiv className={"top-left"}><Text>{en_pdca_detailed["top-left"]}</Text></QuarterDiv>
                <QuarterDiv className={"top-right"}><Text>{en_pdca_detailed["top-right"]}</Text></QuarterDiv>
                <QuarterDiv className={"bottom-left"}><Text>{en_pdca_detailed["bottom-left"]}</Text></QuarterDiv>
                <QuarterDiv className={"bottom-right"}><Text>{en_pdca_detailed["bottom-right"]}</Text></QuarterDiv>
                <ViewportSlot>
                    <span className="flicking-arrow-prev"></span>
                    <span className="flicking-arrow-next"></span>
                    <Esc onClick={() => setFocus("")}>    &#x1F5F4; </Esc>
                </ViewportSlot>
            </Flicking></StyledDiv>}
        <PhotoCarousel a={focusState}/>
    </Body>);
}

export default Content;