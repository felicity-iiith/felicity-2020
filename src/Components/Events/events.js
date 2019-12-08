import React,{Fragment} from 'react'
import './events.css';

const Events = props => {
	var allevents = JSON.parse(localStorage.getItem("events"));
	var theevents = [];
	for(var i = 0; i < allevents.length / 4; ++i)
	{
		var event_comp = []; 

		for(var j = 0; j < 4; ++j){
		  var k = 4*i + j
		  if(k == allevents.length)
		  	break;

		  let pic = allevents[k]['img_cdns'].split("\n")[0];
		  event_comp.push(<Event name={allevents[k]['name']} hrs={allevents[k]['etime']['hrs']} min={allevents[k]['etime']['min']} day={allevents[k]['etime']['day']} venue={allevents[k]['venue']} pic={pic} />);
		}
		theevents.push(<div className="d-flex flex-row">{event_comp}</div>);
		theevents.push(<br />)
	}
	return(
		<Fragment>
		<div style={{marginLeft:'3.75vw'}}>
		{theevents}
		</div>
		</Fragment>
	)
}

const Event = props => {

	let name = props.name
	let title = props.hrs + ":" + props.min + ", Day " + props.day + " at " + props.venue
	let pic = props.pic
	return(
		<div className="event">
		  <img className="imag" data-toggle="tooltip" title={title} src={pic} />
		    <a href="lol">
		      <h3 align="center">{name}</h3>
		    </a>
		</div>
	)
}

const EventsPage = props => {

	return(
		<Fragment>
		<h1 align="center">EVENTS</h1>
		<div>
		  <Events />	
		</div>
		
		</Fragment>

	)
}

export default EventsPage