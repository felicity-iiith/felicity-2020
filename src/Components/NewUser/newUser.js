import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';

class NewUser extends Component {
    constructor(props){
        super(props);

        let user = JSON.parse(localStorage.getItem('authuser'));
        this.state = {
            id: user.uid,
            username: user.displayName,
            email_id: user.email,
            phone_number: user.phone_number,
        };
    }

    onEditUsername=(e)=>this.setState({username:e.target.value});
    onEditPhoneNumber=(e)=>this.setState({phone_number:e.target.value});
    onSubmit=(e)=>{
        console.log(this.state);
        console.log(this.props.firebase.user(this.state.id).set(this.state));
        e.preventDefault();
    }

    render(){
        return(
            <form>
                <p name="id">{this.state.id}</p>
                <p name="email">{this.state.email_id}</p><br></br>
                <label>User Name</label> <input name='username' value={this.state.username} type='text' onChange={this.onEditUsername}></input> <br></br>
                <label>Phone Number</label> <input name='phone_number' value={this.state.phone_number} onChange={this.onEditPhoneNumber}></input> <br></br>
                <button onClick = {this.onSubmit}>SUBMIT</button>
            </form>
        )
    }
};

const NewUserWithFirebase = compose(
    withRouter,
    withFirebase
)(NewUser);

export default NewUserWithFirebase;