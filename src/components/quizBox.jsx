import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuizBox({ name, description }) {
  return (
    <div className="quiz-box">
      <Link to="/quiz" style={{ textDecoration: "none" }}>
        <Card className="text-center py-3" bg="dark" text="white">
          <Card.Body>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default QuizBox;
