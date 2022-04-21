import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getQuiz,
  fetchUserAnswer,
  getAnswer,
} from "../databaseFunctions/quizzes";
import { getUser } from "../databaseFunctions/users";

function useGatherResources(quizID, username) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userResult, setUserResult] = useState(null);
  const [quiz, setQuiz] = useState(null);

  async function getInfo() {
    try {
      setLoading(true);
      //get the user's results
      let res = await fetchUserAnswer(username, quizID);
      if (res.length > 0) {
        setUserResult(res[0]);
      } else {
        setUserResult(null);
      }

      //get the quiz
      let quizRes = await getQuiz(quizID);
      setQuiz(quizRes);
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

  return [userResult, quiz, error, loading];
}

async function changeFriend(
  friendUsername,
  quizID,
  setFriend,
  setFriendResult
) {
  //get the user's results
  let res = await fetchUserAnswer(friendUsername, quizID);
  if (res.length > 0) {
    setFriend(friendUsername);
    setFriendResult(res[0]);
  } else {
    setFriend(friendUsername);
    setFriendResult(null);
  }
}

function compareQuestion(index, answerID1, answerID2, quiz) {
  let answers = quiz.questions.items[index].answers.items;
  let answer1 = "Missing this answer";
  let answer2 = "Missing this answer";
  for (let i = 0; i < answers.length; i++) {
    if (answerID1 === answers[i].id) answer1 = answers[i].name;
    if (answerID2 === answers[i].id) answer2 = answers[i].name;
  }
  return (
    <Row>
      <h5>
        {index + 1}. {quiz.questions.items[index].name}
      </h5>
      <Col>
        <p>{answer1}</p>
      </Col>
      <Col>
        <p>{answer2}</p>
      </Col>
    </Row>
  );
}

function compareMembers(
  quizID,
  quiz,
  username,
  friendUsername,
  userResult,
  friendResult
) {
  if (userResult === null) {
    return (
      <div>
        <div>You haven't taken this quiz yet.</div>
        <Link to={"/quizPage/" + quizID}>
          <Button variant="outline-primary">Go to Quiz</Button>{" "}
        </Link>
      </div>
    );
  } else if (friendUsername === "Select a friend") {
    return <div>Select a friend to compare answers with.</div>;
  } else if (friendResult === null) {
    return <div>{friendUsername} has not taken this quiz yet.</div>;
  } else {
    let result1 = 0;
    let result2 = 0;
    for (let i = 0; i < quiz.results.items.length; i++) {
      if (quiz.results.items[i].id === userResult.result) {
        result1 = quiz.results.items[i].name;
      }
      if (quiz.results.items[i].id === friendResult.result) {
        result2 = quiz.results.items[i].name;
      }
    }
    return (
      <div>
        <Row>
          <Col>
            <h5>{username}</h5>
          </Col>
          <Col>
            <h5>{friendUsername}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>{result1}</h5>
          </Col>
          <Col>
            <h5>{result2}</h5>
          </Col>
        </Row>
        {userResult.answers.map((answer, index) => {
          return (
          <div key={index}>
            {compareQuestion(
              index,
              userResult.answers[index],
              friendResult.answers[index],
              quiz
            )}
          </div>);
        })}
      </div>
    );
  }
}

function CompareBox({ group, quizID, username }) {
  const [userResult, quiz, error, loading] = useGatherResources(
    quizID,
    username
  );
  const [friend, setFriend] = useState("Select a friend");
  const [friendResult, setFriendResult] = useState(null);

  return (
    <div className="compare-box">
      <div className="outline mx-3 mb-5 pb-4">
        <Container>
          <Row>
            <Col>
              <h4 className="my-3"> My Answers: </h4>
            </Col>
            <Col className="row">
              <DropdownButton
                className="col-auto my-3"
                id="dropdown-basic-button"
                title="Friends"
                variant="outline-primary"
                onSelect={(event) =>
                  changeFriend(event, quizID, setFriend, setFriendResult)
                }
              >
                {" "}
                {group.members.items.map((member) => {
                  if (member.userID !== username) {
                    return (
                      <Dropdown.Item eventKey={member.userID} key={member.userID}>
                        {member.userID}
                      </Dropdown.Item>
                    );
                  }
                })}
              </DropdownButton>
            </Col>
          </Row>
          {compareMembers(
            quizID,
            quiz,
            username,
            friend,
            userResult,
            friendResult
          )}
        </Container>
      </div>
    </div>
  );
}

export default CompareBox;
