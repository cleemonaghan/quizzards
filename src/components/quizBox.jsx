import React, { useState, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getQuiz } from "../databaseFunctions/quizzes";
import { photo2 } from "../images";
import { Storage } from "aws-amplify";
import { getUser } from "../databaseFunctions/users";

async function getQuizPic(quizID, setQuizProfPic) {
  console.log("get quiz pic");
  let quiz = await getQuiz(quizID);
  let user = await getUser(quiz.ownerUsername);
  let quizPic = user.profilePicture;
  let quizImage = await Storage.get(quizPic);
  setQuizProfPic(quizImage);
}

function QuizBox({ title, author, id }) {
  const [quizProfPic, setQuizProfPic] = useState(photo2);
  let res = async () => {
    let stink = await getQuizPic(id, setQuizProfPic);
  };
  const [loadingImage, setLoadingImage] = useState(res);
  return (
    <div className="quiz-box mb-3">
      <Link to={"/quizPage/" + id} style={{ textDecoration: "none" }}>
        <Card
          className="text-center"
          style={{ height: "250px" }}
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
      </Link>
    </div>
  );
}

export default QuizBox;
