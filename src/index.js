import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import styled from "styled-components";
import Contacts from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Body = styled.div`
  background: #eeefef;
  min-height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`

root.render(
    <Body>
        <Navbar/>
        <Content/>
        <Clients/>
        <Contacts/>
        <Footer/>
    </Body>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
