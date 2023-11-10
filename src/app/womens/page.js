import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Heading from "../components/heading";
import WomensProducts from "../components/womensProducts";

export default function Womens () {
    return (
        <main className="container">
            <Header/>
            <Heading title="Our Women's Products"/>
            <WomensProducts/>
            <Footer/>
        </main>
    )
}