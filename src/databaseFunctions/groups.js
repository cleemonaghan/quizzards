import { API, Storage } from "aws-amplify";
import {
  createGroup as createGroupMutation,
  updateGroup as updateGroupMutation,
  createMembers,
  createMemberRequests,
  deleteMemberRequests,
} from "../graphql/mutations";
import {
  getGroup as getGroupQuery,
  listGroups as listGroupQuery,
  getMemberRequests,
  listMemberRequests,
} from "../graphql/queries";

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
    console.log(params["profilePicture"]);
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
    //if we updated the profile picture, the object is under updateGroup
    return res.data.updateGroup;
  }
  //return the created group object
  return res.data.createGroup;
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

export async function getGroups() {
  let params = {
    limit: 20,
    //filter: {
    // Visibility: "public",
    //},
  };
  let result = await API.graphql({
    query: listGroupQuery,
    variables: { input: params },
  });
  return result.data.listGroups;
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

export async function requestMemberToGroup(memberID, groupID) {
  let params = {
    userID: memberID,
    groupID: groupID,
  };
  let res = await API.graphql({
    query: createMemberRequests,
    variables: { input: params },
  });
  return res;
}

export async function addMemberfromRequestList(memberID, groupID) {
  //first find the memberRequest id
  let filter = {
    and: [
      {
        userID: {
          eq: memberID, // filter userID == memberID
        },
      },
      {
        groupID: {
          eq: groupID, // filter groupID == groupID
        },
      },
    ],
  };
  let res = await API.graphql({
    query: listMemberRequests,
    variables: { filter: filter },
  });
  //then delete the memberRequest
  console.log(res.data.listMemberRequests.items[0].id);

  let params = { id: res.data.listMemberRequests.items[0].id };
  await API.graphql({
    query: deleteMemberRequests,
    variables: { input: params },
  });
  //then create a member entry
  addMemberToGroup(memberID, groupID);
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
  let shuffled = shuffleArray(friendList);
  var result = [];
  //go through each friend
  for (let index in shuffled) {
    //if the friend owns any groups that this user isn't a part of, add them to result
    let friendInfo = await getUser(shuffled[index]);
    //added tracks the number of groups we have added from this user's group list
    let added = 0;
    let groups = shuffleArray(friendInfo.groupOwners.items);
    for (let i in groups) {
      let match = false;
      for (let j in userGroups) {
        if (userGroups[j].id === groups[i].id) {
          match = true;
          break;
        }
      }
      if (!match) {
        //if there was not a match, we found a group to add
        result.push(groups[i].id);
        added++;
      }
      //if we added more than 2 groups, move onto the next friend
      if (added >= MAX_PER_FRIEND) break;
    }
    //if we have 4 or more results in our list, we have enough, so break
    if (result.length >= MAX_TOTAL) return result;
  }

  return result;
}
//returns a groups quizzes
export async function getGroupsQuizzes(groupID) {
  if (!groupID) return;
  let groupVal = await getGroup(groupID);
  console.log(groupVal);
  return groupVal.quizzes.items; //.items[0]....
}
