import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router";
import { useParams } from "react-router-dom";
import { Loading, Quiz } from "../components";
import {
  getQuiz,
  deleteQuiz as deleteQuizMutation,
} from "../databaseFunctions/quizzes";
import { getUserOwnedQuizzes } from "../databaseFunctions/users";
import { Button, Modal } from "react-bootstrap";

function useGatherResources(quizID, setModalShow) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState(null);
  const [user, setUser] = useState(null);
  const [userQuizzes, setUserQuizzes] = useState([]);
  const [userB, setUserButton] = useState(null);

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

      res = userButton(
        tempQuizID,
        tempUser,
        tempQuiz,
        tempUserQuizzes,
        setModalShow
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

  return [quiz, error, loading, user, userQuizzes, userB];
}

function userButton(quizID, user, quiz, userQuizzes, setModalShow) {

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

  console.log(myQuiz);

  if (myQuiz) {
    return (
      <Button variant="danger" size="lg" onClick={() => setModalShow(true)}>

        Delete Quiz
      </Button>
    );
  } else return <div></div>;
}

function DeleteQuizWarning(
  quizID,
  deleting,
  setDeleting,
  setHasDeleted,
  show,
  onHide
) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Quiz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>About to delete quiz</h4>
        <p>You are about to delete this quiz. This action cannot be undone.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cancel</Button>
        <Button
          disabled={deleting}
          variant="danger"
          onClick={async () => {
            setDeleting(true);
            //delete the quiz
            await deleteQuizMutation(quizID);
            setHasDeleted(true);
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function QuizPage() {
  let info = useParams();
  let quizID = info.id;
  console.log(quizID);
  const [modalShow, setModalShow] = useState(false);
  //boolean for tracking when we are currently deleting
  const [deleting, setDeleting] = useState(false);
  //boolean for when we are done deleting
  const [hasDeleted, setHasDeleted] = useState(false);

  const [quiz, error, loading, user, userQuizzes, deleteButton] =
    useGatherResources(quizID, setModalShow);


  if (hasDeleted) {
    return <Navigate to={"/quizzes"} />;
  }  
  else if (deleting) {
    return Loading();
  }
  //let deleteButton = userButton(quizID, user, quiz, userQuizzes);

  return (
    <div className="quiz-page">
      <div className="container">
        {DeleteQuizWarning(quizID, 
  deleting, setDeleting, setHasDeleted, modalShow, () =>
          setModalShow(false)
        )}
        <div className="mt-5">{deleteButton}</div>
        <Quiz quizID={quizID} />
      </div>
    </div>
  );
}

export default QuizPage;
