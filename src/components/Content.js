import React, {createRef, useEffect, useState} from "react";
import styled from "styled-components";
import {handleDragStart} from "./styledComponents";
import Flicking from "@egjs/react-flicking";
import {imgList} from "../resources/assets";
import {getTexts} from "./helpers";
import {AutoPlay} from "@egjs/flicking-plugins";
import arrow from "../resources/icons/arrow.png";

const ArrowImg = styled.img`
  height: 100%;
  //width: 80%;
`

const Arrow = styled.div`
  position: absolute;
  height: 8vh;
  top: 40%;

  &.previous {
    left: 5%;
    rotate: -35deg;
  }

  &.next {
    right: 5%;
    rotate: 35deg;
    transform: scaleX(-1);
  }

  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
    height: 8vw;
  }
  /*Tablette*/
  @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait){
    height: 8vw;
  }
`

const StyledDiv = styled.div`

  &.pdca {
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    display: grid;
  }

  &.detailed {
    text-align: justify;
    position: relative;
    /*Tel Portrait*/
    @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
      font-size: 90%;
    }
  }

  width: 50%;
  margin: auto;
  padding-top: 2%;
  padding-bottom: 2%;

  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
    width: 90%;
  }

   /*Tablette*/
   @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait){
     width: 90%;
   }
`;

const Body = styled.div`
  padding-top: 9vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 80%;
`

const QuarterDiv = styled.div`
  height: 42vh;
  overflow: auto;
  display: flex;
  user-select: text;
  padding: 5% 15% 5% 15%;

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
  line-height: 1.5em;
  font-size: 1.5em;
  margin: auto;
`

const Quarter = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5%;
  height: 25vh;
  width: 25vh;
  cursor: pointer;
  position: relative;

  p {
    bottom: 0;
    position: absolute;
  }

  &:hover {
    height: 27vh;
    width: 27vh;
    margin: -1vh -1vh;
  }

  &.top-left {
    text-align: right;
    background-color: #1f6df3;
    border-radius: 100% 0 0 0;
    justify-self: end;
    align-self: end;
  }

  &.top-right {
    background-color: red;
    align-self: end;
    border-radius: 0 100% 0 0;
  }

  &.bottom-left {
    text-align: right;
    background-color: #8550b1;
    border-radius: 0 0 0 100%;
    justify-self: end;

  }

  &.bottom-right {
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

  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
    width: 45vw;
    height: 45vw;
    padding: 3%;
  }

`

const Item = styled.img`
  //height: 15vh;
  //width: 30vw;
  padding-inline: 5%;
`

const Carousel = styled(Flicking)`
  width: 30%;
  margin: 2%;
  max-height: 60vh;
  /*Tel Paysage*/
  @media (min-aspect-ratio: 16/9) and (max-width: 1200px) and (orientation: landscape) {
    width: 0;
    margin: 0;
  }

  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
    width: 0;
    margin: 0;
  }

  /*Tablette*/
  @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait) {
    width: 0;
    margin: 0;
  }
`

const Esc = styled.div`
  font-size: 2em;
  position: absolute;
  z-index: 2;
  top: 10%;
  right: 5%;
  cursor: pointer;
`

const CarouselItem = React.forwardRef(({src, alt}, ref) => (
    <Item ref={ref} src={src} onDragStart={handleDragStart} alt={alt}/>))

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
}

function PhotoCarousel() {
    let plugins = [new AutoPlay({duration: 1500, animationDuration: 3000, stopOnHover: false})];
    let imgListLocal = imgList
    shuffleArray(imgListLocal)
    let i = 0
    return (<Carousel align={"prev"} hideBeforeInit={true} circular={true} circularFallback={"bound"} horizontal={false}
                      plugins={plugins}>
        {imgListLocal.map(idx => <CarouselItem key={i++} ref={createRef} src={idx} alt={""}/>)}
    </Carousel>)
}

const Content = (props) => {
    const [focusState, setFocus] = useState("");
    let lang = getTexts("Content", props.langCode)

    function handleSwipe(e) {
        console.log(e);
        e.detail.direction === 2 ? shiftFocus(1) : shiftFocus(-1);
        console.log("abc")
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                setFocus("");
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('ontouchmove', (e) => handleSwipe(e));

        // Clean up the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    function shiftFocus(number) {
        let focusList = ["top-left", "top-right", "bottom-left", "bottom-right"]
        let idx = focusList.indexOf(focusState)
        if (idx === 0 && number === -1) {
            idx = 4 //4 + -1 will return the fourth element
        } else if (idx === 3 && number === 1) {
            idx = -1 //-1 + 1 will return the first element
        }
        setFocus(focusList[idx + number])
    }

    return (<Body id={"activities"}>
        <PhotoCarousel focusState={focusState}/>
        {focusState === "" && <StyledDiv className={"pdca"}>
            <Quarter className="top-left" onClick={() => setFocus("top-left")}>
                {lang["short"]["top-left"]}
            </Quarter>
            <Quarter className="top-right" onClick={() => setFocus("top-right")}>
                {lang["short"]["top-right"]}
            </Quarter>
            <Quarter className="bottom-left"
                     onClick={() => setFocus("bottom-left")}>
                {lang["short"]["bottom-left"]}
            </Quarter>
            <Quarter className="bottom-right"
                     onClick={() => setFocus("bottom-right")}>
                {lang["short"]["bottom-right"]}
            </Quarter>
        </StyledDiv>}
        {focusState !== "" && <StyledDiv className={"detailed"}>
            <Arrow className={"previous"} onClick={() => shiftFocus(-1)}><ArrowImg src={arrow} alt={"previous"}/></Arrow>
            {focusState === "top-left" &&
                <QuarterDiv className={"top-left"}><Text>{lang["detailed"]["top-left"]}</Text></QuarterDiv>}
            {focusState === "top-right" &&
                <QuarterDiv className={"top-right"}><Text>{lang["detailed"]["top-right"]}</Text></QuarterDiv>}
            {focusState === "bottom-left" &&
                <QuarterDiv className={"bottom-left"}><Text>{lang["detailed"]["bottom-left"]}</Text></QuarterDiv>}
            {focusState === "bottom-right" &&
                <QuarterDiv className={"bottom-right"}><Text>{lang["detailed"]["bottom-right"]}</Text></QuarterDiv>}
            <Arrow className={"next"} onClick={() => shiftFocus(1)}><ArrowImg src={arrow} alt={"next"}/></Arrow>
            <Esc onClick={() => setFocus("")}>&times;</Esc>
        </StyledDiv>}
        <PhotoCarousel focusState={focusState}/>
    </Body>);
}

export default Content;