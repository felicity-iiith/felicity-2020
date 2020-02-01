import React, { Component } from 'react';
import "./Event.scss";
import mandalaQuarter from '../../../assets/images/mandala-quarter.png';
import mandalaHalf from '../../../assets/images/mandala-half.png';
import Icon from 'react-icons-kit';
import { lock } from 'react-icons-kit/fa/lock';
import {basic_elaboration_calendar_flagged} from 'react-icons-kit/linea/basic_elaboration_calendar_flagged';
import {basic_clock} from 'react-icons-kit/linea/basic_clock';
import {ic_location_on} from 'react-icons-kit/md/ic_location_on';
import {basic_smartphone} from 'react-icons-kit/linea/basic_smartphone';
import {basic_world} from 'react-icons-kit/linea/basic_world'

export default class Event extends Component {

    componentDidMount() {
        // fetch some data from firebase using
        // this.props.match.url
    }

    render() {
        return (
            <section className="section-event">
                <div className="section-event--page">
                    <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__topright"/>
                    <img src={mandalaHalf} alt="Mandala" className="mandala mandala__center"/>
                    <div className="heading-event">
                        <h1 className="heading-event__title">
                            Web Dev Workshop
                        </h1>
                        <h4 className="heading-event__subtitle">
                            Workshops
                        </h4>
                    </div>
                    <div className="description">
                        <div className="description__text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora omnis quod similique officia. Voluptatem accusamus numquam hic officiis maxime, eaque dolores eos eveniet architecto minus saepe similique accusantium, animi nesciunt!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora omnis quod similique officia. Voluptatem accusamus numquam hic officiis maxime, eaque dolores eos eveniet architecto minus saepe similique accusantium, animi nesciunt!
                        </div>
                    </div>
                </div>


                <div className="section-event--page">
                    <img src={mandalaQuarter} alt="Mandala" className="mandala mandala__bottomright"/>
                    <div className="details">
                        <div className="box">
                            <Icon icon={basic_elaboration_calendar_flagged} size={64} />
                            <p>8th Feb</p>
                        </div>
                        <div className="box">
                            <Icon icon={basic_clock} size={64} />
                            <p>12:00 PM</p>
                        </div>
                        <div className="box">
                            <Icon icon={basic_world} size={64} />
                            <p>Himalaya 105, IIIT Hyderabad</p>
                        </div>
                        <div className="box">
                            <Icon icon={basic_smartphone} size={64} />
                            <p>POC</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
