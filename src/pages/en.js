import * as React from "react"
import Footer from "../components/Footer";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Clients from "../components/Clients";

const IndexPage = () => {
    return (<main>
        <Navbar/>
        <Content langCode={"en"}/>
        <Clients langCode={"en"}/>
        <Contact langCode={"en"}/>
        <Footer langCode={"en"}/>
    </main>);
}

export default IndexPage

export const Head = () => (
    <>
        <html lang="en"/>
        <title>LML Consulting</title>
        <meta name="description"
              content={"LML CONSULTING support its customers through Interim Management, Projet Management or Long Term Transformation"}/>
    </>
);
