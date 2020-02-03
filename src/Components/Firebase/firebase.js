import app from 'firebase/app';
import 'firebase/firestore';
import {config} from '../../Constants/firebase_config';
import * as COLLECTIONS from '../../Constants/firebase_collections';

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    // this.serverValue = app.database.ServerValue;

    /* Firebase APIs */

    this.db = app.firestore();

  }

  getEventNames = () =>{
    return this.db.collection(COLLECTIONS.EVENT_COLLECTION).get()
      .then(
        collection => {
          var event_names = collection.docs.map(doc=>{ return {title: doc.id, date: doc.data()["Date"], link: "/event/"+doc.id}} );
          console.log("event names: " + JSON.stringify(event_names))
          return event_names;
        }
      )
      .catch(exception => {
          console.log(exception);
        }
      )
  }
  
  getEventDetails = (name) => {
    return this.db.collection(COLLECTIONS.EVENT_COLLECTION).doc(name).get()
      .then(doc => {
          if(!doc.exists){
            throw "event_does_not_exist";
          }
          window.localStorage.setItem(`event_${name}`, JSON.stringify(doc.data()));
          return JSON.stringify(doc.data());
        }
      )
  }
}

export default Firebase;
