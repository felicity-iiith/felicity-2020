import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// import Navigation from '../Navigation';
// import LandingPage from '../Landing';
// import SignInPage from '../SignIn';
// import HomePage from '../Home';
// import GalleryPage from '../Gallery';
// import NewUser from '../NewUser';
// import AccountPage from '../Account';
// import Admin from '../Admin';

import * as ROUTES from '../../Constants/routes';
// import AdminQuiz from '../admin-quiz';
import Home from '../TestHome';
import Nav from '../TestHome/Navbar/Nav';

import Sponsors from '../TestHome/Sponsors/Sponsors';
import Events from '../TestHome/Events/Events';
import Event from '../TestHome/Event/Event';
import Team from '../TestHome/Team/Team';
import Contact from '../TestHome/Contact/Contact';


// SCSS FILES

const App = () => (
  <Router>
    <div>
      {/* <Home /> */}

        <Nav />
        <Route exact path={ROUTES.LANDING} component={Home} />
        {/* <Route path={ROUTES.SIGN_IN} component={SignInPage} /> */}
        {/* <Route path={ROUTES.GALLERY} component={GalleryPage} /> */}
        <Route path={ROUTES.SPONSORS} component={Sponsors} />
        <Route path={ROUTES.EVENTS} component={Events} />
        <Route path={ROUTES.EVENT_NAME} component={Event} />
        <Route path={ROUTES.EVENT} component={Events} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route path={ROUTES.TEAM} component={Team} />
        {/* <Route path={ROUTES.ADMIN} component={Admin} /> */}
        {/* <Route path={ROUTES.ADMINQUIZ} component={AdminQuiz} /> */}
        {/* <Route path={ROUTES.NEWUSER} component={NewUser} /> */}

    </div>
  </Router>
);
export default App;
