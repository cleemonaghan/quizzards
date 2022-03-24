import React, { useState } from "react";
import { SuitHeartFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  acceptFriend,
  rejectFriend,
  requestFriend,
} from "../databaseFunctions/users";

function heart(status) {
  if (status === "Friends") {
    return (
      <div className="col-1 heart">
        <SuitHeartFill color="#f14e48" />
      </div>
    );
  } else return null;
}

function useStatus(ourUser, username, status) {
  const [submit, setSubmit] = useState(false);

  if (status === "Requested") {
    return (
      <div className="ms-5 ps-5">
        <Button
          variant="outline-success"
          size="sm"
          disabled={submit}
          onClick={() => {
            acceptFriend(ourUser, username);
            setSubmit(true);
          }}
        >
          Accept
        </Button>{" "}
        <Button
          variant="outline-danger"
          size="sm"
          disabled={submit}
          onClick={() => {
            rejectFriend(ourUser, username);
            setSubmit(true);
          }}
        >
          Deny
        </Button>{" "}
      </div>
    );
  } else if (status === "Unconnected") {
    return (
      <div className="ms-5 ps-5">
        <Button
          variant="outline-primary"
          size="sm"
          disabled={submit}
          onClick={() => {
            requestFriend(ourUser, username);
            setSubmit(true);
          }}
        >
          Request
        </Button>{" "}
      </div>
    );
  } else if (status === "Waiting") {
    return (
      <div className="ms-5 ps-5">
        <Button variant="primary" size="sm" disabled={true}>
          Requested
        </Button>{" "}
      </div>
    );
  }

  //status === "Friends"
  return <div></div>;
}

function User({ ourUser, username, image, status }) {
  return (
    <div className="user">
      <div className="row">
        <img
          className="img-fluid rounded-circle col-2 px-2 py-2"
          src={image}
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        {heart(status)}
        <Link 
          to={{
            pathname: "/profile/" + username,
          }}
          className="font-weight-light col-8 ps-2 pt-4 mb-0"
        ><h5> {username} </h5></Link>
        
        {useStatus(ourUser, username, status)}
      </div>
    </div>
  );
}

export default User;
