import React, { useState }  from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Accordion,
  Row,
  Col,
} from "react-bootstrap";
import { QuizAnswer } from "../components";

function QuizQuestion({ question, index, handleUpdateQuestion }) {

  
  const [temp, setTemp] = useState(null);


  function handleNameChange(evt) {
    const newName = evt.nativeEvent.target.value;
    handleUpdateQuestion(index, {
      ...question,
      name: newName,
    });
  }

  function handleImageChange(event) {
    // console.log(evt.nativeEvent.target.value);
    if (event.target.files) {
      if (event.target.files.length > 0 && event.target.files[0].size > 1) {
        let file = event.target.files[0];
        handleUpdateQuestion(index, {
          ...question,
          img: file,
        });
        setTemp(URL.createObjectURL(file));
      } else {
        //no file was uploaded, so revert to the default
        handleUpdateQuestion(index, {
          ...question,
          img: "default_group_image",
        });
        setTemp(null);
      }
    }
  }

  function displayImage(image) {
    if (image === null) {
      return <div></div>;
    } else
      return (
        <img
          id="quiz_pic_display"
          className="img-fluid" // col-2 ms-4 mt-2 mb-0 px-2 py-2"
          alt=""
          src={image}
          style={{ height: "200px", width: "400px" }}
        />
      );
  }

  return (
    <div>
      <h4>Question {index + 1}</h4>
      <Row className="result mb-3">
        <Col>
          <Form.Group className="mb-3" controlId="question">
            <FloatingLabel label="Question" className="mb-3">
              <Form.Control
                name="name"
                type="text"
                onChange={handleNameChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col md="auto">
          <Form.Group controlId="question_pic" className="mb-3">
            <Form.Control
              type="file"
              name="question_pic"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide an image for the result.
            </Form.Control.Feedback>
          </Form.Group>
          {displayImage(temp)}
        </Col>
      </Row>
    </div>
  );
}

export default QuizQuestion;
