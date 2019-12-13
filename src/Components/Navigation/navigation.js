import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';

import * as ROUTES from '../../Constants/routes';
import * as COLORS from  '../../Constants/colors';

const Navigation = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}><font color={COLORS.BLUE}>Landing</font></Link>
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
