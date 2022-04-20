import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        </Card>
      </Link>
    </div>
  );
}

export default QuizBox;
