import React, {Component, Fragment} from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';

import WorkInProgress from "../../WorkInProgress/WIP";
import {Link} from 'react-router-dom';
import Logo from "../Logo/Logo";
import "./Events.scss";

class EventsBase extends Component {
    constructor(props){
        super(props);
        this.state = {events: []};
    }

    componentDidMount(){
        this.props.firebase.getEventNames()
            .then(data=>{this.setState({events:data})});
    }
    render() {
        const eventUrl = "event";        
        const events = this.state.events.map(event => (
            <div className="event__box">
                <div className="event__box--circle" />
                    <Link to={`${eventUrl}/${event.link}`} className="event__link">
                        <div className="event__box--text">
                            <h1 className="event__title">{event.title}</h1>
                            <p className="event__details">{event.date}</p>
                        </div>
                    </Link>
            </div>
        ));
        return (
            <Fragment>
                <p>{JSON.stringify(this.state["events"])}</p>
                <Logo />
                <section class="section-events">
                    <div className="heading">
                        <h1 className="heading__primary">Events</h1>
                        <p className="heading__text">
                            Felicity encompasses and embraces the varied and diverse 
                            interests of iiith with everyone playing a role.
                            From nights of music and comedy to codecraft and quizzes,
                            everybody can explore and engage in their interests.
                            Felicity provides the perfect platform to showcase your talents in 
                            an otherwise packed academic schedule. The three days of felicity 
                            are packed with fun, merriment, and joy and self-discovery.
                        </p>
                    </div>
                    <div className="sitar">
                        <div className="sitar__string">
                            {events}
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

const Events = compose(
    withRouter,
    withFirebase,
  )(EventsBase);

export default Events;
