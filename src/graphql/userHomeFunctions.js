import { API, Storage } from "aws-amplify";
//import { urlSafeDecode } from "../../quizzards/node_modules/@aws-amplify/core/lib-esm";
import { getUser as getUserQuery } from "./queries";

export async function getUserByUsername(usern){
    console.log("in getuserByUsername function");

    let result = await API.graphql({
            query: getUserQuery,
            variables: { username: usern },
        });
    //console.log(user);
    console.log("returning user");
    return result;
}

export async function getUserGroups(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    console.log(userVal);
    return userVal.data.getUser.groups;
}


export async function getUserFriends(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    return userVal.friends;
}

export async function getUserFriendRequests(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    return userVal.friendRequests;
}

export async function getUserQuizzes(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    return userVal.quizOwners;
}

export async function getUserQuizResults(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    return userVal.quizResults;
}