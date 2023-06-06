import * as React from "react"
import Footer from "../components/Footer";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Clients from "../components/Clients";

const IndexPage = () => {
    return (<main>
        <Navbar/>
        <Content langCode={"fr"}/>
        <Clients langCode={"fr"}/>
        <Contact langCode={"fr"}/>
        <Footer langCode={"fr"}/>
    </main>);
}

export default IndexPage

export const Head = () => (
    <>
        <html lang="fr" />
        <title>LML Consulting</title>
        <meta name="description"
              content={"LML Consulting vous accompagne comme conseil pour vos projets ou en mission de management de transition en Supply Chain et Amélioration continue"}/>
    </>
);
