import React, {Component, Fragment} from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';

import * as CONFIGS from '../../../Constants/configs';
import {Link} from 'react-router-dom';
import Logo from "../Logo/Logo";
import "./Events.scss";

class EventsD1Base extends Component {
    constructor(props){
        super(props);
        this.state = {events: [], is_loaded:true};
    }

    componentDidMount(){
        this.props.firebase.getEventNames()
            .then(data=>{
                this.setState({events: data, is_loaded:false});
                this.formatEvents();
            });
    }
    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    sortEvents(events){
        events.sort((e1, e2) =>{
            let t1 = parseInt(e1.date["seconds"]);
            let t2 = parseInt(e2.date["seconds"])
            return t1>t2? 1:-1;
        })
        let tmp = []
        let date = this.props.match.params["date"];
        if(parseInt(date)>=CONFIGS.DAYS.length) {
            console.log(date);
            this.props.history.push("/events");
        }
        for(let i=0;i<events.length;i++){
            if(parseInt(this.toDateTime(events[i].date["seconds"]).getDate()) == CONFIGS.DAYS[parseInt(date)])
                tmp.push(events[i]);
        }
        events = JSON.parse(JSON.stringify(tmp));
        return events;
    }

    formatEvents(){
        console.log(this.state.events);
        let sorted_events = this.sortEvents(this.state.events);

        const events = sorted_events.map(event =>{
            var date_time = this.toDateTime(event.date["seconds"]);
            var date = date_time.getDate() + " Feb";
            return (<div className="event__box">
                <div className="event__box--circle" />
                    <Link to={`${event.link}`} className="event__link">
                        <div className="event__box--text">
                            <h1 className="event__title">{event.title}</h1>
                            <p className="event__details">{date}</p>
                        </div>
                    </Link>
            </div>
        )});
        this.setState({events: events, is_loaded:true});
    }

    render() {
        if(!this.state["is_loaded"]) return <div></div>
        else{
            return (
                <Fragment>
                    <Logo />
                    <section class="section-events">
                        <div className="heading">
                            <h1 className="heading__primary">{CONFIGS.DAYS[parseInt(this.props.match.params["date"])]}th Feb 2020</h1>
                        </div>
                        <div className="sitar">
                            <div className="sitar__string">
                                {this.state.events}
                            </div>
                        </div>
                    </section>
                </Fragment>
            )
        }
    }
}

const EventsD1 = compose(
    withRouter,
    withFirebase,
  )(EventsD1Base);

export default EventsD1;
