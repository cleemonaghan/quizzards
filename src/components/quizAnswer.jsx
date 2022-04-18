import React from "react";
import {
  Form,
  FloatingLabel,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

function QuizAnswer({
  answer,
  index,
  handleUpdateAnswer,
  handleUpdateWeight,
  results,
}) {
  function handleNameChange(evt) {
    const newName = evt.nativeEvent.target.value;
    handleUpdateAnswer(index, {
      ...answer,
      name: newName,
    });
  }

  function handleWeightChange(evt, resultIndex) {
    const newValue = parseInt(evt.nativeEvent.target.value);
    handleUpdateWeight(index, resultIndex, newValue);
  }

  return (
    <div className="answer">
      <h4>Answer {index + 1}</h4>
      <Row className="result mb-3">
        <Col>
          <Form.Group className="mb-3" controlId="answer">
            <FloatingLabel label="Answer" className="mb-3">
              <Form.Control
                name="name"
                type="text"
                onChange={handleNameChange}
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
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
              Points <InfoCircle className="py-1" ref={ref} />
            </h4>
          )}
        </OverlayTrigger>
        <Row className="ps-3 mb-3">
          {results.map((result, index) => {
            return (
              <Form.Group as={Col} key={index}>
                <Form.Label>
                  <strong>{index + 1 + ". " + result.name}</strong>
                </Form.Label>
                <Form.Select
                  label="weight"
                  onChange={(event) => handleWeightChange(event, index)}
                >
                  <option value="0"> 0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Form.Group>
            );
          })}
        </Row>
      </Row>
    </div>
  );
}

export default QuizAnswer;
