//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
  createQuiz as createQuizMutation,
  updateQuiz as updateQuizMutation,
} from "../graphql/mutations";
import { getQuiz as getQuizQuery } from "../graphql/queries";

export async function createQuiz(id, quizName, User, username) {
  //if the User did not enter a title, don't create a post
  if (!id) return;

  let params = {
    id: id,
    quizName: quizName,
    owner: User,
    ownerUsername: username,
  };

  //create a new Post using the form data
  await API.graphql({
    query: createQuizMutation,
    variables: { input: params },
  });
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
  return result;
}
