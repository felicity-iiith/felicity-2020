import React,{Fragment, Component} from 'react';
import "./Sponsors.scss";
import sponsors from '../../../assets/images/old_sponsors.png';
import WorkInProgress from "../../WorkInProgress/WIP";
import Logo from "../Logo/Logo";
import mandalaQuarter from '../../../assets/images/mandala-quarter.png';
import mandalaHalf from '../../../assets/images/mandala-half.png';
import Qualcomm from "../../../assets/images/sponsors/qualcomm.jpg";
import PastSponsors from "../../../assets/images/sponsors/pastsponsors.png";
import "./Sponsors.scss";

class Sponsors extends Component {

    state = {
        sponsors: [
            {'weight' : 'Title Sponsor' , 'img' : Qualcomm},
            {'weight' : 'Title Sponsor' , 'img' : Qualcomm},
        ]     
    }

    render() {
        let sponsors_list = this.state.sponsors.map(sponsor => (
            <Fragment>
                <figure className="sponsor--individual">
                    <img src={sponsor.img} alt="Qualcomm" />
                    <figcaption class="sponsor--individual__weight">{sponsor.weight}</figcaption>
                </figure>
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
                </div>
            </Fragment>
        )
    }
}

export default Sponsors;

