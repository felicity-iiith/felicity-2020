import React, {Component} from 'react';
import "./Nav.scss";
import {Link} from 'react-router-dom';
import * as ROUTES from "../../../Constants/routes";

class Nav extends Component {
	state={
		checked: false
	}

	closeNav = () => {
		this.setState({checked: false});
	}

	toggleNav = () => {
		this.setState(prevState=> {
			return {
				checked: !prevState.checked
			}
		});
	}

	render(){
		return (
			<div className="navigation">
				<input type="checkbox" checked={this.state.checked} className="navigation__checkbox" id="toggle" />
				<label onClick={this.toggleNav} htmlFor="toggle" className="navigation__button">
					{/* Hamburger icon */}
					<span className="navigation__icon">&nbsp;</span>
				</label>
				<div className="navigation__background">&nbsp;</div>
				<nav className="navigation__nav">
					<div className="navigation__pundit">
						<div className="navigation__list">
							<div onClick={this.closeNav} className="navigation__item navigation__item--1"><Link to={ROUTES.SPONSORS} className="navigation__link"><span>Sponsors</span></Link></div>
							<div onClick={this.closeNav} className="navigation__item navigation__item--2"><Link to={ROUTES.EVENTS} className="navigation__link"><span>Events</span></Link></div>
							<div onClick={this.closeNav} className="navigation__item navigation__item--3"><Link to={ROUTES.TEAM} className="navigation__link"><span>Team</span></Link></div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
