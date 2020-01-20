import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {LoremIpsum} from 'react-lorem-ipsum';
import * as ROUTES from '../../Constants/routes';
import Nav from './Navbar/Nav';
import { SocialIcon } from 'react-social-icons';

// import images
import logo from "../../assets/images/logo.png";
import kathak_left from "../../assets/images/main/4_left.png";
import kathak_right from "../../assets/images/main/4_right.png";

// videos
import vid from "../../assets/videos/aftermovie_cut.mp4";

import "../../Styles/_main.scss";
import "./home.scss"

const Home = () => (
    <main>
      <section className="section-wrapper">
        <section className="section section-home">
          <div className="header">
              <img className="header__logo" src={logo} />
          </div>
          <div className="tagline">
            <h1 className="tagline_heading-primary">
              <span className="tagline_heading-primary--main">Embracing the</span>
              <span className="tagline_heading-primary--sub">curry culture</span>
            </h1>
          </div>
        </section>
        <section className="section section-about">
          <div className="about">
            <h2 className="about__header">About</h2>
            <p className="about__description">
              Felicity is iiit's annual culture and tech fest. Held every year at he beginning of the 
              spring semester, it is the highlight of an iiitian's year and is an event that everybody
              looks forward to. Felicity encompasses and embraces the varied and diverse interests of 
              iiit with everyone playing a role.
            </p>
          </div>
        </section>
        <section className="section section-theme">
          <div className="section-theme__text">
            <span>Indian</span>
            <span>Culture</span>
          </div>
        </section>
      </section>
      <section className="section section-testimonials">
        
        <div className="testimonials">
          <img src={kathak_left} className="kathak__left"/>
          <img src={kathak_right} className="kathak__right"/>
          <div className="testimonials-text">
            <h2 className="testimonials-text__header">
              Testimonials
            </h2>
            <div className="custom-row">
              <div className="col-1-of-3 testimonial-card">
                  <span className="testimonial-card-quote">&ldquo;To love is to hate, to fear is to conquer, and other bullshit you can tell yourself&rdquo;</span>
                  <span className="testimonial-card-author">-Shaunak Badani</span>
              </div>
              <div className="col-1-of-3 testimonial-card">
                  <span className="testimonial-card-quote">&ldquo;To love is to hate, to fear is to conquer, and other bullshit you can tell yourself&rdquo;</span>
                  <span className="testimonial-card-author">-Shaunak Badani</span>
              </div>
              <div className="col-1-of-3 testimonial-card">
                  <span className="testimonial-card-quote">&ldquo;To love is to hate, to fear is to conquer, and other bullshit you can tell yourself"</span>
                  <span className="testimonial-card-author">-Shaunak Badani</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-footer">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={vid} type="video/webm" /> 
                Your browser is not supported
            </video>
        </div>
        <footer>
          <div className="footer">
            <div className="footer__text">
                <p>Connect with us : </p>
                <div>
                  <SocialIcon 
                   network="instagram"
                   url="https://instagram.com"
                   className="footer__icon" 
                   bgColor="transparent"
                   fgColor="white" />
                  <SocialIcon 
                   network="facebook"
                   url="https://instagram.com"
                   className="footer__icon" 
                   bgColor="transparent"
                   fgColor="white" />
                  <SocialIcon 
                   network="youtube"
                   url="https://instagram.com"
                   className="footer__icon" 
                   bgColor="transparent"
                   fgColor="white" />
                  <SocialIcon 
                   network="twitter"
                   url="https://instagram.com"
                   className="footer__icon" 
                   bgColor="transparent"
                   fgColor="white" />
                </div>

            </div>
          </div>
        </footer>
      </section>

    </main>

  );

export default Home;