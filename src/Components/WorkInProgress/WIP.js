import React from 'react';
import pothole from "../../assets/images/misc/pothole.png";
import "./WIP.scss";
import Nav from "../TestHome/Navbar/Nav";

const WIP = props => {
    return (
        <div className="section-wip">
            <div className="content">
                <img src={pothole} alt="Pothole" className="content__img"/>
                <h1 className="content__heading--primary">Caution! Work In Progress</h1>
                <h3 className="content__heading--sub">Our developer(s) are hard at work. </h3>
            </div>
        </div>
    )
}

export default WIP;
