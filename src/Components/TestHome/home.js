import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {LoremIpsum} from 'react-lorem-ipsum';
import * as ROUTES from '../../Constants/routes';



const Home = () => (
    <div>
      <div class="container">
        <div class="main-nav d-none d-lg-block">
          <nav class="navbar navbar-expand-lg navbar-light" role="navigation"> 
            <ul class="navbar-nav mr-auto"> 
              <li class="nav-item"><Link to="Home" spy={true} smooth={true} offset={-70} duration={500}> Home </Link></li>
              <li><Link to="About" spy={true} smooth={true} offset={-70} duration={500}> About </Link></li>
              <li><Link to="Theme" spy={true} smooth={true} offset={-70} duration={500}> Theme </Link></li>
              <li><Link to="Testimonials" spy={true} smooth={true} offset={-70} duration={500}> Testimonials </Link></li>
              <li><Link to="Video" spy={true} smooth={true} offset={-70} duration={500}> Video </Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <LoremIpsum p="100"> </LoremIpsum> 
      <div id='Home'><h1>HERE</h1></div>

    </div>

  );

export default Home;