import React from "react";
import styled from 'styled-components';
import lang_french from '../resources/icons/france.png';
import lang_uk from '../resources/icons/uk.png';
import {Link} from "gatsby";

const Title = styled.h1`
  color: white;
  text-align: center;
  margin: 0;
  margin-block: auto;
  font-size: 5vh;
  font-family: BaskervilleOldFace, serif;
  cursor: default;
`

const Nav = styled.div`
  background: #28313e;
  height: 8vh;
  max-height: 70px;
  display: flex;
  justify-content: space-between;
  padding-inline: 2%;
  position: fixed;
  top: 0;
  width: 96%;
  min-width: auto;
  box-shadow: 0 0 3px #000000;
  z-index: 3;
`;

const Lang = styled.div`
  display: flex;
  height: 4vh;
  max-height: 35px;
  align-self: center;
  width: 10vh;
  justify-content: space-around;
  @media (max-aspect-ratio: 16/9) and (max-height: 1200px) and (orientation: landscape){
    height: 6vh;
    width: 15vh;
  }
`
const LangImg = styled.img`
  cursor: pointer;
  height: 100%;

`

class Navbar extends React.Component {
    navigate(e, dst) {
        e.preventDefault();
        if (dst === "") window.scrollTo(0, 0); else window.location.replace('/#' + dst);
    }

    render() {
        return (
            <Nav>
                <Title onClick={(e) => this.navigate(e, "")}>LML Consulting</Title>
                <Lang>
                    <Link to={"/"}>
                        <LangImg src={lang_french} alt={"Afficher le site en Français"}/>
                    </Link>
                    <Link to={"/en"}>
                        <LangImg src={lang_uk} alt={"Show the website in English"}/>
                    </Link>
                </Lang>
            </Nav>
        );
    }
}

export default Navbar;