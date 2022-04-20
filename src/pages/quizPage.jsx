import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router";
import { useParams } from "react-router-dom";
import { Quiz } from "../components";
import {
  getQuiz,
  deleteQuiz as deleteQuizMutation,
} from "../databaseFunctions/quizzes";
import { getUserOwnedQuizzes } from "../databaseFunctions/users";
import Button from "react-bootstrap/Button";

function useGatherResources(quizID) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState(null);
  const [user, setUser] = useState(null);
  const [userQuizzes, setUserQuizzes] = useState([]);
  const [userB, setUserButton] = useState(null);
  const [hasDeleted, setHasDeleted] = useState(null);

  /** This function is called upon initialization to fetch all the
   * information essential to displaying the page. Once all the
   * information is gathered, it sets the loading state var to false
   * so that the component will re-render with the information.
   */
  async function getInfo() {
    try {
      setLoading(true);
      //get the group
      let res = await getQuiz(quizID);
      let tempQuiz = res;
      let tempQuizID = res.id;
      setQuiz(res);

      //get the user
      res = await Auth.currentAuthenticatedUser();
      let tempUser = res;
      setUser(res.username);

      //set user quizzes
      console.log(res.username);
      res = await getUserOwnedQuizzes(res.username);
      let tempUserQuizzes = res;
      console.log(res);
      setUserQuizzes(res);

      setHasDeleted(false);

      res = userButton(
        tempQuizID,
        tempUser,
        tempQuiz,
        tempUserQuizzes,
        setHasDeleted
      );
      setUserButton(res);
    } catch (e) {
      //there was an error, so save it
      setError(e);
    } finally {
      //we are finished loading, so set loading to false
      setLoading(false);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return [quiz, error, loading, user, userQuizzes, userB, hasDeleted];
}

function userButton(quizID, user, quiz, userQuizzes, setHasDeleted) {
  console.log(quizID);
  console.log(user);
  console.log(quiz);
  console.log(userQuizzes);
  let myQuiz = false;
  let title = quiz.title;

  for (let i = 0; i < userQuizzes.length; i++) {
    console.log(userQuizzes[i]);
    let quiz = userQuizzes[i].id;
    console.log(quizID);

    if (quizID == quiz) {
      myQuiz = true;
      break;
    }
  }

  var result = [];

  console.log(myQuiz);

  if (myQuiz) {
    result.push(
      <Button
        variant="danger"
        size="lg"
        onClick={() => deleteQuiz(quizID, setHasDeleted)}
        class="btn btn-primary"
      >
        Delete Quiz
      </Button>
    );
  }
  console.log(result);
  return result;
}

async function deleteQuiz(quizID, setHasDeleted) {
  console.log(quizID);
  var res = await deleteQuizMutation(quizID);
  console.log("returned");
  setHasDeleted(true);
  return;
}

function QuizPage() {
  let info = useParams();
  let quizID = info.id;
  console.log(quizID);
  const [quiz, error, loading, user, userQuizzes, userB, hasDeleted] =
    useGatherResources(quizID);
  if (hasDeleted) {
    return <Navigate to={"/quizzes"} />;
  }
  //let userB = userButton(quizID, user, quiz, userQuizzes);

  return (
    <div className="quiz-page">
      <div className="container">
        <div class="mt-5">{userB}</div>
        <Quiz quizID={quizID} />
      </div>
    </div>
  );
}

export default QuizPage;
