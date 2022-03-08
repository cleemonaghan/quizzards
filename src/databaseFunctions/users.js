//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
	createUser as createUserMutation,
	updateUser as updateUserMutation,
	updateFriends,
	createFriends,
	createFriendRequests,
} from "../graphql/mutations";
import { getUser as getUserQuery } from "../graphql/queries";

export async function createUser(username) {
	console.log("creating user");
	//if the User did not enter a title, don't create a post
	if (!username) return;

	//set up the params
	let params = {
		username: username,
		name: username,
		profilePicture: fileName,
		//friends: [],
		//friendRequests: [],
		admin: false,
		blocked: false,

		friendsFriendsId: username,
		friendRequestsFriendRequestsId: username,
		userFriendsId: username,
		userFriendRequestsId: username,
	};

	//create a new user with default settings
	await API.graphql({
		query: createUserMutation,
		variables: { input: params },
	});
	params = {
		username: username,
	};
	//create Friend entry and FriendRequests
	await API.graphql({
		query: createFriends,
		variables: { input: params },
	});
	await API.graphql({
		query: createFriendRequests,
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

export async function addFriend(username, newFriend) {
	try {
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
		if (friendReqList.contains(newFriendUser.data.getUser)) {
			let noMoreRequest = await removeFriend();
		}
		console.log(result);
		await addFriend(newFriend, username);
		await getUser(username);
	} catch (error) {
		console.error(error);
	}
}

export async function addFriendRequest(username, newFriend) {
	try {
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
	} catch (error) {
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

export async function getUserGroups(username) {
	//console.log("in getUserGroups");
	//let username = user.username;
	if (!username) return;
	let userVal = await getUser(username);
	//console.log("the user:");
	//console.log(userVal);
	//console.log("returning groups");
	return userVal.data.getUser.groups.items;
}

export async function getUserQuizzes(username) {
	if (!username) return;
	let userVal = await getUser(username);
	return userVal.data.getUser.quizOwners.data;
}

export async function getUserFriends(username) {
	if (!username) return;
	let userVal = await getUser(username);
	return userVal.data.getUser.friends;
}

export async function getUserFriendRequests(username) {
	if (!username) return;
	let userVal = await getUser(username);
	return userVal.data.getUser.friendRequests;
}

export async function acceptFriend(username, friendUsername) {
	//get the user database entries
	let user = (await getUser(username)).data.getUser;
	let friend = (await getUser(friendUsername)).data.getUser;
	// get their friend lists from the DB
	let userFriendList = user.friends;
	let friendFriendList = friend.friends;
	//add the users to the other user's friend list

	console.log(user);
	console.log(friend);

	return "success";
}
