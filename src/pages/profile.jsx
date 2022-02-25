import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { photo } from "../images";
import { Auth } from "aws-amplify";

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
		};

		this.fileInput = React.createRef();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		try {
			this.user = await Auth.currentAuthenticatedUser();
			let userSettings = await Auth.currentUserInfo();
			this.setState({
				username: userSettings.username,
				family_name: userSettings.attributes.family_name,
				name: userSettings.attributes.name,
				birthdate: userSettings.attributes.birthdate,
				email: userSettings.attributes.email,
				color_theme: "blue", //we need to ensure this is updated
				profile_pic: photo,
			});
		} catch (err) {
			console.log("There was an error logging: ", err);
		}
	}

	/**
	 * This method updates the user's attributes in AWS Cognito and in the database.
	 */
	async updateAttributes() {
		let params = {
			family_name: this.state.family_name,
			name: this.state.name,
			birthdate: this.state.birthdate,
		};
		await Auth.updateUserAttributes(this.user, params);
	}

	handleChange(event) {
		let target = event.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		let name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		//console.log(event);
		alert("Your name is: " + this.state.name);
		event.preventDefault();
		//update the profile_pic_display image
		//this.setState({
		//	profile_pic: this.fileInput.current.value,
		//});
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
						{/* First Name */}
						<Form.Group className="mb-3" controlId="name">
							<FloatingLabel label="First Name" className="mb-3">
								<Form.Control
									name="name"
									type="text"
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</FloatingLabel>
						</Form.Group>
						{/* Last Name */}
						<Form.Group className="mb-3" controlId="family_name">
							<FloatingLabel label="Last Name" className="mb-3">
								<Form.Control
									name="family_name"
									type="text"
									value={this.state.family_name}
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
								name="profile_pic"
								type="file"
								ref={this.fileInput}
							/>
						</Form.Group>
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
						{/* Submit Button */}
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>

					<div className="row align-items-center my-5">
						<div className="col-5">
							<h1 className="font-weight-light">Profile</h1>
							<img
								id="profile_pic_display"
								className="img-fluid rounded-circle col-2 ms-4 mt-2 mb-0 px-2 py-2"
								src={this.state.profile_pic}
								alt=""
							/>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
