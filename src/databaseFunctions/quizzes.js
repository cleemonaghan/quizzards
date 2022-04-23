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
  deleteQuiz as deleteQuizMutation,
  deleteAnswer as deleteAnswerMutation,
  deleteUserAnswers as deleteUserAnswerMutation,
  deleteResult as deleteResultMutation,
  deleteQuestion as deleteQuestionMutation,
  createUserAnswers as createUserAnswersMutation,
  updateUserAnswers as updateUserAnswersMutation,
} from "../graphql/mutations";
import {
  getQuiz as getQuizQuery,
  getQuestion as getQuestionQuery,
  getAnswer as getAnswerQuery,
  getResult as getResultQuery,
  getUserAnswers, listUserAnswers
} from "../graphql/queries";
import {
  getQuiz as getQuizCustom,
  listQuizzes as listQuizzesCustom,
} from "../graphql/custom";

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
export async function createQuiz(
  quizName,
  username,
  questions,
  results,
  description,
  picture
) {
  let params = {
    title: quizName,
    ownerUsername: username,
    description: description,
    picture: "null",
    userQuizOwnersId: username,
  };

  //create a new Post using the form data
  let res = await API.graphql({
    query: createQuizMutation,
    variables: { input: params },
  });

  let quiz = res.data.createQuiz;
  let quizID = quiz.id;

  //update the quiz with the quiz image
  const fileName = quizID + "_quiz_pic";
  await Storage.put(fileName, picture);
  params["picture"] = fileName;
  res = await API.graphql({
    query: updateQuizMutation,
    variables: {
      input: {
        id: quizID,
        picture: fileName,
      },
    },
  });

  //create all the questions for this quiz
  for (let i = 0; i < questions.length; i++) {
    await createQuestion(questions[i], quizID);
  }

  //push all results from the quiz onto this new list
  for (let i = 0; i < results.length; i++) {
    await createResult(results[i], quizID, i);
  }
  return quizID;
}

export async function createQuestion(question, quizID) {
  let answerList = question.answers;

  //make params for new question
  let params = {
    quizID: quizID,
    name: question.name,
    picture: "null",
    quizQuestionsId: quizID,
  };
  // put the question into the db
  let res = await API.graphql({
    query: createQuestionMutation,
    variables: { input: params },
  });

  // grab the empty question
  let quest = res.data.createQuestion;
  let questID = quest.id;

  //update the question with the question image
  if (question.img !== null || question.img === "") {
    console.log("'" + question.img + "'");
    const fileName = quizID + "_quiz_" + questID + "_question_pic";
    await Storage.put(fileName, question.img);
    res = await API.graphql({
      query: updateQuestionMutation,
      variables: {
        input: {
          id: questID,
          picture: fileName,
        },
      },
    });
  }

  // make answers for new question
  for (let i = 0; i < answerList.length; i++) {
    await createAnswer(answerList[i], questID);
  }
}

export async function createAnswer(answerObj, questionID) {
  let answerName = answerObj.name;
  let answerWeights = answerObj.weights;

  //make params for new answer
  let params = {
    questionID: questionID,
    name: answerName,
    weights: answerWeights,
    questionAnswersId: questionID,
  };

  //put answer into the db
  let res = await API.graphql({
    query: createAnswerMutation,
    variables: { input: params },
  });

  //return answer
  return res.data.createAnswer;
}

export async function createResult(result, quizID, index) {
  //make params for new result
  let params = {
    name: result.name,
    picture: "null",
    quizID: quizID,
    index: index,
    quizResultsId: quizID,
  };

  //put result into the db
  let res = await API.graphql({
    query: createResultMutation,
    variables: { input: params },
  });
  res = res.data.createResult;
  let resultID = res.id;

  //update the quiz with the quiz image
  if (result.img !== null) {
    const fileName = quizID + "_quiz_" + resultID + "_result_pic";
    await Storage.put(fileName, result.img);
    params["profilePicture"] = fileName;
    res = await API.graphql({
      query: updateResultMutation,
      variables: {
        input: {
          id: resultID,
          picture: fileName,
        },
      },
    });
  }
}

/**
 *
 * Update functions
 *
 */

export async function updateQuestion(id, inputs) {
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

export async function updateAnswer(id, inputs) {
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

export async function updateResult(id, inputs) {
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
    query: getQuizCustom,
    variables: { id: id },
  });
  console.log("fetched quiz from DB");
  console.log(result.data.getQuiz);

  return result.data.getQuiz;
}

export async function listAllQuizzes() {
  //first find the memberRequest id
  let params = {
    limit: 100,
  };
  let result = await API.graphql({
    query: listQuizzesCustom,
    variables: params,
  });
  //then delete the memberRequest
  //console.log(result.data.listQuizzes);

  return result.data.listQuizzes.items;
}

export async function listQuizzesOfGroup(username, groupID) {
  //first find the memberRequest id
  let params = {
    limit: 100,
    filter: {
      and: [
        {
          ownerUsername: {
            eq: username, // filter ownerUsername == username
          },
        } /*,
      {
        groupID: {
          eq: groupID, // filter groupID == groupID
        },
      }*/,
      ],
    },
  };
  let result = await API.graphql({
    query: listQuizzesCustom,
    variables: params,
  });
  //then delete the memberRequest
  console.log(result.data.listQuizzes);

  return result.data.listQuizzes.items;
}

export async function listQuizzesByTitle(title) {
  //first find the memberRequest id
  let params = {
    limit: 20,
    filter: {
      and: [
        {
          title: {
            eq: title, // filter title == title
          },
        },
      ],
    },
  };
  let result = await API.graphql({
    query: listQuizzesCustom,
    variables: params,
  });
  //then delete the memberRequest
  console.log(result.data.listQuizzes);

  return result.data.listQuizzes.items;
}

export async function getQuestion(id) {
  if (!id) return;

  let res = await API.graphql({
    query: getQuestionQuery,
    variables: { id: id },
  });

  return res.data.getQuestion;
}

export async function getAnswer(id) {
  //if the was no username specified, don't update the user
  if (!id) return;
  //update the  a new Post using the form data
  let result = await API.graphql({
    query: getAnswerQuery,
    variables: { id: id },
  });
  console.log(result.data.getAnswer);

  return result.data.getAnswer;
}

export async function getResult(id) {
  if (!id) return;

  let res = await API.graphql({
    query: getResultQuery,
    variables: { id: id },
  });

  return res.data.getResult;
}

export async function deleteQuiz(id) {
  if (!id) return;
  let quiz = await getQuiz(id);
  console.log(quiz);
  console.log(quiz.questions);
  let deletedValue = null;
  for (let i = 0; i < quiz.questions.items.length; i++) {
    console.log(quiz.questions.items[i]);
    deletedValue = await deleteQuestion(quiz.questions.items[i].id);
  }

  for (let i = 0; i < quiz.results.items.length; i++) {
    console.log(quiz.results.items[i]);
    deletedValue = await deleteResult(quiz.results.items[i].id);
  }

  for (let i = 0; i < quiz.userAnswers.items.length; i++) {
    console.log(quiz.userAnswers.items[i]);
    deletedValue = await deleteUserAnswer(quiz.userAnswers.items[i].id);
  }
  console.log(id);
  let res = await API.graphql({
    query: deleteQuizMutation,
    variables: { input: { id: id } },
  });
  return;
}

export async function deleteUserAnswer(id) {
  if (!id) return;
  console.log(id);
  let res = await API.graphql({
    query: deleteUserAnswerMutation,
    variables: { input: { id: id } },
  });
  return;
}

export async function deleteAnswer(id) {
  if (!id) return;
  console.log(id);
  let res = await API.graphql({
    query: deleteAnswerMutation,
    variables: { input: { id: id } },
  });
  return;
}

export async function deleteQuestion(id) {
  if (!id) return;
  console.log(id);
  let question = await getQuestion(id);
  console.log(question);
  let deletedValue = null;
  for (let i = 0; i < question.answers.items.length; i++) {
    console.log(question.answers.items[i]);
    deletedValue = await deleteAnswer(question.answers.items[i].id);
  }
  let res = await API.graphql({
    query: deleteQuestionMutation,
    variables: { input: { id: id } },
  });
  return;
}

export async function deleteResult(id) {
  if (!id) return;
  console.log(id);
  let res = await API.graphql({
    query: deleteResultMutation,
    variables: { input: { id: id } },
  });
  return;
}

// ---- User Answers to Quizzes Section ---- //
export async function fetchUserAnswer(username, quizID) {
  let params = {
    limit: 100,
    filter: {
      and: [
        {
          quizID: {
            eq: quizID, // filter quizID == quizID
          },
        },
        {
          username: {
            eq: username, // filter username == username
          },
        },
      ],
    },
  };
  let res = await API.graphql({
    query: listUserAnswers,
    variables: params,
  });
  return res.data.listUserAnswers.items;
}


/** This method stores the user's answer to a quiz in the DB
 *
 * @param {String} username the username of the user who took the quiz
 * @param {ID} quizID the ID of the quiz
 * @param {[ID]} answers a list of the IDs of the answers the user selected
 * @param {ID} result the ID of the result
 * @returns the created userAnswers object
 */
export async function createUserAnswer(username, quizID, answers, result) {
  //query the DB to see if a User Answer already exists
  let fetched = await fetchUserAnswer(username, quizID);
  console.log("Existing Answers");
  console.log(fetched);

  //if there is already a User Answer, update it with the new data
  if (fetched.length > 0) {
    console.log("Updating Answer");
    let id = fetched[0].id;
    let inputs = {
      id: id,
      answers: answers,
      result: result,
    };
    let res = await API.graphql({
      query: updateUserAnswersMutation,
      variables: { input: inputs },
    });
    return res.data.updateUserAnswers;
  }
  else {
    console.log("Creating Answer");
    // if there is not a User Answer for that quiz in the DB, create a new one
    let inputs = {
      username: username,
      quizID: quizID,
      answers: answers,
      result: result,
      userQuizAnswersId: username,
      quizUserAnswersId: quizID,
    };
    let res = await API.graphql({
      query: createUserAnswersMutation,
      variables: { input: inputs },
    });
    return res.data.createUserAnswers;
  }
}
