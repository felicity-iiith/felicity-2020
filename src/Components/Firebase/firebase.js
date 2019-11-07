import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {config} from '../../Constants/firebase_config';

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    // this.serverValue = app.database.ServerValue;
    // this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    // this.db = app.database();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // *** Auth API ***


  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => {
      this.auth.signOut();
      localStorage.removeItem('authuser');
      window.location = '/'
  }

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
          console.log(authUser);
        // this.user(authUser.uid)
        //   .once('value')
        //   .then(snapshot => {
        //     const dbUser = snapshot.val();

        //     // default empty roles
        //     // if (!dbUser.roles) {
        //     //   dbUser.roles = {};
        //     // }

        //     // merge auth and db user
        //     authUser = {
        //       uid: authUser.uid,
        //       email: authUser.email,
        //       emailVerified: authUser.emailVerified,
        //       providerData: authUser.providerData,
        //       ...dbUser,
        //     };

        //     next(authUser);
        //   });
      } else {
        fallback();
      }
    });

  // *** User API ***

//   user = uid => this.db.ref(`users/${uid}`);

//   users = () => this.db.ref('users');

//   // *** Message API ***

//   message = uid => this.db.ref(`messages/${uid}`);

//   messages = () => this.db.ref('messages');
}

export default Firebase;
