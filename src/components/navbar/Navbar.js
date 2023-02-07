import React from 'react';
import styled from 'styled-components';
import {Nav} from "./NavbarElements";

const Title = styled.h1`
  color: white;
  font-size: xxx-large;
  margin-top: 1%;
  font-family: BaskervilleOldFace, serif;
  cursor: pointer;
`

class Navbar extends React.Component {
    navigate(e, dst) {
        e.preventDefault();
        if (dst === "")
            window.scrollTo(0, 0);
        else
            window.location.replace('/#' + dst);
    }

    render() {
        return (<Nav>
            <Title onClick={(e) => this.navigate(e, "")}>LML Consulting</Title>
        </Nav>);
    }
}

export default Navbar;