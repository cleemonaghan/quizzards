import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function GroupBox({ link, name }) {
  return (
    <div className="group-box">
      <Link to="/groupPage">
        <Button variant="dark p-0 col-12">
          <img className="group-box img-fluid mb-0" src={link} alt="" />
          <h2 className="float-start ps-2">{name}</h2>
        </Button>{" "}
      </Link>
    </div>
  );
}

export default GroupBox;
