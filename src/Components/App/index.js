import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import GalleryPage from '../Gallery';
import NewUser from '../NewUser';
// import AccountPage from '../Account';
import Admin from '../Admin';

import * as ROUTES from '../../Constants/routes';
import AdminQuiz from '../admin-quiz';
import Home from '../TestHome';

const App = () => (
  <Router>
    <div>
      <Home />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.GALLERY} component={GalleryPage} />
      <Route path={ROUTES.ADMIN} component={Admin} />
      <Route path={ROUTES.ADMINQUIZ} component={AdminQuiz} />
      <Route path={ROUTES.NEWUSER} component={NewUser} />

      {/*<Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
    </div>
  </Router>
);
export default App;
