import React from "react";
import { GroupBox } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

class Groups extends React.Component {
  render() {
    return (
      <div className="groups">
        <div className="container">
          <div className="row">
            <div className="col-8 mt-5 mb-4">
              <MDBCol>
                <MDBInput
                  hint="Search Groups"
                  type="text"
                  containerClass="active-pink active-pink-2 mt-0 mb-3"
                  variant="outline-primary"
                  size="lg"
                />
              </MDBCol>
            </div>
            <div className="col-1"></div>
            <div className="col-3 mt-5 mb-4 float-end">
              <Link to="/createGroup">
                <Button variant="outline-primary" size="lg">
                  Create New Group +
                </Button>{" "}
              </Link>
            </div>
          </div>
          {/* <hr /> */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-4">Suggested Groups</h1>
          </div>
          <div className="row pb-5">
            <div className="col-3">
              <GroupBox link={photo13} name="Hogwarts" />
            </div>
            <div className="col-3">
              <GroupBox link={photo14} name="Puppies" />
            </div>
            <div className="col-3">
              <GroupBox link={photo15} name="Astronomy" />
            </div>
            <div className="col-3">
              <GroupBox link={photo16} name="Candy" />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-3">
              <GroupBox link={photo17} name="Books" />
            </div>
            <div className="col-3">
              <GroupBox link={photo13} name="Hogwarts" />
            </div>
            <div className="col-3">
              <GroupBox link={photo14} name="Puppies" />
            </div>
            <div className="col-3">
              <GroupBox link={photo15} name="Astronomy" />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-3">
              <GroupBox link={photo16} name="Candy" />
            </div>
            <div className="col-3">
              <GroupBox link={photo17} name="Books" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Groups;
