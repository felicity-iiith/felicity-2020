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
    var event_details = JSON.parse(window.localStorage.getItem("event_data"));
    if(event_details==null){
      return this.db.collection(COLLECTIONS.EVENT_COLLECTION).get()
        .then(
          collection => {
            var event_data = collection.docs.map(doc=>{return {name: doc.id, data:doc.data()}});
            var event_names = event_data.map(doc=>{ return {title: doc.name, date: doc.data["Date"], link: "/event/"+doc.name}} );
            console.log("event names: " + JSON.stringify(event_names));
            window.localStorage.setItem("event_data", JSON.stringify(event_data));
            return event_names;
          }
        )
        .catch(exception => {
            console.log(exception);
          }
        )
    }
    else{
      let promise = new Promise((resolve, reject)=>{
          var event_names = event_details.map(doc=>{ return {title: doc.name, date: doc.data["Date"], link: "/event/"+doc.name}} );
          resolve(event_names);
      });
      return promise;
    }
  }
  
  getEventDetails = (name) => {
    var event_details = JSON.parse(window.localStorage.getItem("event_data"));
    if(event_details == null){
      return this.getEventNames().then((events)=>{
        for(let i=0;i<events.length;i++){
          if(events[i].name == name) return events[i].data;
        }
        throw "event_does_not_exist";
      });
    }
    else{
      let promise = new Promise((resolve, reject)=>{
        for(let i=0;i<event_details.length;i++){
          if(event_details[i].name == name) resolve(event_details[i].data);
        }
        reject("event_does_not_exist");
      });
      return promise;
    }
    // console.log(name);
    // return this.db.collection(COLLECTIONS.EVENT_COLLECTION).doc(name).get()
    //   .then(doc => {
    //       if(!doc.exists){
    //         throw "event_does_not_exist";
    //       }

    //       console.log(doc.data());
    //       return doc.data();
    //     }
    //   )
  }
}

export default Firebase;
