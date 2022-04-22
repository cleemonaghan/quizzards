import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { photo2 } from "../images";

function QuizBox({ title, author, id }) {
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
            {/* <StarFill color="#feca1d" /> */}
            <img
              className="img-fluid rounded-circle my-auto"
              src={photo2}
              alt=""
            />
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default QuizBox;
