import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";

function QuizAnswer({ aNumber }) {
  return (
    <div className="answer">
      <h4>Answer {aNumber}</h4>
      <Form.Group className="mb-3" controlId="answer">
        <FloatingLabel label="Answer" className="mb-3">
          <Form.Control name="name" type="text" />
        </FloatingLabel>
      </Form.Group>
      <div className="ps-5">
        <Form.Group controlId="answer_pic" className="mb-3">
          <Form.Label>Answer Picture</Form.Label>
          <Form.Control
            type="file"
            name="answer_pic"
            accept="image/png, image/jpeg"
          />
        </Form.Group>
        <h4>Points (i)</h4>
        <form className="ps-3">
          <label>
            {" "}
            <h5 className="pe-2">Result 1</h5>{" "}
          </label>
          <select>
            <option value="0"> 0</option>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="3"> 4</option>
            <option value="3"> 5</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default QuizAnswer;
