import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {LoremIpsum} from 'react-lorem-ipsum';
import * as ROUTES from '../../Constants/routes';
import Nav from './Navbar/Nav';

import "./home.scss"

const Home = () => (
    <div>
      <Nav />
      <div className="clear-nav container">
        <div id='Home'>
          <h1 className="main-headers">
          Home
          </h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='About'>
          <h1 className="main-headers">
          About
          </h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Theme'>
          <h1 className="main-headers">
          Theme
          </h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Testimonials'>
          <h1 className="main-headers">
          Testimonials
          </h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Video'>
          <h1 className="main-headers">
          Video
          </h1>
        </div>
        <LoremIpsum p="100"> </LoremIpsum>
      </div>

    </div>

  );

export default Home;