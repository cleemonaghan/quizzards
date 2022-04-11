import React from "react";
import { Form, Button, FloatingLabel, Accordion } from "react-bootstrap";
import { QuizAnswer } from "../components";

function QuizQuestion({ question, index, handleUpdateQuestion }) {
  function handleNameChange(evt) {
    const newName = evt.nativeEvent.target.value;
    handleUpdateQuestion(index, {
      ...question,
      name: newName,
    });
  }

  return (
    <div className="question">
      <h4>Question {index + 1}</h4>
      <Form.Group className="mb-3" controlId="question">
        <FloatingLabel label="Question" className="mb-3">
          <Form.Control name="name" type="text" onChange={handleNameChange} />
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
      </div>
    </div>
  );
}

export default QuizQuestion;
