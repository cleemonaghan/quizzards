import React from "react";
import { Form, FloatingLabel, OverlayTrigger, Tooltip } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

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
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="button-tooltip-2">
              For each answer of a question, assign points to the quiz results
              here. These will tally up and the highest point total will be the
              result displayed at the end of the quiz.{" "}
            </Tooltip>
          }
        >
          {({ ref, ...triggerHandler }) => (
            <h4 {...triggerHandler}>
              Points <InfoCircle className="py-1" ref={ref} />
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
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 2</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 3</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 4</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 5</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 6</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 7</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 8</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 9</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 10</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 11</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
          <div>
            <label>
              {" "}
              <h5 className="pe-2">Result 12</h5>{" "}
            </label>
            <select>
              <option value="0"> 0</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="3"> 4</option>
              <option value="3"> 5</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizAnswer;
