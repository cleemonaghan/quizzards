import { API, Storage, graphqlOperation  } from "aws-amplify";
import {
  createGroup as createGroupMutation,
  updateGroup as updateGroupMutation,
} from "../graphql/mutations";
import { getGroup as getGroupQuery } from "../graphql/queries";

/** This method creates a group with specified attributes.
 * 
 * @param {*} params the params of the group
 */
export async function createGroup(params) {
  //if the user didn't enter a profile picture, give them a default one
  if(!params.profilePicture) {
    params.profilePicture = "default_profile_image";
  } 
  console.log("Creating group...");
  //create a new group using the inputted data
  let result = API.graphql(graphqlOperation(createGroupMutation, {input: params}));
  /*await API.graphql({
    query: createGroupMutation,
    variables: { input: params },
  });*/
  console.log("Created group!");
  console.log(result);
}

/** This method updates the attributes of a specified group.
 * 
 * @param {*} id The ID of the group
 * @param {*} inputs the attributes and values we are updating for the group
 * @returns None
 */
export async function updateGroup(id, inputs) {
  //if the was no id specified, don't update the group
  if (!id) return;
  let params = {
    id: id,
  };
  //add each key-value pair in the inputs to the params
  let keys = Object.keys(inputs);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (key === "profilePicture") {
      // Update the image
      const fileName = id + "_profile_pic";
      await Storage.put(fileName, inputs[key]);
      params[key] = fileName;
    } else params[key] = inputs[key];
  }
  //update the group using the inputed data
  await API.graphql({
    query: updateGroupMutation,
    variables: { input: params },
  });
}

/** This method fetches and returns the group with the specifed ID.
 * 
 * @param {*} id The ID of the specified group
 * @returns a json with the group's attributes
 */
export async function getGroup(id) {
  //if the was no username specified, don't update the user
  if (!id) return;
  //update the  a new Post using the form data
  let result = await API.graphql({
    query: getGroupQuery,
    variables: { id: id },
  });
  return result.data.getGroup;
}
