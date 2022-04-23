import React, { Fragment } from "react";
import Media from "react-media";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { photo2 } from "../images";

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
              mobile: "(max-width: 575px)",
              other: "(min-width: 576px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.mobile && (
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
          {/* <Card.ImgOverlay>
            <div className="d-flex justify-content-end">
              <StarFill color="#feca1d" />
            </div>
          </Card.ImgOverlay> */}
          <Card.Body className="py-2">
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
          </Card.Body>
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              width: "30px",
            }}
          >
            {/* <StarFill color="#feca1d" /> */}
            <img
              className="img-fluid rounded-circle my-auto"
              src={photo2}
              alt=""
            />
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default GroupBox;
