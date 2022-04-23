import React from "react";
import { Card, Button } from "react-bootstrap";
import {
  TrashFill, 
  StarFill
} from "react-bootstrap-icons";
import { deleteQuizFromGroup, getGroupsQuizzes } from "../databaseFunctions/groups";
import { photo2 } from "../images";

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
  for(let i = 0; i<groupQuizzes.length; i++){
    if(groupQuizzes[i].id != quizID){
      updatedGroupQuizzes.push(groupQuizzes[i]);
    }
  }
  console.log(updatedGroupQuizzes);
  setGroupQuizzes(updatedGroupQuizzes);
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
  let deleteIcon = [];
  if (owner) {
    deleteIcon.push(
      <Button
        className="mt-1"
        variant="danger"
        onClick={async () => {
          let temp = await removeQuiz(
            id,
            groupID,
            currSelectedQuiz,
            setQuizIDSelectedForStats,
            groupQuizzes,
            setGroupQuizzes
          );
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
              src={photo2}
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
