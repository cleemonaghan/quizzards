//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
	createUser as createUserMutation,
	updateUser as updateUserMutation,
} from "../graphql/mutations";
import { getUser as getUserQuery } from "../graphql/queries";

export async function createUser(username) {
	//if the User did not enter a title, don't create a post
	if (!username) return;
	let params = {
		userID: username,
	};
	//create a new Post using the form data
	await API.graphql({
		query: createUserMutation,
		variables: { input: params },
	});
	//if they added an image, add the image to the storage
	/*
	if (params.image) {
		const image = await Storage.get(params.image);
		params.image = image;
	}
    */
}

export async function updateUser(user, inputs) {
	//if the was no username specified, don't update the user
	let username = user.username;
	if (!username) return;
	let userVal = await getUserbyUsername(username);
	let params = {
		id: userVal.id,
		userID: username,
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
	console.log(params);
	//update the  a new Post using the form data
	let result = await API.graphql({
		query: updateUserMutation,
		variables: { input: params },
	});
	console.log(result);
}

async function getUserbyUsername(username) {
	const user = await API.graphql({
		query: getUserQuery,
		variables: { userID: username },
	});
	/*
	const user = await API.graphql({
		query: getUserQuery,
		variables: { userID: username },
	});
	const s3Image = await Storage.get(user.data.getUser.image);
	user.data.getUser.s3Image = s3Image;*/
	console.log("User:", user);
	return user;
}
