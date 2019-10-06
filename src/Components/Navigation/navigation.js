import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';

import * as ROUTES from '../../Constants/routes';

const Navigation = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <SignOut></SignOut>
    </li>
  </ul>
);

export default Navigation;