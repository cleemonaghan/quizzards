//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
  createQuiz as createQuizMutation,
  updateQuiz as updateQuizMutation,
} from "../graphql/mutations";
import { getQuiz as getQuizQuery } from "../graphql/queries";

/** This method creates a new quiz with the specified name.
 * 
 * @param {*} id the ID of the new quiz
 * @param {*} quizName the name of the new quiz
 * @param {*} User the user who created the quiz
 * @param {*} username the username of the user who created the quiz
 * @returns None
 */
export async function createQuiz(quizName, username, description, picture) {


  let params = {
    title: quizName,
    ownerUsername: username,
    description: description,
    picture: picture,
    //userQuizOwnersId: username,
  };

  //create a new Post using the form data
  let res = await API.graphql({
    query: createQuizMutation,
    variables: { input: params },
  });

  return res.data.createQuiz;
}

export async function updateQuiz(id, inputs) {
  //if the was no id specified, don't update the quiz
  if (!id) return;
  let params = {
    id: id,
  };
  //add each key-value pair in the inputs to the params
  let keys = Object.keys(inputs);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    params[key] = inputs[key];
  }
  //update the  a new Post using the form data
  await API.graphql({
    query: updateQuizMutation,
    variables: { input: params },
  });
}

export async function getQuiz(id) {
  //if the was no username specified, don't update the user
  if (!id) return;
  //update the  a new Post using the form data
  let result = await API.graphql({
    query: getQuizQuery,
    variables: { id: id },
  });
  return result.data.getQuiz;
}
