//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
  createUser as createUserMutation,
  updateUser as updateUserMutation,
} from "../graphql/mutations";
import { getUser as getUserQuery } from "../graphql/queries";

/** This method creates a default user with the specified username.
 * 
 * @param {String} username the username of the new user
 */
export async function createUser(username) {
  console.log("creating user");
  //if the User did not enter a title, don't create a post
  if (!username) return;

  //set up the params
  const params = {
    username: username,
    name: username,
    profilePicture: "default_profile_image",
    bio: "",

    friends: [],
    friendRequests: [],

    admin: false,
    blocked: false,
  };

  //create a new user with default settings
  await API.graphql({
    query: createUserMutation,
    variables: { input: params },
  });
}

/** This method updates the specified user's profile setting to the specified values.
 * 
 * @param {String} username the username of the user being updated 
 * @param {*} inputs a json object with the new fields for the user
 * @returns None
 */
export async function updateUser(username, inputs) {
  //if the was no username specified, don't update the user
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
  //update the User using the form data
  await API.graphql({
    query: updateUserMutation,
    variables: { input: params },
  });
}

/** This method fetches and returns the specified user's profile attributes.
 * 
 * @param {String} username the username of the user being fetched
 * @returns a json of the user's attributes
 */
export async function getUser(username) {
  //if the was no username specified, don't update the user
  if (!username) return;
  //update the  a new Post using the form data
  let result = await API.graphql({
    query: getUserQuery,
    variables: { username: username },
  });
  return result.data.getUser;
}

// User Groups ---------------------------

/** This method fetches and returns the specified user's groups.
 * 
 * @param {String} username the username of the user
 * @returns an array of the user's groups
 */
export async function getUserGroups(username) {
  //console.log("in getUserGroups");
  //let username = user.username;
  if (!username) return;
  let userVal = await getUser(username);
  //console.log("the user:");
  //console.log(userVal);
  //console.log("returning groups");
  return userVal.groups.items;
}

// User Quizzes ---------------------------

/** This method fetches and returns the specified user's quizzes.
 * 
 * @param {String} username the username of the user
 * @returns an array of the user's quizzes
 */
export async function getUserQuizzes(username) {
  if (!username) return;
  let userVal = await getUser(username);
  return userVal.quizOwners.data;
}

// User Friends ---------------------------

/** This method fetches and returns the specified user's friends.
 * 
 * @param {String} username the username of the user
 * @returns an array of the user's friends
 */
export async function getUserFriends(username) {
  if (!username) return;
  let userFriends = (await getUser(username)).friends;
  let result = [];
  //fetch the user profile for each friend
  for(let friend in userFriends) {
    result.push((await getUser(friend)));
  }
  return result;
}
/** This method fetches and returns the specified user's friends requests. 
 * 
 * @param {String} username the username of the user
 * @returns an array of other user profiles that have requested to be this user's friend
 */
export async function getUserFriendRequests(username) {
  if (!username) return;
  let userFriendReqs = (await getUser(username)).friendRequests;
  let result = [];
  //fetch the user profile for each friend request
  for(let friend in userFriendReqs) {
    result.push((await getUser(friend)));
  }
  return result;
}
/** This method adds the two inputed users to each other's friend list.
 *  This method also removes the friendUser from the accepting user's 
 *    friend request list, since the request has been accepted.
 * 
 * @param {*} username the username of the user accepting the request
 * @param {*} friendUsername the username of the user requesting to be friends
 * @returns true if the friends were added to each other's friend lists
 */
export async function acceptFriend(username, friendUsername) {
  try {
    //get the user database entries
    let user = await getUser(username);
    let friend = await getUser(friendUsername);
    // get their friend lists
    let userFriendList = user.friends;
    let friendFriendList = friend.friends;
    //add the users to the other user's friend list
    friendFriendList.push(username);
    userFriendList.push(friendUsername);
    //remove friend from user's friend request list
    const index = user.friendRequests.indexOf(friendUsername);
    user.friendRequests.splice(index, 1); // remove the username from the list
    
    //update the database with the new lists
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: username,
          friends: userFriendList,
          friendRequests: user.friendRequests
        },
      },
    });
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: friendUsername,
          friends: friendFriendList,
        },
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/** This method adds a user to another user's friend request list.
 * 
 * @param {*} username the username of the user requesting to be friends
 * @param {*} friendUsername the username of the user they want to be friends with
 * @returns true if the user was added to the other's friend request lists
 */
export async function requestFriend(username, friendUsername) {
  try {
    //get the user database entries
    let friend = await getUser(friendUsername);
    // get their friend lists from the DB
    let friendFriendReqList = friend.friendRequests;
    //add the users to the other user's friend request list
    friendFriendReqList.push(username);
    //update the database with the new list
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: friendUsername,
          friendRequests: friendFriendReqList,
        },
      },
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
