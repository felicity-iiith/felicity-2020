// npm install firebase-admin --save

const admin = require('firebase-admin');
let sa = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(sa)
});

let db = admin.firestore();

/* for web
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-firestore.js"></script>

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();
*/

let event_name = "asda";
db.collection("test").doc(event_name).get().then(doc => {
    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });