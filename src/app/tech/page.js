import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Heading from "../components/heading";
import JeweleryProducts from "../components/jeweleryProducts";
import TechProducts from "../components/techProducts";

export default function Womens () {
    return (
        <main className="container">
            <Header/>
            <Heading title="Our Technology Products"/>
            <TechProducts/>
            <Footer/>
        </main>
    )
}