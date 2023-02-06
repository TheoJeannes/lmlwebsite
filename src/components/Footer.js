import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: #d6d7d7;
  box-shadow: 0 0 1px #000000;
  width: 100%;
  //position: fixed;
  bottom: 0;
  margin: 0;
  padding-bottom: 1%;
  padding-top: 1%;
  display: flex;
  //justify-content: space-between;
  justify-content: center;
  align-items: center;
`

class Footer extends React.Component {
    render() {
        return <Box id={'about'}>
            © LML Consulting - All rights reserved
        </Box>;
    }
}

export default Footer;