import { API, Storage } from "aws-amplify";
import { urlSafeDecode } from "../../quizzards/node_modules/@aws-amplify/core/lib-esm";
import { getUser as getUserQuery } from "../graphql/queries";

async function getUserByUsername(username){
    const user = await API.graphql(
        {query: getUserQuery, 
        variables: {userID: username},
        });
    console.log(user);
    return user;
}

export async function getUserGroups(user){
    let username = user.username;
    if(!username) return;
    let userVal = await getUserByUsername(username);
    console.log(userVal);
    return userVal.data.getUser.groups;
}

export const getUserGroups = 
    query getUserGroups($id: ID!){
        getUserGroups(id: $id){
            groups{
                items {
                    id
                    groupID
                    userID
                    createdAt
                    updatedAt
                  }
                  nextToken
            }
        }
    };

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