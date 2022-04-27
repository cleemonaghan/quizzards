import React, { useState, Fragment } from "react";
import Media from "react-media";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import { photo } from "../images";
import { Storage } from "aws-amplify";
import { getGroup } from "../databaseFunctions/groups";
import { getUser } from "../databaseFunctions/users";

async function getGroupPic(groupID, setGroupProfPic) {
  console.log("get group pic");
  let group = await getGroup(groupID);
  let user = await getUser(group.ownerUsername);
  let groupPic = user.profilePicture;
  let groupImage = await Storage.get(groupPic);
  setGroupProfPic(groupImage);
}

function GroupBox({ link, name, groupID }) {
  const [groupProfPic, setGroupProfPic] = useState(photo);
  let res = async () => {
    let stink = await getGroupPic(groupID, setGroupProfPic);
  };
  const [loadingImage, setLoadingImage] = useState(res);

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
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <img
              className="img-fluid rounded-circle my-auto"
              style={{ height: "30px", width: "30px" }}
              src={groupProfPic}
              alt=""
            />
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default GroupBox;
