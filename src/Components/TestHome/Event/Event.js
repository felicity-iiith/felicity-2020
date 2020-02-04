import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { withRouter, Redirect } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../Constants/routes';

import "./Event.scss";
import mandalaQuarter from '../../../assets/images/mandala-quarter.png';
import mandalaHalf from '../../../assets/images/mandala-half.png';
import Icon from 'react-icons-kit';
import { lock } from 'react-icons-kit/fa/lock';
import {basic_elaboration_calendar_flagged} from 'react-icons-kit/linea/basic_elaboration_calendar_flagged';
import {basic_clock} from 'react-icons-kit/linea/basic_clock';
import {ic_location_on} from 'react-icons-kit/md/ic_location_on';
import {basic_smartphone} from 'react-icons-kit/linea/basic_smartphone';
import {basic_world} from 'react-icons-kit/linea/basic_world';
import Logo from "../Logo/Logo";
import Spinner from '../Spinner/Spinner';


class EventBase extends Component {
    constructor(props){
        super(props);

        this.state={event_details: null, is_loaded:false};
    }
    componentDidMount() {
        let event_name = this.props.match.params["name"];

        this.props.firebase.getEventDetails(event_name)
            .then(event_details=>{
                    this.setState({event_details: JSON.parse(event_details), is_loaded:true})
                    console.log(event_details);
                }
            )
            .catch(exception => {
                console.log(exception);
                this.props.history.push("/events");
            });
    }
    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    render() {
        if(this.state["is_loaded"]){
            var date_time = this.toDateTime(this.state["event_details"]["Date"]["seconds"]);
            var month = "Feb";
            console.log(date_time);
            var POCs = this.state.event_details.POCs.map((poc)=>{
                return(<div className="box__poc">
                    <p className="box__poc--name">{poc["Name"]}</p>
                    <p className="box__poc--number">+91 {poc["Phone"]}</p>
                </div>)
            });
            return (
                <section className="section-event">
                    <p></p>
                    <Logo />
                    <div className="section-event--page">
                        <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__topright"/>
                        <img src={mandalaHalf} alt="Mandala" className="mandala mandala__center"/>
                        <div className="heading-event">
                            <h1 className="heading-event__title">
                                {this.state["event_details"]["Name"]}
                            </h1>
                            <h4 className="heading-event__subtitle">
                                {this.state["event_details"]["Subheading"]}
                            </h4>
                        </div>
                        <div className="description">
                            <div className="description__text">
                                {this.state["event_details"]["Description"]}
                            </div>
                        </div>
                    </div>


                    <div className="section-event--page">
                        <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__bottomright"/>
                        <div className="details">
                            <div className="box">
                                <Icon className="box__icon" icon={basic_elaboration_calendar_flagged} size={64} />
                                <p>{date_time.getDate()} {month}</p>
                            </div>
                            <div className="box">
                                <Icon className="box__icon" icon={basic_clock} size={64} />
                                <p>{date_time.getHours()>=12? date_time.getHours()-12:date_time.getHours()}:{date_time.getMinutes()} {date_time.getHours()>=12? "PM":"AM"}</p>
                            </div>
                            <div className="box">
                                <Icon className="box__icon" icon={basic_world} size={64} />
                                <p>{this.state["event_details"]["Venue"]}</p>
                            </div>
                            <div className="box">
                                <Icon className="box__icon" icon={basic_smartphone} size={64} />
                                {POCs}
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else return <Spinner />
        
    }
}

const Event = compose(
    withRouter,
    withFirebase,
  )(EventBase);

export default Event;