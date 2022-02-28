import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { photo } from "../images";
import { Auth } from "aws-amplify";
import { ProfileEdit } from "../components";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.user = null;
		this.state = {
			username: "",
			family_name: "",
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
		try {
			let userSettings = await Auth.currentUserInfo();
			this.setState({
				username: userSettings.username,
				family_name: userSettings.attributes.family_name,
				name: userSettings.attributes.name,
				birthdate: userSettings.attributes.birthdate,
				email: userSettings.attributes.email,
				color_theme: "blue", //we need to ensure this is updated
				profile_pic: photo,
				biography: "",
			});
		} catch (err) {
			console.log("There was an error logging: ", err);
		}
	}

	render() {
		return (
			<div className="profile">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-5">
							<Button
								variant="primary"
								onClick={this.handleShow}
								className="me-2"
							>
								Edit Profile
							</Button>
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
									<ProfileEdit></ProfileEdit>
								</Offcanvas.Body>
							</Offcanvas>
							<h1 className="font-weight-light">Profile</h1>
							{/* Username */}
							<p>{this.state.username}</p>
							{/* First Name and Last Name*/}
							<p>{this.state.name + " " + this.state.family_name}</p>
							{/* Email address */}
							<p>{this.state.email}</p>
							{/* Birth Date */}
							<p>{this.state.birthdate}</p>
							<div>
								<img
									id="profile_pic_display"
									className="img-fluid rounded-circle" // col-2 ms-4 mt-2 mb-0 px-2 py-2"
									alt=""
									src={this.state.profile_pic}
								/>
							</div>
							<p>{this.state.biography}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
