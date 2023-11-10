import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Heading from "../components/heading";
import JeweleryProducts from "../components/jeweleryProducts";

export default function Tech () {
    return (
        <main className="container">
            <Header/>
            <Heading title="Our Jewelery"/>
            <JeweleryProducts/>
            <Footer/>
        </main>
    )
}