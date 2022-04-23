import React from "react";
import { Card, Button } from "react-bootstrap";
import { TrashFill, StarFill } from "react-bootstrap-icons";
import { deleteQuizFromGroup } from "../databaseFunctions/groups";

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
  //delete the quiz from the group
  let res = await deleteQuizFromGroup(quizID, groupID);

  //if the quiz is currently selected to look at stats, update the current id to null
  if (quizID == currSelectedQuiz) {
    setQuizIDSelectedForStats(null);
  }

  //remove the quiz from the list of current group Quizzes and update the group list
  let index;
  let updatedGroupQuizzes = groupQuizzes;
  for (let i = 0; i < groupQuizzes.length; i++) {
    if (groupQuizzes[i].id == quizID) {
      index = i;
      updatedGroupQuizzes = groupQuizzes.splice(index, 1);
      break;
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
        <TrashFill className="mx-1 mb-1" />
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
          <div style={{ position: "absolute", top: 1, right: 5 }}>
            <StarFill color="#feca1d" />
          </div>
          <Card.Body className="align-items-center d-flex justify-content-center">
            <div>
              <Card.Title>
                <h2>{title}</h2>
              </Card.Title>
              <Card.Text>{"By: " + author}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Button>
      {deleteIcon}
    </div>
  );
}

export default QuizStatsBox;
