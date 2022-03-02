//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import { createGroup as createGroupMutation } from "../graphql/mutations";

export async function createGroup(id, groupName, User, username) {
  //if the User did not enter a title, don't create a post
  if (!id) return;

  const fileName = id + "_profile_pic";
  let params = {
    id: id,
    name: groupName,
    profilePicture: fileName,
    owner: User,
    ownerUsername: username,
  };

  //create a new Post using the form data
  await API.graphql({
    query: createGroupMutation,
    variables: { input: params },
  });
}

// export async function updateUser(user, inputs) {
//   //if the was no username specified, don't update the user
//   let username = user.username;
//   if (!username) return;
//   let params = {
//     username: username,
//   };
//   //add each key-value pair in the inputs to the params
//   let keys = Object.keys(inputs);
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     if (key === "profilePicture") {
//       // Update the image
//       const fileName = username + "_profile_pic";
//       await Storage.put(fileName, inputs[key]);
//       params[key] = fileName;
//     } else params[key] = inputs[key];
//   }
//   //update the  a new Post using the form data
//   await API.graphql({
//     query: updateUserMutation,
//     variables: { input: params },
//   });
// }
