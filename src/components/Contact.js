import React from "react";
import styled from "styled-components";
import Div from "./styledComponents";


const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;
`

const Link = styled.a`
  align-self: center;
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  
  &:hover{
    font-size: 160%;
    color: #333333;
  }
`

class Contacts extends React.Component {

    render() {
        return (<Div>
            <h2>To Reach Us :</h2>
            <List>
                <Link href="mailto:ludovic.jeannes@lmlconsulting.fr">
                    Mail : ludovic.jeannes@lmlconsulting.fr</Link>
                <Link href={"tel:++3601622457"}>Phone : +33 6 01 62 24 57</Link>
                {/*<Link>LinkedIn : </Link>*/}
            </List>
        </Div>);
    }
}

export default Contacts;