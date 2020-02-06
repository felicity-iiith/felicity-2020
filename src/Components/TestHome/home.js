import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from "./Logo/Logo";
import { SocialIcon } from 'react-social-icons';
import ReactFullpage from '@fullpage/react-fullpage';

// import images
import kathak_left from "../../assets/images/main/4_left.png";
import kathak_right from "../../assets/images/main/4_right.png";

// videos
import vid from "../../assets/videos/aftermovie_cut.mp4";
import "../../Styles/_main.scss";
import "./home.scss";

const Home = () => (
    <main>
      <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section section-home">
            <Logo />
            <div className="tagline">
              <h1 className="tagline_heading-primary">
                <span className="tagline_heading-primary--main">Embracing the</span>
                <span className="tagline_heading-primary--sub">curry culture</span>
              </h1>
              {/* <button>Download the mobile app</button> */}
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
            {/* <div className="section-theme__text">
              <span>Indian</span>
              <span>Culture</span>
            </div> */}
            <div className="app-button">
              <Link to="/static/app/app-release.apk" className="download-app">
                <span>
                  Download the app now!
                </span>
              </Link>
            </div>
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
                  <div className="col-1-of-3">
                    <div className="testimonial-card">
                      <span className="testimonial-card-quote">&ldquo;If there is anything that I remember from my college days, it is my college fest.... Assignments would come and go but the college fest is something that comes only once a year.... Today, what matters even more than subject knowledge is the perspective towards life and that I got from Felicity.&rdquo;</span>
                      <span className="testimonial-card-author">-Shaunak Badani</span>
                    </div>
                  </div>
                  <div className="col-1-of-3">
                    <div className="testimonial-card">
                      <span className="testimonial-card-quote">&ldquo;Amongst my friends from other colleges, if there is anything we boast about our college, it is not the placements and attendance policy but our college fest..... Being an undergrad at IIIT hyderabad, I can faithfully say that Felicity is truely an enjoyable college event.'&rdquo;</span>
                      <span className="testimonial-card-author">-Shaunak Badani</span>
                    </div>
                  </div>
                  <div className="col-1-of-3">
                    <div className="testimonial-card">
                      <span className="testimonial-card-quote">&ldquo;Fest to litt hai!&rdquo;</span>
                      <span className="testimonial-card-author">-Shaunak Badani</span>
                    </div>
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
        </ReactFullpage.Wrapper>
          );
        }}
      />
      
      

    </main>

  );

export default Home;