import React from 'react';
import "./Sidenav.scss";
import {Link} from 'react-router-dom';

import close from '../../../assets/images/close.png';

export default function Sidenav(props) {
    let navStyle = { transform : "translateX(-100%)" };
    if(props.drawerOpen) {
        navStyle.transform = "translateX(0%)"
    }

    return (
        <div className="sidenav" style={navStyle}>
            <div>
                <img src={close} onClick={props.closeDrawer} />
            </div>
            <div>
                <Link
                    className="nav-element"
                    to="/sponsors"
                    activeStyle={{ color: 'white' }} > Sponsors </Link>
            </div>
            <div>
                <Link
                    className="nav-element"
                    to="/sponsors"
                    activeStyle={{ color: 'white' }} > Contact Us </Link>
            </div>
        </div>
    )
}
