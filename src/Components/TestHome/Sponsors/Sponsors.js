import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import "./Sponsors.scss";
import sponsors from '../../../assets/images/old_sponsors.png';
import WorkInProgress from "../../WorkInProgress/WIP";
import Logo from "../Logo/Logo";
import mandalaQuarter from '../../../assets/images/mandala-quarter.png';
import mandalaHalf from '../../../assets/images/mandala-half.png';
import PastSponsors from "../../../assets/images/sponsors/pastsponsors.png";
import "./Sponsors.scss";

// Sponsor images
import Qualcomm from "../../../assets/images/sponsors/qualcomm.jpg";
import AICrowd from "../../../assets/images/sponsors/aicrowd.png";
import Ajio from "../../../assets/images/sponsors/Ajio.svg";
import EduFabrica from "../../../assets/images/sponsors/edufabrica.png";
import HelloIntern from "../../../assets/images/sponsors/hellointern.png";
import Internshala from "../../../assets/images/sponsors/internshaala.svg";
import Jrny from "../../../assets/images/sponsors/jrny.png";
import Monster from "../../../assets/images/sponsors/monster.jpg";
import TalentSprint from "../../../assets/images/sponsors/talentsprint.png";
import SarathCity from "../../../assets/images/sponsors/sarathcity.png";
import SBI from "../../../assets/images/sponsors/sbi_logo.png";
import Spectal from "../../../assets/images/sponsors/Spectal-5.1.jpg";



class Sponsors extends Component {

    state = {
        sponsors: [
            {'weight' : 'Prime Sponsor' , 'img' : Qualcomm, 'link' : 'https://www.qualcomm.com/'},
            {'weight' : 'Singularity Partner' , 'img' : AICrowd, 'link' : 'https://www.aicrowd.com/'},
            {'weight' : 'Fashion Partner' , 'img' : Ajio, 'link' : 'https://www.ajio.com/'},
            {'weight' : 'Workshop Partner' , 'img' : EduFabrica, 'link' : 'https://www.edufabrica.net/'},
            {'weight' : 'Media Partner' , 'img' : HelloIntern, 'link' : 'https://www.hellointern.com/'},
            {'weight' : 'Internship and Trainings Partner' , 'img' : Internshala, 'link' : 'https://internshala.com/'},
            {'weight' : 'Artist Partner' , 'img' : Jrny, 'link' : 'http://www.jrnyentertainments.com/'},
            {'weight' : 'Energy Partner' , 'img' : Monster, 'link' : 'https://www.monsterenergy.com/'},
            {'weight' : 'Threads Title Sponsor' , 'img' : TalentSprint, 'link' : 'https://talentsprint.com/'},
            {'weight' : 'Flashmob Partner' , 'img' : SarathCity, 'link' : 'http://sarathcitycapitalmall.com/'},
            {'weight' : 'Banking Partner' , 'img' : SBI, 'link' : 'https://sbi.co.in/'},
            {'weight' : 'Singularity Partner' , 'img' : Spectal, 'link' : 'https://www.spectalmanagement.com/'},
        ]     
    }

    render() {
        let sponsors_list = this.state.sponsors.map(sponsor => (
            <Fragment>
                <a href={sponsor.link} className="sponsor--link">
                    <figure className="sponsor--individual">
                        <img src={sponsor.img} alt="Qualcomm" />
                        <figcaption class="sponsor--individual__weight">{sponsor.weight}</figcaption>
                    </figure>
                </a>
            </Fragment>
        ))
        return (
            <Fragment>
                <Logo />
                <div className="section-event">
                    <div className="section-event--page">
                        <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__topright"/>
                        <img src={mandalaHalf} alt="Mandala" className="mandala mandala__center"/>
                        <div className="heading-event heading-past">
                            <h1 className="heading-event__title ">Our sponsors</h1>
                        </div>
                        <div className="sponsor">
                            {sponsors_list}  
                        </div>
                        <div className="heading-event heading-past">
                            <h1 className="heading-event__title">Past sponsors</h1>
                        </div>
                        <div className="sponsor">
                            <img src={PastSponsors} alt="Past Sponsors" className="past_sponsor"/>
                        </div>
                    </div>
                    <div className="section-event--page">
                        <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__bottomright"/>
                    </div>
                    <div className="section-event--page">
                        <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__topright"/>
                        {/* <img src={mandalaHalf} alt="Mandala" className="mandala mandala__center"/> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Sponsors;

