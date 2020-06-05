import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoin price</title>
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cyborg/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-GKugkVcT8wqoh3M8z1lqHbU+g6j498/ZT/zuXbepz7Dc09/otQZxTimkEMTkRWHP"
                  crossOrigin="anonymous">
            </link>
        </Head>
        <NavBar/>
        <div className={"container"}>{props.children}</div>
    </div>
)

export default Layout