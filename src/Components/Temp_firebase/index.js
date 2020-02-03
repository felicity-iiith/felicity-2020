import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';


class FirebaseDisplayTest extends Component{
    constructor(props){
      super(props);
      this.state = {a: null, b:null};
    }
    componentDidMount(){
      this.props.firebase.getEventNames()
        .then((event_names)=>{
              console.log();
              this.setState({a: event_names})
            }
          );
  
      if(this.props.match.params["eventName"]!=null){
        let event_name = this.props.match.params["eventName"];
        this.props.firebase.getEventDetails(event_name)
          .then((event_details)=>{
              this.setState({b:event_details});
            }
          )
          .catch(exception => this.setState({b:exception}))
      }
    }

    render(){ return (
      <div>
        <p>{this.state['a']}</p> 
        <p>{this.state['b']}</p>
      </div>
        
      ) 
    }
}

const FirebaseTest = compose(
    withRouter,
    withFirebase,
  )(FirebaseDisplayTest);

export default FirebaseTest;
