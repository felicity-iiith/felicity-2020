import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../Constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInGoogle />
  </div>
);

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase.doSignInWithGoogle().then(()=>window.location='/');

    event.preventDefault();
  };

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>

      </form>
    );
  }
}

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export default SignInPage;

export {SignInGoogle};
