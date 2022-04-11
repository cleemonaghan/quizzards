import React from "react";
import { Form, Button, FloatingLabel, Accordion,
  Row,
  Col, } from "react-bootstrap";
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
    <div>
      <h4>Question {index + 1}</h4>
      <Row className="result mb-3">
        <Col>
      <Form.Group className="mb-3" controlId="question">
        <FloatingLabel label="Question" className="mb-3">
          <Form.Control name="name" type="text" onChange={handleNameChange} />
        </FloatingLabel>
      </Form.Group>
      
      </Col>
        <Col md="auto">
        <Form.Group controlId="question_pic" className="mb-3">
          <Form.Control
            type="file"
            name="question_pic"
            accept="image/png, image/jpeg"
          />
        </Form.Group>
        </Col>
      </Row>
    </div>
  );
}

export default QuizQuestion;
