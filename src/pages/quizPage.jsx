import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useParams } from "react-router-dom";
import { Quiz } from "../components";
import{getQuiz} from "../databaseFunctions/quizzes";
import{ getUserOwnedQuizzes } from "../databaseFunctions/users";
import Button from "react-bootstrap/Button";

function useGatherResources(quizID) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState(null);
  const [user, setUser] = useState(null);
  const [userQuizzes, setUserQuizzes] = useState([]);

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
      setQuiz(res);

      //get the user
      res = await Auth.currentAuthenticatedUser();
      setUser(res.username);
      //get the user groups

      console.log(res.username);
      res = await getUserOwnedQuizzes(res.username);
      console.log(res);
      setUserQuizzes(res);
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

  return [quiz,  error, loading, user, userQuizzes];
}

function userButton(quizID,  userQuizzes) {
  console.log(userQuizzes);
  console.log(quizID);
  let myQuiz = false;

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
      <Button variant="outline-primary" size="lg" onClick={() => deleteQuiz()} class="btn btn-primary">
           Delete Quiz +
       </Button>
    );
  } 
  console.log(result);
  return result;
}

function deleteQuiz(){

}
function QuizPage() {
  let info = useParams();
  let quizID = info.id;
  const [quiz,  error, loading, user, userQuizzes] =
  useGatherResources(quizID);
  console.log(userQuizzes);
  let userB = userButton(quizID, user,userQuizzes);

  return (
    <div className="quiz-page">
      <div className="container">
      <div class="text-center">
          {userB}
          </div>
        <Quiz quizID={quizID} />
      </div>
    </div>
  );
}

export default QuizPage;
