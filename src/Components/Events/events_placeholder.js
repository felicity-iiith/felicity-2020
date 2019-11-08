import React,{Fragment} from 'react'
import './events_placeholder.css';

const Announcements = props => {
	var anns = props.val.split("\n");
	var announce_comp = []; 

	for(var i=0;i<anns.length;++i)
	{
		announce_comp.push(<Announcement val={anns[i]} />);
	}

	return(
		<Fragment>
		<div className="announcement">
		  {announce_comp}
	    </div>
		</Fragment>
	)
}

const Announcement = props => {
	return(
		  <div className="alert alert-info">
		    <strong>Info!</strong> {props.val}
		    <br />
		  </div>
	)
}

const Title = props => {
	return(
		<Fragment>
		<h1 align="center">
			{props.val}
		</h1>
		</Fragment>
	)
}


const Description = props => {
	return(
	  <Fragment>
	  <div className="desc">
	    <p>
		  {props.val}
	    </p>
	    <h5>
		  {props.hrs} hrs {props.min} min,
		  DAY {props.day} 
	    </h5>
	    <h4>
	      VENUE: {props.venue}	
	    </h4>
	  </div>  
	  </Fragment>
	)
}

const Images = props => {
	var imgs= props.val;
	var img1 = imgs.split("\n")[0];
	var img2 = imgs.split("\n")[1];
	var img3 = imgs.split("\n")[2];
	return(
		<Fragment>
		<div className="images">
		  <Image val={img1}/>
		  <Image val={img2}/>
		  <Image val={img3}/>
	    </div>
		</Fragment>
	)
}

const Image = props => {
	return(
		<div>
			<img src={props.val} className="img" />
		</div>
	)
}

const Winner = props => {
	return(
		<h3>
		  WINNER : {props.val}	
		</h3>
	)
}


const Placeholder = props => {
	var event = JSON.parse(localStorage.getItem("events"))[0]
	let name = event['name']
	let descript = event['descript']
	let hrs = event['etime']['hrs']
	let min = event['etime']['min']
	let day = event['etime']['day']
	let venue = event['venue']
	let img_cdns = event['img_cdns']
	let winner = event['winner']
	let announcements = event['announcements']
	
	return(
		<Fragment>
		<Announcements val={announcements}/>
		<Title val={name}/>
		<div className="d-flex flex-row" style={{marginLeft:'10vw'}}>
			<Description val={descript} hrs={hrs} min={min} day={day} venue={venue}/>
			<Images val={img_cdns}/>
		</div>
		<Winner val={winner}/>
		</Fragment>
	)
}

export default Placeholder