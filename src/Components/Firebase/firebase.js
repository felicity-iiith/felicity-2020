import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {config} from '../../Constants/firebase_config';

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    // this.serverValue = app.database.ServerValue;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.auth.onAuthStateChanged(auth_user => {
        auth_user? 
          localStorage.setItem('authuser', JSON.stringify(auth_user))
          :localStorage.removeItem('authuser');
      }
    )
  }

  // *** Auth API ***
  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => {
      this.auth.signOut();
      window.location = '/';
  }

  // *** User API ***

//   user = uid => this.db.ref(`users/${uid}`);

//   users = () => this.db.ref('users');

//   // *** Message API ***

//   message = uid => this.db.ref(`messages/${uid}`);

//   messages = () => this.db.ref('messages');
}

export default Firebase;
