import { API, Storage } from "aws-amplify";
import {
  createGroup as createGroupMutation,
  updateGroup as updateGroupMutation,
  createMembers,
} from "../graphql/mutations";
import { getGroup as getGroupQuery } from "../graphql/queries";

import { getUser } from "./users";

/** This method creates a group with specified attributes.
 *
 * @param {*} params the params of the group
 */
export async function createGroup(params) {
  //if the user entered a group picture, put it in the bucket
  let defaultImage = true;
  let image = null;
  if (params.profilePicture !== "default_group_image") {
    defaultImage = false;
    image = params["profilePicture"];
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
  if (!defaultImage) {
    const fileName = groupID + "_group_pic";
    await Storage.put(fileName, image);
    params["profilePicture"] = fileName;

    //update the group with the image
    res = await API.graphql({
      query: updateGroupMutation,
      variables: {
        input: {
          id: groupID,
          profilePicture: params["profilePicture"],
        },
      },
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
      const fileName = id + "_group_pic";
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
  };
  let res = await API.graphql({
    query: createMembers,
    variables: { input: params },
  });
  return res;
}

export async function recommendGroups(friendList, userGroups) {
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
  const MAX_TOTAL = 6;
  console.log(friendList);
  let shuffled = shuffleArray(friendList);
  console.log(shuffled);
  var result = [];
  //go through each friend
  for (let index in shuffled) {
    //if the friend owns any groups that this user isn't a part of, add them to result
    //console.log(shuffled[index]);
    let friendInfo = await getUser(shuffled[index]);
    //added tracks the number of groups we have added from this user's group list
    let added = 0;
    //console.log(friendInfo.groupOwners);
    let groups = shuffleArray(friendInfo.groupOwners.items);
    //console.log(groups);
    for (let i in groups) {
      let match = false;
      //console.log(groups[i]);
      for (let j in userGroups) {
        //console.log(userGroups[j]);
        if (userGroups[j].id === groups[i].id) {
          match = true;
          break;
        }
        //console.log("Moving to our next group");
      }
      if (!match) {
        //if there was not a match, we found a group to add
        //console.log("Adding to list");
        //console.log(groups[i].id)
        result.push(groups[i].id);
        added++;
      }
      //if we added more than 2 groups, move onto the next friend
      if (added >= MAX_PER_FRIEND) break;
      //console.log("Moving to next group");
    }
    //if we have 4 or more results in our list, we have enough, so break
    console.log(result.length)
    if (result.length >= MAX_TOTAL) return result;
    //console.log("Moving to next friend");
  }
  //console.log("recommended groups: ");
  //console.log(result);

  return result;
}
