//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
  createUser as createUserMutation,
  updateUser as updateUserMutation,
  createUserAnswers,
} from "../graphql/mutations";
import {
  getUser as getUserQuery,
  listUsers,
  listUserAnswers as listUserAnswersQuery,
 } from "../graphql/queries";
import { listAllQuizzes } from "./quizzes";

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
    outgoingFriendRequests: [],

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

/** This method fetches and returns the all users.
 *
 * @returns a list of all the users
 */
export async function listAllUsers() {
  let params = {
    limit: 100,
    //filter: {
    // Visibility: "public",
    //},
  };
  let result = await API.graphql({
    query: listUsers,
    variables: { input: params },
  });
  return result.data.listUsers;
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
  console.log(userVal);
  return userVal.groups.items;
}

export async function getUserOwnedGroups(username) {
  //console.log("in getUserGroups");
  //let username = user.username;
  if (!username) return;
  let userVal = await getUser(username);
  //console.log("returning groups");
  return userVal.groupOwners.items;
}

// User Quizzes ---------------------------

/** This method fetches and returns the quizzes that the specified user has taken.
 *
 * @param {String} username the username of the user
 * @returns an array of the user's taken quizzes
 */
export async function getUserQuizzes(username) {
  if (!username) return;
  let userAnswers = await getUserAnswers(username);
  let quizzes = [];
  for (let i = 0; i < userAnswers.length; i++) {
    if (!quizzes.includes(userAnswers[i].quiz)) {
      quizzes.push(userAnswers[i].quiz);
    }
  }
  return quizzes;
  //return userVal.quiz.data;
}

/** This method fetches and returns the quizzes that the specified user has created.
 *
 * @param {String} username the username of the user
 * @returns an array of the user's created quizzes
 */
export async function getUserOwnedQuizzes(username) {
  if (!username) return;
  let userVal = await getUser(username);
  return userVal.quizOwners.items;
}


export async function inputUserQuiz(params) {
  let res = await API.graphql({
    query: createUserAnswers,
    variables: { input: params },
  });

  return res.data.createUserAnswers;
}

export async function getUserAnswers(username) {
  let params = {
    filter: {
      username: {
        eq: username, // filter username == username
      },
    },
  };
  let res = await API.graphql({
    query: listUserAnswersQuery,
    variables: params,
  });
  return res.data.listUserAnswers.items;
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
  for (let friend in userFriends) {
    result.push(await getUser(friend));
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
  for (let friend in userFriendReqs) {
    result.push(await getUser(friend));
  }
  return result;
}
/** This method fetches and returns the specified user's outgoing friends requests.
 *
 * @param {String} username the username of the user
 * @returns an array of other user profiles that have requested to be this user's friend
 */
export async function getUserOutgoingFriendRequests(username) {
  if (!username) return;
  let userFriendReqs = (await getUser(username)).outgoingFriendRequests;
  let result = [];
  //fetch the user profile for each friend request
  for (let friend in userFriendReqs) {
    result.push(await getUser(friend));
  }
  return result;
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
    let user = await getUser(username);
    let friend = await getUser(friendUsername);
    // get their friend lists from the DB
    let userOutgoingFriendRequests = user.outgoingFriendRequests;
    let friendFriendReqList = friend.friendRequests;

    //add the users to the other user's friend request list
    if (!userOutgoingFriendRequests.includes(friendUsername)) {
      //if our username is not in the friend's list, add it and update the db
      userOutgoingFriendRequests.push(friendUsername);
      await API.graphql({
        query: updateUserMutation,
        variables: {
          input: {
            username: username,
            outgoingFriendRequests: userOutgoingFriendRequests,
          },
        },
      });
    }
    if (!friendFriendReqList.includes(username)) {
      //if our friend's username is not in our list, add it and update the db
      friendFriendReqList.push(username);
      await API.graphql({
        query: updateUserMutation,
        variables: {
          input: {
            username: friendUsername,
            friendRequests: friendFriendReqList,
          },
        },
      });
    }
    return;
  } catch (error) {
    console.error(error);
    return;
  }
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
    let index = user.friendRequests.indexOf(friendUsername);
    user.friendRequests.splice(index, 1); // remove the username from the list
    //remove friend from user's friend request list
    index = friend.outgoingFriendRequests.indexOf(username);
    friend.outgoingFriendRequests.splice(index, 1); // remove the username from the list

    //update the database with the new lists
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: username,
          friends: userFriendList,
          friendRequests: user.friendRequests,
        },
      },
    });
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: friendUsername,
          friends: friendFriendList,
          outgoingFriendRequests: friend.outgoingFriendRequests,
        },
      },
    });
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}

/** This method also removes the friendUser from the accepting user's
 *    friend request list, since the request has been rejected.
 *
 * @param {*} username the username of the user rejecting the request
 * @param {*} friendUsername the username of the user requesting to be friends
 * @returns true if the friends were added to each other's friend lists
 */
export async function rejectFriend(username, friendUsername) {
  try {
    //get the user database entries
    let user = await getUser(username);
    let friend = await getUser(friendUsername);

    //remove friend from user's friend request list
    let index = user.friendRequests.indexOf(friendUsername);
    user.friendRequests.splice(index, 1); // remove the username from the list
    //remove friend from friend's outgoing friend request list
    index = friend.outgoingFriendRequests.indexOf(username);
    friend.outgoingFriendRequests.splice(index, 1); // remove the username from the list

    //update the database with the new lists
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: username,
          friendRequests: user.friendRequests,
        },
      },
    });
    await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          username: friendUsername,
          outgoingFriendRequests: friend.outgoingFriendRequests,
        },
      },
    });
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getUserSuggestedQuizzes(friendList, userQuizzes, userOwnedQuizzes){
  const shuffleArray = function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  let ownedArr = [];
  for(let i = 0; i<userOwnedQuizzes.length; i++){
    ownedArr.push(userOwnedQuizzes[i].id);
  }

  let quizArr = [];
  for(let i = 0; i<userQuizzes.length; i++){
    quizArr.push(userQuizzes[i].id);
  }
  const MAX_PER_FRIEND = 2;
  const MAX_TOTAL = 10;
  let shuffled = shuffleArray(friendList);
  var result = [];
  let newQuizID = [];
  //go through each friend
  for (let index in shuffled) {
    //get the quizzes that the friend has taken and add them to the list
    let friendQuizzes = await getUserOwnedQuizzes(shuffled[index]);
    //added tracks the number of groups we have added from this user's group list
    let added = 0;
    let quizzes = shuffleArray(friendQuizzes);
    for (let i in quizzes) {
      if (!ownedArr.includes(quizzes[i].id) && !quizArr.includes(quizzes[i].id) && !newQuizID.includes(quizzes[i].id)) {
        //if the quiz has not already been seen by the user
        result.push(quizzes[i]);
        newQuizID.push(quizzes[i].id);
        added++;
      }
      //if we added more than 2 groups, move onto the next friend
      if (added >= MAX_PER_FRIEND) break;
    }
    //if we have 4 or more results in our list, we have enough, so break
    if (result.length >= MAX_TOTAL){
      return result;
    }
      
  }

  //if we still do not have enough suggested quizzes, just add random quizzes from the list
  let allQuizzes = await listAllQuizzes();
  for(let i = 0; i < allQuizzes.length; i++){
    //if you don't have enough suggested quizzes, continue
    if(result.length >= MAX_TOTAL){
      return result;
    }
    //if there is a quiz you have not come across, add to the list
    if (!ownedArr.includes(allQuizzes[i].id) && !quizArr.includes(allQuizzes[i].id) && !newQuizID.includes(allQuizzes[i].id)) {
        result.push(allQuizzes[i]);
        newQuizID.push(allQuizzes[i].id);
    }

  }

  return result;
}

export async function recommendFriends(
  username,
  friendList,
  friendReqList,
  outgoingFriendReqList
) {
  const shuffleArray = function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const MAX_PER_FRIEND = 2;
  const MAX_TOTAL = 8;
  let shuffled = shuffleArray(friendList);
  var result = [];
  //go through each friend
  for (let index in shuffled) {
    //if the friend owns any groups that this user isn't a part of, add them to result
    let friendInfo = await getUser(shuffled[index]);
    //added tracks the number of groups we have added from this user's group list
    let added = 0;
    let friendFriendList = shuffleArray(friendInfo.friends);
    // go through all our friend's friends
    for (let j in friendFriendList) {
      if (
        username !== friendFriendList[j] &&
        !friendList.includes(friendFriendList[j]) &&
        !friendReqList.includes(friendFriendList[j]) &&
        !outgoingFriendReqList.includes(friendFriendList[j]) &&
        !result.includes(friendFriendList[j])
      ) {
        //if our friend's friend is not in any of our lists, add it to the result
        result.push(friendFriendList[j]);
        added++;
      }
      //if we added more than 2 groups, move onto the next friend
      if (added >= MAX_PER_FRIEND) break;
    }
    //if we have 4 or more results in our list, we have enough, so break
    if (result.length >= MAX_TOTAL) return result;
  }
  let listAllUsers = await API.graphql({
    query: listUsers,
    variables: { limit: 100 },
  });
  listAllUsers = shuffleArray(listAllUsers.data.listUsers.items);

  let i = 0;
  while (result.length < MAX_TOTAL) {
    //add random friends until we reach the expected number
    if (listAllUsers[i] === undefined) {
      return result;
    }
    let currentUsername = listAllUsers[i].username;
    if (
      username !== currentUsername &&
      !friendList.includes(currentUsername) &&
      !friendReqList.includes(currentUsername) &&
      !outgoingFriendReqList.includes(currentUsername) &&
      !result.includes(currentUsername)
    ) {
      //add the user to the recommended list
      result.push(currentUsername);
    }

    i++;
  }
  return result;
}


