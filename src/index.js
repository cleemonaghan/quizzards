import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Navigation } from "./components";
import {
	Home,
	Quizzes,
	Groups,
	Messages,
	Profile,
	ViewProfile,
	CreateGroup,
	CreateQuiz,
	GroupPage,
	QuizPage,
	GroupEdit,
	AddResult,
	Friends,
} from "./pages";

import { createUser } from "./databaseFunctions/users";

import Amplify, { Hub } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

//Add a listener for the Authenticator
const listener = (data) => {
	switch (data.payload.event) {
		case "signIn":
			console.log("user signed in");
			break;
		case "signUp":
			console.log("user signed up");
			//create a user profile
			createUser(data.payload.data.user.username);
			break;
		case "signOut":
			console.log("user signed out");
			break;
		case "signIn_failure":
			console.log("user sign in failed");
			break;
		case "tokenRefresh":
			console.log("token refresh succeeded");
			break;
		case "tokenRefresh_failure":
			console.log("token refresh failed");
			break;
		case "configured":
			console.log("the Auth module is configured");
			break;
		default:
			console.log("Unknown log-in");
	}
};
Hub.listen("auth", listener);

// THis ensures that username case does not matter
// and it stores the username in lowercase
const services = {
	async handleSignUp(formData) {
		let { username, password, attributes } = formData;
		// custom username
		username = username.toLowerCase();
		return Auth.signUp({
			username,
			password,
			attributes,
		});
	},
};

//render the App
ReactDOM.render(
	<Authenticator services={services}>
		{({ signOut }) => (
			<main>
				<Router>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/quizzes" element={<Quizzes />} />
						<Route path="/groups" element={<Groups />} />
						<Route path="/messages" element={<Messages />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/profile/:username" element={<ViewProfile />} />
						<Route path="/groupPage/:id" element={<GroupPage />} />
						<Route path="/quizPage" element={<QuizPage />} />
						<Route path="/createGroup" element={<CreateGroup />} />
						<Route path="/createQuiz" element={<CreateQuiz />} />
						<Route path="/groupEdit/:id" element={<GroupEdit /> } />
						<Route path="/addResult" element={<AddResult />} />
						<Route path="/friends" element={<Friends />} />
					</Routes>
				</Router>
			</main>
		)}
	</Authenticator>,

	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.css";

// import Amplify from "aws-amplify";
// import config from "./aws-exports";
// Amplify.configure(config);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
