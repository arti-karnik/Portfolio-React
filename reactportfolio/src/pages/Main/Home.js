import React from 'react';
import "./style.css";
import Snowfall from 'react-snowfall'
import Typer from '../../components/Typing/Typer'

function Home() {
    return ( <
        React.Fragment >
        <
        header id = "home" >
        <
        div className = "row banner" >
        <
        div className = "banner-text" >
        <
        h1 className = "responsive-headline" > Hello, I am Arti Karnik. < /h1> <
        Typer id = "cursor"
        heading = { 'I am ' }
        dataText = {
            ["iOS Developer", "Full Stack Developer", "Designer"] }
        /> <
        hr / >
        <
        /div> <
        ul className = "social" >
        <
        li key = "github" >
        <
        a href = "https://github.com/arti-karnik"
        target = "_blank" > < i className = "fa fa-github" > < /i></a >
        <
        /li> <
        li >
        <
        a href = "https://www.linkedin.com/in/arti-karnik-15844b201/"
        target = "_blank" >
        <
        i className = "fa fa-linkedin" > < /i></a >
        <
        /li>  <
        li key = "twitter" >
        <
        a href = "www.twitter.com"
        target = "_blank" > < i className = "fa fa-twitter" > < /i></a >
        <
        /li>  <
        /ul> <
        /div> <
        /header> <
        div >
        <
        Snowfall color = "white"
        wind = "10"
        style = {
            { background: 'transparent' } }
        snowflakeCount = { 100 }
        /> <
        /div> <
        /React.Fragment>
    )
};
export default Home;