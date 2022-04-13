//This file holds the API call functions

import { API, Storage } from "aws-amplify";
import {
  createQuiz as createQuizMutation,
  updateQuiz as updateQuizMutation,
  createResult as createResultMutation,
  updateResult as updateResultMutation,
  createQuestion as createQuestionMutation,
  updateQuestion as updateQuestionMutation,
  createAnswer as createAnswerMutation,
  updateAnswer as updateAnswerMutation,

} from "../graphql/mutations";
import { 
  getQuiz as getQuizQuery,
  getQuestion as getQuestionQuery,
  getResult as getResultQuery,
} from "../graphql/queries";

/**
* Create functions
*/

/** This method creates a new quiz with the specified name.
 * 
 * @param {*} id the ID of the new quiz
 * @param {*} quizName the name of the new quiz
 * @param {*} User the user who created the quiz
 * @param {*} username the username of the user who created the quiz
 * @returns None
 */
export async function createQuiz(quizName, username, questions, results, description, picture) {

  let params = {
    title: quizName,
    ownerUsername: username,
    description: description,
    picture: picture,
    userQuizOwnersId: username,
  };
  console.log(params);

  //create a new Post using the form data
  let res = await API.graphql({
    query: createQuizMutation,
    variables: { input: params },
  });
  console.log(res);

  let quiz = res.data.createQuiz;
  let quizID = quiz.id;

  //grab the question list from the quiz object (should be empty)
  //let questionList = quiz.questions;

  //create all the questions for this quiz
  for(let i = 0; i < questions.length; i++){
    await createQuestion(questions[i],quiz, quizID);
    //questionList.push(newQuestion);
  }

  //grab the result list from the quiz object (should be empty)
  let resultList = quiz.results;

  //push all results from the quiz onto this new list
  for(let i = 0; i < results.length; i++){
    await createResult(results[i],quizID);
    //resultList.push(newResult);
  }

  //store the question list and the result list for the quiz
  /*
  params = ({
    questions: questionList,
    results: resultList,
  });
  //update Quiz to hold new questions and results
  let finalQuiz = await updateQuiz(quizID, params);
  return finalQuiz;
  */
  return quizID;

  //return res.data.createQuiz;
}

export async function createQuestion(question, quiz, quizID){
  let answerList = question.answers;

  //make params for new question
  let params = {
    quiz: quiz,
    quizID: quizID,
    name: question.name,
    picture: question.img,
  }
  // put the question into the db
  let res = await API.graphql({
    query: createQuestionMutation,
    variables: {input: params},
  });

  // grab the empty question
  let quest = res.data.createQuestion;
  let questID = quest.id;

  // make answers for new question
  //let questionAnswerList = quest.answers;
  for(let i = 0; i< answerList; i++){
    await createAnswer(answerList[i],question, questID);
    //questionAnswerList.push(newAnswer);
  }

  //get the updated answer list
  /*
  params = {
    answers: questionAnswerList,
  }

  let completedQuestion = await updateQuestion(questID, params);
  return completedQuestion;
  */
}

export async function createAnswer(answerObj, question, questionID){
  let answerName = answerObj.name;
  let answerWeights = answerObj.weights;

  //make params for new answer
  let params = ({
    question: question,
    questionID: questionID,
    name: answerName,
    weights: answerWeights,
  });

  //put answer into the db
  let res = await API.graphql({
    query: createAnswerMutation,
    variables: {input: params},
  });

  //return answer
  return res.data.createAnswer;
}

export async function createResult(result, quiz, quizID){
  //make params for new result
  let  params = ({
    name: result.name,
    picture: result.img,
    quiz: quiz,
    quizID: quizID,
  });

  //put result into the db
  let res = await API.graphql({
    query: createResultMutation,
    variables: {input: params},
  });

  //return result
  return res.data.createResult;
}

/**
 * 
 * Update functions
 *
*/

export async function updateQuestion(id, inputs){
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
    let res = await API.graphql({
      query: updateQuestionMutation,
      variables: { input: params },
    });

    return res.data.updateQuestion;
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
  let res = await API.graphql({
    query: updateQuizMutation,
    variables: { input: params },
  });

  return res.data.updateQuiz;
}

export async function updateAnswer(id, inputs){
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
    let res = await API.graphql({
      query: updateAnswerMutation,
      variables: { input: params },
    });

    return res.data.updateAnswer;
}

export async function updateResult(id, inputs){
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
    let res = await API.graphql({
      query: updateResultMutation,
      variables: { input: params },
    });

    return res.data.updateResult;
}




/**
* Getter functions
*/

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

export async function getQuestion(id){
  if( !id) return;

  let res = await API.graphql({
    query: getQuestionQuery,
    variables: {id: id},
  });

  return res.data.getQuestion;
}

export async function getresult(id){
  if( !id) return;

  let res = await API.graphql({
    query: getResultQuery,
    variables: {id: id},
  });

  return res.data.getResult;
}
