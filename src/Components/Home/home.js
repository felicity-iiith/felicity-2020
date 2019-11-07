import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";

import Avatar from "@material-ui/core/Avatar";
// import { compose } from 'recompose';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import { removeTypeDuplicates } from "@babel/types";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      user: true, //JSON.parse(localStorage.getItem("authuser")),
      name: "Archit ",
      Mobile_Number: "1234567890",
      Email: "abc@example.com",
      College: "IIIT HYDERABAD",
      dp_url:
        "https://i.pinimg.com/originals/b1/13/5c/b1135cde79e44a9da933b8017b91cfad.png"
    };
  }

  render() {
    if (this.state.user) {
      return (
        <Card style={{ maxWidth: 345, backgroundColor: "skyblue" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: red[500] }}>
                {this.state.name.charAt(0)}
              </Avatar>
            }
            action={
              <Link to={ROUTES.LANDING}>
                <CloseIcon />
              </Link>
            }
            title="Profile Details"
          />
          <CardMedia
            style={{ height: 0, paddingTop: "100%" }}
            image={this.state.dp_url}
            title="Profile Pic"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="h2">
              <h2>Name : {this.state.name}</h2>
              <h2>Mobile Number : {this.state.Mobile_Number}</h2>
              <h2>Email : {this.state.Email}</h2>
              <h2>College : {this.state.College}</h2>
            </Typography>
          </CardContent>
        </Card>
      );
    } else {
      return <div>Not Logged IN</div>;
    }
  }
}

export default HomePage;
