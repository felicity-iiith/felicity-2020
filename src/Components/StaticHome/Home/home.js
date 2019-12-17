import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {LoremIpsum} from 'react-lorem-ipsum';
import Nav from '../Navbar/Nav';

import "./home.scss"

const Home = () => (
    <div>
      <Nav />
      <Nav display={"block"} />
      <div className="clear-nav">
        {/* <LoremIpsum p="100"> </LoremIpsum> */}
        <div id='Home'>
          <h1>Home</h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='About'>
          <h1>About</h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Theme'>
          <h1>Theme</h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Testimonials'>
          <h1>Testimonials</h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Video'>
          <h1>Enter porn here</h1>
        </div>
      </div>

    </div>

  );

export default Home;
