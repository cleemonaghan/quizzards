import React, { useState } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Dropdown,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

function QuizResult({ result, index, handleUpdateResult }) {
  const [temp, setTemp] = useState(null);

  function handleNameChange(evt) {
    const newName = evt.nativeEvent.target.value;
    handleUpdateResult(index, {
      ...result,
      name: newName,
    });
  }

  function handleImageChange(event) {
    // console.log(evt.nativeEvent.target.value);
    if (event.target.files) {
      if (event.target.files.length > 0 && event.target.files[0].size > 1) {
        let file = event.target.files[0];
        console.log(file);
        handleUpdateResult(index, {
          ...result,
          img: file,
        });
        setTemp(URL.createObjectURL(file));
      } else {
        //no file was uploaded, so revert to the default
        handleUpdateResult(index, {
          ...result,
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
       <h4>Result {index + 1}</h4>
      <Row className="result mb-3">
        <Col>
          <Form.Group className="mb-3" controlId="result-name">
            <FloatingLabel label="Result Name" className="mb-3">
              <Form.Control
                name="name"
                type="text"
                onChange={handleNameChange}
              />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              Please provide a name for the result.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="auto">
            <Form.Group controlId="result_pic" className="mb-3">
              {/*<Form.Label>Result Picture</Form.Label>*/}
              <Form.Control
                type="file"
                name="result_pic"
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

export default QuizResult;
