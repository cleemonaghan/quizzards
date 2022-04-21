import React from "react";
import { Card, Button } from "react-bootstrap";

function QuizStatsBox({ title, author, id,owner }) {
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
        </Card>
      </Button>
    </div>
  );
}

export default QuizStatsBox;
