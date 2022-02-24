import React from "react";
import { Button } from "react-bootstrap";

function GroupBox({ link, name }) {
  return (
    <div className="group-box">
      <Button variant="dark p-0 col-lg-12">
        <img className="group-box img-fluid mb-0" src={link} alt="" />
        <h2 className="float-start ps-2">{name}</h2>
      </Button>{" "}
    </div>
  );
}

export default GroupBox;
