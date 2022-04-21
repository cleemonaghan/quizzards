import React, { Fragment } from "react";
import Media from "react-media";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function GroupBox({ link, name, groupID }) {
  return (
    <div className="group-box mb-4">
      <Link
        to={{
          pathname: "/groupPage/" + groupID,
        }}
        style={{ textDecoration: "none" }}
      >
        <Card bg="dark" text="white" style={{ height: "250px" }}>
          <Media
            queries={{
              one: "(max-width: 575px)",
              other: "(min-width: 576px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.one && (
                  <Card.Img
                    variant="top"
                    src={link}
                    style={{ height: "200px" }}
                  />
                )}
                {matches.other && (
                  <Card.Img
                    variant="top"
                    src={link}
                    style={{ height: "150px" }}
                  />
                )}
              </Fragment>
            )}
          </Media>
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
