import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuizBox({ title, author ,id }) {
  return (
    <div className="quiz-box mb-4">
      <Link to={"/quizPage/"+id} style={{ textDecoration: "none" }}>
        <Card className="text-center py-3" bg="dark" text="white">
          <Card.Body>
            <Card.Title>
              <h2>{title}</h2>
            </Card.Title>
            <Card.Text>{"By: "+author}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default QuizBox;
