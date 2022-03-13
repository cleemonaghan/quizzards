import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { ProfileEdit } from "../components";
import { getUser } from "../databaseFunctions/users";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      username: "",
      name: "",
      birthdate: "",
      email: "",
      color_theme: "blue",
      profile_pic: null,
      biography: "",
      show: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  async componentDidMount() {
    this.user = await Auth.currentAuthenticatedUser();
    this.updateProfile();
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  async updateProfile() {
    let userSettings = await Auth.currentUserInfo();
    let userDatabase = await getUser(this.user.username);
    this.setState({
      username: userSettings.username,
      name: userSettings.attributes.name,
      birthdate: userSettings.attributes.birthdate,
      email: userSettings.attributes.email,
      color_theme: "blue", //we need to ensure this is updated
      profile_pic: userDatabase.profilePicture,
      biography: userDatabase.bio,
    });
    //load the picture from storage
    try {
      const image = await Storage.get(this.state.profile_pic);
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
            <Button
              variant="outline-primary"
              onClick={this.handleShow}
              className="col-1 float-end"
            >
              Edit Profile
            </Button>
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

          <div className="row align-items-center my-5">
            <div className="col-5">
              <Offcanvas
                show={this.state.show}
                onHide={this.handleClose}
                placement={"top"}
                style={{ height: "100vh" }}
                onExit={this.updateProfile}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Edit Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ProfileEdit close={this.handleClose}></ProfileEdit>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
