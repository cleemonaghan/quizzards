import React from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

function CompareBox() {
  return (
    <div className="compare-box">
      <div className="outline mx-3 mb-5 pb-4">
        <Container>
          <Row>
            <Col>
              <h4 className="my-3"> My Answers: </h4>
            </Col>
            <Col className="row">
              <DropdownButton
                className="col-auto my-3"
                id="dropdown-basic-button"
                title="Friends"
                variant="outline-primary"
              >
                <Dropdown.Item href="#/action-1">Friend 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Friend 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Friend 3</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Friend 4</Dropdown.Item>
              </DropdownButton>
              <h4 className="col-auto my-auto"> Answers: </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>1. Question</h5>
              <p>Answer</p>
            </Col>
            <Col>
              <h5>1. Question</h5>
              <p>Answer</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>2. Question</h5>
              <p>Answer</p>
            </Col>
            <Col>
              <h5>2. Question</h5>
              <p>Answer</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>3. Question</h5>
              <p>Answer</p>
            </Col>
            <Col>
              <h5>3. Question</h5>
              <p>Answer</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CompareBox;
