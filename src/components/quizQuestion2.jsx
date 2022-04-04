import React from "react";
import { Form, Button, FloatingLabel, Accordion } from "react-bootstrap";
import { QuizAnswer } from "../components";

function QuizQuestion({ qNumber }) {
  return (
    <div className="question">
      <h4>Question {qNumber}</h4>
      <Form.Group className="mb-3" controlId="question">
        <FloatingLabel label="Question" className="mb-3">
          <Form.Control name="name" type="text" />
        </FloatingLabel>
      </Form.Group>
      <div className="ps-5">
        <Form.Group controlId="question_pic" className="mb-3">
          <Form.Label>Question Picture</Form.Label>
          <Form.Control
            type="file"
            name="question_pic"
            accept="image/png, image/jpeg"
          />
        </Form.Group>
        <QuizAnswer aNumber="1" />

        <Button className="mb-3" variant="outline-primary">
          Add Answer +
        </Button>
      </div>
    </div>
  );
}

export default QuizQuestion;
