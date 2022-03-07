//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
	createUser as createUserMutation,
	updateUser as updateUserMutation,
	updateFriends,
} from "../graphql/mutations";
import { getUser as getUserQuery } from "../graphql/queries";
import { photo as defaultImage } from "../images";

export async function createUser(username) {
	console.log("creating user");
	//if the User did not enter a title, don't create a post
	if (!username) return;

	const fileName = username + "_profile_pic";
	let params = {
		username: username,
		name: username,
		profilePicture: fileName,
		//friends: [],
		//friendRequests: [],
		admin: false,
		blocked: false,
	};
	// add a default profile image to their storage
	fetch(defaultImage)
		.then((res) => res.blob())
		.then(async (myBlob) => {
			await Storage.put(fileName, myBlob);
		})
		.catch((err) => console.log("Fetch Error: " + err));
	//console.log(image.size);

	//create a new Post using the form data
	let res = await API.graphql({
		query: createUserMutation,
		variables: { input: params },
	});
	console.log(res);
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

export async function addFriend(username, newFriend){
	
	try{
	//let username = user.username;
	console.log("adding a friend:");
	console.log(username);
	console.log(newFriend);
	if (!username) return;
	if (!newFriend) return;

	let userVal = await getUser(username);
	let newFriendUser = await getUser(newFriend);
	console.log("printing user");
	console.log(userVal);

	let friendObj = userVal.data.getUser.friends;
	let friendArr = friendObj.friends;
	friendArr.push(newFriendUser.data.getUser);
	let params = {
		username: username,
		friends: friendArr,
	};
	let result = await API.graphql({
		query: updateFriends,
		variables: { input: params },
	});

	let friendReq = userVal.data.getUser.friendRequests;
	let friendReqList = friendReq.friends;
	if(friendReqList.contains(newFriendUser.data.getUser)){
		let noMoreRequest = await removeFriend()
	}
	console.log(result);
	await addFriend(newFriend, username);	
	await getUser(username);
	}

	catch(error){
		console.error(error);
	}

}

export async function addFriendRequest(username, newFriend){
	try{
	//let username = user.username;

	if (!username) return;
	if (!newFriend) return;

	let userVal = await getUser(username);
	let newFriendUser = await getUser(newFriend);

	let friendObj = newFriendUser.data.getUser.friendRequests;
	let friendArr = friendObj.friends;
	friendArr.push(userVal.data.getUser);
	let params = {
		username: username,
		friends: friendArr,
	};
	let result = await API.graphql({
		query: updateFriends,
		variables: { input: params },
	});
	}
	catch(error){
		console.error(error);
	}

}

export async function getUser(username) {
	//if the was no username specified, don't update the user
	if (!username) return;
	//update the  a new Post using the form data
	let result = await API.graphql({
		query: getUserQuery,
		variables: { username: username },
	});
	console.log("user");
	console.log(result);
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

export async function getUserQuizzes(username){
   // let username = user.username;
    if(!username) return;
    let userVal = await getUser(username);
    return userVal.data.getUser.quizOwners.data;
}


