import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Heading from "../components/heading";
import MensProducts from "../components/mensProducts";

export default function Mens () {
    return (
        <main className="container">
            <Header/>
            <Heading title="Our Men's Products"/>
            <MensProducts/>
            <Footer/>
        </main>
    )
}