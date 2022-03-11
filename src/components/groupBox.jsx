import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function GroupBox({ link, name }) {
  return (
    <div className="group-box mb-4">
      <Link to="/groupPage" style={{ textDecoration: "none" }}>
        <Card bg="dark" text="white">
          <Card.Img variant="top" src={link} style={{ height: "10rem" }} />
          <Card.Body className="py-2">
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default GroupBox;
