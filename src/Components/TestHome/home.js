import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {LoremIpsum} from 'react-lorem-ipsum';
import * as ROUTES from '../../Constants/routes';
import Nav from './Navbar/Nav';

import "./home.scss"

const Home = () => (
    <div>
      <Nav />
      <div className="clear-nav">
        <LoremIpsum p="100"> </LoremIpsum>
        <div id='Home'><h1>HERE</h1></div>
      </div>

    </div>

  );

export default Home;