import React, {Component} from 'react';

import { withFirebase } from '../Firebase';

class SignOutButton extends Component{
    constructor(props){
        super(props);

        this.state = {user:JSON.parse(localStorage.getItem('authuser'))};
    }
    
    render(){
        return (
            <div>
                {this.state.user && <button type="button" onClick={this.props.firebase.doSignOut}>
                Sign Out
                 </button>}
            </div>
            
        )
    }
};

export default withFirebase(SignOutButton);
