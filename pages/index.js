import Layout from "../components/Layout";
import React from "react";
import Fetch from "isomorphic-unfetch"
import Prices from "../components/Prices";
const Index = (props) => (
    <Layout>
        <div>Hello, world</div>
        <Prices data ={props.data} />
    </Layout>
);

Index.getInitialProps= async function (){
    const res =  await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data  = await res.json()
    return {
        data
    }
}
export default Index;
