import { API, Storage } from "aws-amplify";
//import { urlSafeDecode } from "../../quizzards/node_modules/@aws-amplify/core/lib-esm";
import {
	createUser as createUserMutation,
	updateUser as updateUserMutation,
} from "../graphql/mutations";
import { getUser as getUserQuery } from "./queries";

export async function getUserByUsername(usern){
    console.log("in getuserByUsername function");
    if (!usern) return;
    let result = await API.graphql({
            query: getUserQuery,
            variables: { username: usern },
        });
    //console.log(user);
    console.log("returning user");
    return result;
}

export async function getUserGroups(user){
    //console.log("in getUserGroups");
    //let username = user.username;
    if(!user) return;
    let userVal = await getUserByUsername(user);
    //console.log("the user:");
    //console.log(userVal);
    //console.log("returning groups");
    return userVal.data.getUser.groups.items;
}


export async function getUserFriends(user){
    //let username = user.username;
    if(!user) return;
    let userVal = await getUserByUsername(user);
    return userVal.data.getUser.friends;
}

export async function getUserFriendRequests(user){
    if(!user) return;
    let userVal = await getUserByUsername(user);
    return userVal.data.getUser.friendRequests;
}

export async function getUserQuizzes(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    return userVal.data.getUser.quizOwners.data;
}

