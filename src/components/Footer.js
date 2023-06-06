import React from "react";
import styled from "styled-components";
import {getTexts} from "./helpers";

const Box = styled.div`
  background: #d6d7d7;
  box-shadow: 0 0 1px #000000;
  width: 100%;
  bottom: 0;
  margin: 0;
  padding-bottom: 1%;
  padding-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Footer extends React.Component {

    render() {
        return <Box id={'about'}>
            {getTexts("Footer",this.props.langCode)["legal"]}
        </Box>;
    }
}

export default Footer;