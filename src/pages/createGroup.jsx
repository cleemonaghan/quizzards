import React from "react";
import { createGroup } from "../databaseFunctions/groups";
import "@aws-amplify/ui-react/styles.css";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";

import { Navigate } from "react-router";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      id: null,
      name: "",
      biography: "",
      profile_pic: null,
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  async componentDidMount() {
    try {
      this.user = await Auth.currentAuthenticatedUser();

      // get default file image
      this.defaultImage = await Storage.get("default_group_image");

      //load the image if there is one
      this.tempPhoto = this.defaultImage;
      this.setState({ profile_pic: "default_group_image" });
    } catch (err) {
      console.log("There was an error: ", err);
    }
  }

  /**
   * This method updates the user's attributes in AWS Cognito and in the database.
   */
  async updateAttributes() {
    let params = {
      name: this.state.name,
      bio: this.state.biography,
      profilePicture: this.state.profile_pic,
      ownerUsername: this.user.username,
      userGroupOwnersId: this.user.username,
    };
    //create the group
    let res = await createGroup(params);
    return res;
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
          profile_pic: "default_group_image",
        });
      } else if (event.target.files[0]) {
        // Update the temp photo and the state.profile_pic
        let file = event.target.files[0];
        if (file.size < 10000000) {
          this.tempPhoto = URL.createObjectURL(file);
          this.setState({
            profile_pic: file,
          });
        } else {
          //the file was too big, so revert to the default
          this.tempPhoto = this.defaultImage;
          this.setState({
            profile_pic: "default_group_image",
          });
        }
        console.log(file);
      }
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    // create the group
    let res = await this.updateAttributes();

    this.setState({ id: res.id });

    //reroute to different page?
    this.setState({ submit: true });
  }

  render() {
    if (this.state.submit) {
      //route to the newly created group page
      return <Navigate to={"/groupPage/" + this.state.id} />;
    }
    return (
      <div className="create_group">
        <div className="container">
          <h1 className="font-weight-light my-5">Create Group</h1>
          <Form onSubmit={this.handleSubmit}>
            {/* Name */}
            <Form.Group className="mb-3" controlId="name">
              <FloatingLabel label="Name" className="mb-3">
                <Form.Control
                  name="name"
                  type="text"
                  src={this.state.name}
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
            <div className="mb-3">
              <img
                id="profile_pic_display"
                className="img-fluid" // col-2 ms-4 mt-2 mb-0 px-2 py-2"
                alt=""
                src={this.tempPhoto}
                style={{ height: "200px", width: "400px" }}
              />
            </div>
            {/* Color Theme */}
            {/* <Form.Group className="mb-3" controlId="color_theme">
              <Form.Label>Theme Color</Form.Label>
              <Form.Control
                name="color_theme"
                type="color"
                defaultValue="#563d7c"
                title="Choose your color"
              />
            </Form.Group> */}
            {/* Biography */}
            <Form.Group className="mb-3" controlId="biography">
              <FloatingLabel label="Group description" className="mb-3">
                <Form.Control
                  name="biography"
                  type="text"
                  src={this.state.biography}
                  onChange={this.handleChange}
                />
              </FloatingLabel>
            </Form.Group>
            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Create Group
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreateGroup;
