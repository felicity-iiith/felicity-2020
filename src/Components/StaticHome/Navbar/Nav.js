import React from 'react';
import { Link } from "react-scroll";
import "./Nav.scss"

const Nav = (props) => {
    console.log(props);
    let divWrapperStyle = {
      display : "block"
    };
    if(props.display) {
      divWrapperStyle.display = props.display;
      // divWrapperStyle.top = 0;
    }
    return (
        <div className="fixed-wrapper" style={divWrapperStyle}>
          <ul className="nav-custom mx-auto d-flex list-unstyled justify-content-between"> 
            <li>
              <Link to="Home" spy={true} smooth={true} offset={-70} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
                About 
              </Link>
            </li>
            <li>
              <Link to="Theme" spy={true} smooth={true} offset={-70} duration={500}>
                Theme 
              </Link>
            </li>
            <li>
              <Link to="Testimonials" spy={true} smooth={true} offset={-70} duration={500}>
                Testimonials 
              </Link>
            </li>
            <li>
              <Link to="Video" spy={true} smooth={true} offset={-70} duration={500}> Video </Link>
            </li>
          </ul>
        </div>
    )
}

export default Nav;
