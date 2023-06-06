import React from "react";
import styled from "styled-components";
import Div from "./styledComponents";
import {getTexts} from "./helpers";

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
  width: 25vw;
`

const It = styled.span`
  &:hover {
    color: #333333;
    font-style: italic;
  }
`

class Contact extends React.Component {

    render() {
        let texts = getTexts("Contact",this.props.langCode);
        return (<Div>
            <h2>{texts["title"]} :</h2>
            <List>
                <Link href="mailto:ludovic.jeannes@lmlconsulting.fr">
                    {texts["mail"]} : <It>ludovic.jeannes@lmlconsulting.fr</It></Link>
                <Link href={"tel:++3601622457"}>{texts["phone"]} : <It>+33 6 01 62 24 57</It></Link>
                {/*<Link>LinkedIn : </Link>*/}
            </List>
        </Div>);
    }
}

export default Contact;