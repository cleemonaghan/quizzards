import React from "react";
import { Form, Button, FloatingLabel, Dropdown } from "react-bootstrap";

function QuizResult({ result, index, handleUpdateResult }) {
  function handleNameChange(evt) {
    // console.log(evt.nativeEvent.target.value);
    const newName = evt.nativeEvent.target.value;
    handleUpdateResult(index, {
      ...result,
      name: newName,
    });
  }

  return (
    <div className="result">
      <h4>Result {index + 1}</h4>
      <Form.Group className="mb-3" controlId="result-name">
        <FloatingLabel label="Result Name" className="mb-3">
          <Form.Control name="name" type="text" onChange={handleNameChange} />
        </FloatingLabel>
      </Form.Group>
      <div className="ps-5">
        <Form.Group controlId="result_pic" className="mb-3">
          <Form.Label>Result Picture</Form.Label>
          <Form.Control
            type="file"
            name="result_pic"
            accept="image/png, image/jpeg"
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default QuizResult;
