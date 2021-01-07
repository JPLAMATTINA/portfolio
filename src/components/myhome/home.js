import React from 'react';
import Home from '../../assets/img/home/home.png'
import ScrollDown from '../scroll-down/scrolldown.js'
import "./home.css"



const MyHome = () =>{
    return (
        <div id="home">
            <div>
                <div className="content">
                    <h2>PORTFOLIO</h2>
                    <h2>PORTFOLIO</h2>
             </div>
            <img className="d-block w-100 custom-img" src={Home}  alt=''></img>
            </div>
            <ScrollDown/>
        </div>
    )
}

export default MyHome;