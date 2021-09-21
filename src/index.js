import React from "react" ;
import ReactDom from "react-dom" ;
import App from './App' ;
import "./assets/index.css" ;

function Index () {
    return(
        <App/>
    )
}

ReactDom.render(
    <Index />
,document.querySelector("body"));