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

	//set up the params
	let params = {
		username: username,
		name: username,
		profilePicture: "default_profile_image",
		bio: "",
		admin: false,
		blocked: false,
	};

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
	//return the result of the query
	return result;
}

export async function getUserGroups(user){
    //console.log("in getUserGroups");
    //let username = user.username;
    if(!user) return;
    let userVal = await getUser(user);
    //console.log("the user:");
    //console.log(userVal);
    //console.log("returning groups");
    return userVal.data.getUser.groups.items;
}

export async function getUserFriends(user){
    //let username = user.username;
    if(!user) return;
    let userVal = await getUser(user);
    return userVal.data.getUser.friends;
}

export async function getUserFriendRequests(user){
    if(!user) return;
    let userVal = await getUser(user);
    return userVal.data.getUser.friendRequests;
}

export async function getUserQuizzes(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUser(username);
    return userVal.data.getUser.quizOwners.data;
}
