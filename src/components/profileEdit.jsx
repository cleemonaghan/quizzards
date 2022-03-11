import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { photo as defaultImage } from "../images";
import { Auth, Storage } from "aws-amplify";

import { updateUser, getUser } from "../databaseFunctions/users";

class ProfileEdit extends React.Component {
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
    };

    this.changedPhoto = false;
    this.tempPhoto = this.state.profile_pic;
    this.defaultImage = null;
    this.defaultImageBlob = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  async componentDidMount() {
    try {
      this.user = await Auth.currentAuthenticatedUser();
      let userSettings = await Auth.currentUserInfo();
      let userDatabase = await getUser(this.user.username);
      this.setState({
        username: userSettings.username,
        name: userSettings.attributes.name,
        birthdate: userSettings.attributes.birthdate,
        email: userSettings.attributes.email,
        color_theme: "blue", //we need to ensure this is updated
        profile_pic: userDatabase.data.getUser.profilePicture,
        biography: userDatabase.data.getUser.bio,
      });

      // get default file image
      this.defaultImage = await Storage.get("default_profile_image");
      fetch(defaultImage)
        .then((res) => res.blob())
        .then((myBlob) => {
          this.defaultImageBlob = myBlob;
        });

      //load the image if there is one
      const image = await Storage.get(this.state.profile_pic);
      this.tempPhoto = image;
      this.setState({ profile_pic: image });
    } catch (err) {
      console.log("There was an error logging: ", err);
    }
  }

  /**
   * This method updates the user's attributes in AWS Cognito and in the database.
   */
  async updateAttributes() {
    let params = {
      name: this.state.name,
      birthdate: this.state.birthdate,
    };
    await Auth.updateUserAttributes(this.user, params);

    //if they changed the photo, update the photo
    if (this.changedPhoto) {
      params = {
        //highlightColor:  this.state.color_theme,
        profilePicture: this.state.profile_pic,
        bio: this.state.biography,
      };
    } else {
      params = {
        //highlightColor:  this.state.color_theme,
        bio: this.state.biography,
      };
    }
    await updateUser(this.user, params);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  onImageChange(event) {
    //check if they they submitted files
    this.changedPhoto = true;
    if (event.target.files) {
      if (event.target.files.length === 0) {
        //no file was uploaded, so revert to the default
        this.tempPhoto = this.defaultImage;
        this.setState({
          profile_pic: this.defaultImageBlob,
        });
      } else if (event.target.files[0]) {
        // Update the temp photo and the state.profile_pic
        let file = event.target.files[0];
        if (file.size < 1000000) {
          this.tempPhoto = URL.createObjectURL(file);
          this.setState({
            profile_pic: file,
          });
        } else {
          //the file was too big, so revert to the default
          this.tempPhoto = this.defaultImage;
          this.setState({
            profile_pic: this.defaultImageBlob,
          });
        }
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    //update the color scheme
    //update the user profile
    this.updateAttributes();
  }

  render() {
    return (
      <div className="profile">
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            {/* Username */}
            <Form.Group className="mb-3" controlId="username">
              <FloatingLabel label="Username" className="mb-3">
                <Form.Control
                  name="username"
                  type="text"
                  value={this.state.username}
                  readOnly
                />
              </FloatingLabel>
            </Form.Group>
            {/* Name */}
            <Form.Group className="mb-3" controlId="name">
              <FloatingLabel label="Name" className="mb-3">
                <Form.Control
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FloatingLabel>
            </Form.Group>
            {/* Email address */}
            <Form.Group className="mb-3" controlId="email">
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  name="email"
                  type="email"
                  value={this.state.email}
                  readOnly
                />
              </FloatingLabel>
            </Form.Group>
            {/* Birth Date */}
            <Form.Group className="mb-3" controlId="birthdate">
              <FloatingLabel label="Birthdate" className="mb-3">
                <Form.Control
                  name="birthdate"
                  type="text"
                  value={this.state.birthdate}
                  onChange={this.handleChange}
                />
              </FloatingLabel>
            </Form.Group>
            {/* Profile Picture */}
            <Form.Group controlId="profile_pic" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                name="profile_pic"
                onChange={this.onImageChange}
                accept="image/png, image/jpeg"
              />
            </Form.Group>
            <div>
              <img
                id="profile_pic_display"
                className="img-fluid rounded-circle" // col-2 ms-4 mt-2 mb-0 px-2 py-2"
                alt=""
                src={this.tempPhoto}
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            {/* Color Theme */}
            <Form.Group className="mb-3" controlId="color_theme">
              <Form.Label>Theme Color</Form.Label>
              <Form.Control
                name="color_theme"
                type="color"
                defaultValue="#563d7c"
                title="Choose your color"
              />
            </Form.Group>
            {/* Biography */}
            <Form.Group className="mb-3" controlId="biography">
              <FloatingLabel label="About me" className="mb-3">
                <Form.Control
                  name="biography"
                  type="text"
                  value={this.state.biography}
                  onChange={this.handleChange}
                />
              </FloatingLabel>
            </Form.Group>
            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default ProfileEdit;
