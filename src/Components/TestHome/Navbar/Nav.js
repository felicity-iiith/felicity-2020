import React,{ Component, Fragment } from 'react';
import { Link } from "react-scroll";
import "./Nav.scss";

import felicity_logo from "../../../assets/images/black_circle.png";
import burger from "../../../assets/images/burger.png";

import SideNav from '../Sidenav/Sidenav';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false
    }
  }

  openDrawer = () => { 
    this.setState({ drawerOpen : true });
  }

  closeDrawer = () => { 
    this.setState({ drawerOpen : false });
    console.log("called")
  }


  render() {
    return (
        <Fragment>
          <SideNav drawerOpen={this.state.drawerOpen} closeDrawer={this.closeDrawer} />
          <div className="fixed-top row nav-custom">
            <div className="col-md-3">
              <img src={burger} style={{  height: "auto", width: "10%", cursor: "pointer" }} onClick={this.openDrawer} />
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <img src={felicity_logo} style={{ position: "fixed", zIndex: 3, height: "auto" , width : "4%" }} />
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
              <ul className="topnav m-auto d-flex list-unstyled justify-content-around align-middle">
                <li>
                  <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="About" spy={true} smooth={true} offset={-100} duration={500}>
                    About 
                  </Link>
                </li>
                <li>
                  <Link to="Theme" spy={true} smooth={true} offset={-100} duration={500}>
                    Theme 
                  </Link>
                </li>
                <li>
                  <Link to="Testimonials" spy={true} smooth={true} offset={-100} duration={500}>
                    Testimonials 
                  </Link>
                </li>
                <li>
                  <Link to="Video" spy={true} smooth={true} offset={-100} duration={500}> Video </Link>
                </li>
              </ul>
            </div>
          </div>
        </Fragment>
    )
  }
}

export default Nav;
