//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
	createUser as createUserMutation,
	updateUser as updateUserMutation,
} from "../graphql/mutations";
import { getUser as getUserQuery } from "../graphql/queries";
import { photo as defaultProfile } from "../images";

export async function createUser(username) {
	//if the User did not enter a title, don't create a post
	if (!username) return;

	const fileName = username + "_profile_pic";
	let params = {
		username: username,
		name: username,
		profilePicture: fileName,
		admin: false,
		blocked: false,
	};
	// add a default profile image to their storage
	await Storage.put(fileName, defaultProfile);
	//create a new Post using the form data
	await API.graphql({
		query: createUserMutation,
		variables: { input: params },
	});
}

export async function updateUser(user, inputs) {
	//if the was no username specified, don't update the user
	let username = user.username;
	if (!username) return;
	let params = {
		username: username,
	};
	//add each key-value pair in the inputs to the params
	let keys = Object.keys(inputs);
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		if (key === "profilePicture") {
			// Update the image
			const fileName = username + "_profile_pic";
			await Storage.put(fileName, inputs[key]);
			params[key] = fileName;
		} else params[key] = inputs[key];
	}
	//update the  a new Post using the form data
	await API.graphql({
		query: updateUserMutation,
		variables: { input: params },
	});
}

export async function getUser(username) {
	//if the was no username specified, don't update the user
	if (!username) return;
	//update the  a new Post using the form data
	let result = await API.graphql({
		query: getUserQuery,
		variables: { username: username },
	});
	return result;
}
