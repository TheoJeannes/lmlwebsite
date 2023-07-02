import React from "react";
import styled from "styled-components";
import Div from "./styledComponents";
import {getTexts} from "./helpers";

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;
  
  /*Tel Paysage*/
  @media (min-aspect-ratio: 16/9) and (max-width: 1200px) and (orientation: landscape){
    flex-direction: column;
  }
  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
    flex-direction: column;
    font-size: .8em;
  }
  /*Tablette*/
  @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait){
    flex-direction: column;
  }
  
`

const Link = styled.a`
  align-self: center;
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  width: 25vw;
  border: #8550b1 solid 1px;
  /*Tel Paysage*/
  @media (min-aspect-ratio: 16/9) and (max-width: 1200px) and (orientation: landscape){
    
    width: 95%;
    margin-bottom: 3%;
  }
  /*Tel Portrait*/
  @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait) {
    width: 95%;
    margin-bottom: 3%;
  }
  /*Tablette*/
  @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait){
    width: 95%;
    margin-bottom: 3%;
  }
  
`

const It = styled.span`
  &:hover {
    color: #333333;
    font-style: italic;
  }
`

const DivNoPadding = styled(Div)`
 padding-top: 0;
`

class Contact extends React.Component {

    render() {
        let texts = getTexts("Contact",this.props.langCode);
        return (<DivNoPadding>
            <h2>{texts["title"]} :</h2>
            <List>
                <Link href="mailto:ludovic.jeannes@lmlconsulting.fr">
                    {texts["mail"]} : <It>ludovic.jeannes@lmlconsulting.fr</It></Link>
                <Link href={"tel:++3601622457"}>{texts["phone"]} : <It>+33 6 01 62 24 57</It></Link>
                <Link href={"https://www.linkedin.com/company/lml-consulting-sas"}>LinkedIn : <It>LML CONSULTING SAS</It></Link>
            </List>
        </DivNoPadding>);
    }
}

export default Contact;