import React, { useState, Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";
import {
  deleteQuizFromGroup,
  getGroupsQuizzes,
} from "../databaseFunctions/groups";
import { photo } from "../images";
import { getQuiz } from "../databaseFunctions/quizzes";
import { Storage } from "aws-amplify";
import { getUser } from "../databaseFunctions/users";

async function removeQuiz(
  quizID,
  groupID,
  currSelectedQuiz,
  setQuizIDSelectedForStats,
  groupQuizzes,
  setGroupQuizzes
) {
  console.log("hi");
  console.log(quizID);
  console.log(groupID);
  console.log(quizID == currSelectedQuiz);

  let updatedGroupQuizzes = [];
  //delete the quiz from the group
  let groupQ = await getGroupsQuizzes(groupID);
  console.log(groupQ);
  let res = await deleteQuizFromGroup(quizID, groupID);
  groupQ = await getGroupsQuizzes(groupID);
  console.log(groupQ);
  //if the quiz is currently selected to look at stats, update the current id to null
  if (quizID == currSelectedQuiz) {
    setQuizIDSelectedForStats(null);
  }

  //remove the quiz from the list of current group Quizzes and update the group list
  let index;
  for (let i = 0; i < groupQuizzes.length; i++) {
    if (groupQuizzes[i].id != quizID) {
      updatedGroupQuizzes.push(groupQuizzes[i]);
    }
  }
  console.log(updatedGroupQuizzes);
  setGroupQuizzes(updatedGroupQuizzes);
}
async function getQuizPic(quizID, setQuizProfPic) {
  console.log("get quiz pic");
  let quiz = await getQuiz(quizID);
  let user = await getUser(quiz.ownerUsername);
  let quizPic = user.profilePicture;
  let quizImage = await Storage.get(quizPic);
  setQuizProfPic(quizImage);
}

function QuizStatsBox({
  groupQuizzes,
  currSelectedQuiz,
  setQuizIDSelectedForStats,
  setGroupQuizzes,
  title,
  author,
  id,
  owner,
  groupID,
}) {
  const [quizProfPic, setQuizProfPic] = useState(photo);
  let res = async () => {
    let stink = await getQuizPic(id, setQuizProfPic);
  };
  const [loadingImage, setLoadingImage] = useState(res);
  let deleteIcon = [];
  if (owner) {
    deleteIcon.push(
      <Button
        className="mt-1"
        variant="outline-danger"
        onClick={async () => {
          let temp = await removeQuiz(
            id,
            groupID,
            currSelectedQuiz,
            setQuizIDSelectedForStats,
            groupQuizzes,
            setGroupQuizzes
          );
          console.log("delete");
        }}
      >
        <TrashFill className="mb-1" /> Remove from group
      </Button>
    );
  }
  return (
    <div className="quiz-box mb-4">
      <Button className="p-0" style={{ width: "100%" }} variant="outline-dark">
        <Card
          className="text-center"
          style={{ width: "100%" }}
          bg="dark"
          text="white"
        >
          <Card.Body className="align-items-center d-flex justify-content-center">
            <div>
              <Card.Title>
                <h2>{title}</h2>
              </Card.Title>
              <Card.Text>{"By: " + author}</Card.Text>
            </div>
          </Card.Body>
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              width: "30px",
            }}
          >
            <img
              className="img-fluid rounded-circle my-auto"
              src={quizProfPic}
              alt=""
            />
          </div>
        </Card>
      </Button>
      {deleteIcon}
    </div>
  );
}

export default QuizStatsBox;
