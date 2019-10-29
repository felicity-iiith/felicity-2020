import React from 'react';
import * as ROUTES from '../../Constants/routes';

// import { compose } from 'recompose';


const HomePage = () => {
  if(localStorage.getItem('authuser')!=null)
    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        
      </div>
    );
  else window.location = ROUTES.SIGN_IN;
};

export default HomePage;
