import React from "react";
import { Form, FloatingLabel, OverlayTrigger, Tooltip } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

function QuizAnswer({ answer, index, handleUpdateQuestion }) {
  function handleNameChange(evt) {
    const newName = evt.nativeEvent.target.value;
    handleUpdateQuestion(index, {
      ...answer,
      name: newName,
    });
  }

  return (
    <div className="answer">
      <h4>Answer {index + 1}</h4>
      <Form.Group className="mb-3" controlId="answer">
        <FloatingLabel label="Answer" className="mb-3">
          <Form.Control name="name" type="text" onChange={handleNameChange} />
        </FloatingLabel>
      </Form.Group>
      <div className="ps-5">
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="button-tooltip-2">
              For each answer of a question, assign weights to the quiz results
              here. These will tally up and the highest point total will be the
              result displayed at the end of the quiz.{" "}
            </Tooltip>
          }
        >
          {({ ref, ...triggerHandler }) => (
            <h4 {...triggerHandler}>
              Weights <InfoCircle className="py-1" ref={ref} />
            </h4>
          )}
        </OverlayTrigger>
        <form className="ps-3">
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 1</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 1</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 1</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 1</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 1</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 1</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizAnswer;
