import { API, Storage, graphqlOperation  } from "aws-amplify";
import {
  createGroup as createGroupMutation,
  updateGroup as updateGroupMutation,
  createMembers
} from "../graphql/mutations";
import { getGroup as getGroupQuery } from "../graphql/queries";

/** This method creates a group with specified attributes.
 * 
 * @param {*} params the params of the group
 */
export async function createGroup(params) {
  //if the user entered a group picture, put it in the bucket
  let defaultImage = true;
  let image = null;
  if(params.profilePicture !== "default_group_image") {
    defaultImage = false;
    image = params["profilePicture"]
  } 
  params["profilePicture"] = "default_group_image";

  //create a new group using the inputted data
  let res = await API.graphql({
    query: createGroupMutation,
    variables: { input: params },
  });
  let groupID = res.data.createGroup.id;
  //add the user to the group's members
  await addMemberToGroup(params.ownerUsername, groupID);
  //add the image to storage
  if(!defaultImage) {
    const fileName = groupID + "_group_pic";
    await Storage.put(fileName, image);
    params["profilePicture"] = fileName;

    //update the group with the image
    res = await API.graphql({
      query: updateGroupMutation,
      variables: { input: 
      {
        id: groupID,
        profilePicture: params["profilePicture"]
      } },
    });
    
  }
  return res.data.updateGroup;
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


export async function addMemberToGroup(memberID, groupID) {
  let params = {
    userID: memberID,
    groupID: groupID,
  }
  let res = await API.graphql({
    query: createMembers,
    variables: { input: params },
  });
  return res;
}