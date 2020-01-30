import React from 'react';
import logo from "../../../assets/images/logo.png";
import {Link} from 'react-router-dom';
import "./Logo.scss";

export default function Logo() {
    return (
        <div className="header">
            <Link to="/"><img className="header__logo" src={logo} /></Link>
        </div>
    )
}
