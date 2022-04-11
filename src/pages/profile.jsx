import React from "react";
import { Button } from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { getUser } from "../databaseFunctions/users";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      username: "",
      name: "",
      birthdate: "",
      email: "",
      profile_pic: null,
      biography: "",
      show: false,
    };

  }

  async componentDidMount() {
    this.user = await Auth.currentAuthenticatedUser();
    console.log("Updating profile");
    let userSettings = await Auth.currentUserInfo();
    let userDatabase = await getUser(this.user.username);
    console.log(userDatabase);
    this.setState({
      username: userSettings.username,
      name: userSettings.attributes.name,
      birthdate: userSettings.attributes.birthdate,
      email: userSettings.attributes.email,
      profile_pic: userDatabase.profilePicture,
      biography: userDatabase.bio,
    });
    //load the picture from storage
    try {
      const image = await Storage.get(userDatabase.profilePicture);
      this.setState({ profile_pic: image });
    } catch (error) {
      console.log("Error occured: " + error);
    }
  }

  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row align-items-center my-5">
            <h1 className="col-11">Profile</h1>
            <Link to={{ pathname: "/profileEdit"}}>
              <Button variant="outline-primary" className="col-1 float-end">Edit Profile </Button>{" "}
            </Link>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-1">
              <img
                id="profile_pic_display"
                className="img-fluid rounded-circle my-auto"
                src={this.state.profile_pic}
                alt=""
              />
            </div>
            <h3 className="font-weight-light col-3 my-auto">
              {this.state.username}
            </h3>
          </div>

          <div className="row">
            <h4 className="col-1">Name:</h4>
            <h4 className="col-11 ps-4">{this.state.name}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Email:</h4>
            <h4 className="col-11 ps-4">{this.state.email}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Birthdate:</h4>
            <h4 className="col-11 ps-4">{this.state.birthdate}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Bio:</h4>
            <h4 className="col-11 ps-4">{this.state.biography}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
