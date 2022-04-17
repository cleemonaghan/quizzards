import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { default_group } from "../images";

function QuizBox({ title, author ,id }) {
  return (
    <div className="quiz-box mb-4">
      <Link to={"/quizPage/"+id} style={{ textDecoration: "none" }}>
        <Card className="text-center py-3" bg="dark" text="white">
          {/* <Card.Img
            variant="top"
            // src={database.quiz_picture}
            // alt={database.title}
            src={default_group}
            alt="..."
          />
          <Card.ImgOverlay
            className="overlap_text align-items-center d-flex justify-content-center"
            style={{
              fontWeight: "bold",
              // backgroundColor: "black",
              // opacity: "0.2",
            }}
          >
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </Card.ImgOverlay> */}
          <Card.Body>
            <Card.Title>
              <h2>{title}</h2>
            </Card.Title>
            <Card.Text>{"By: "+author}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default QuizBox;
