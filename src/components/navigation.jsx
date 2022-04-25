import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import {
  HouseFill,
  PeopleFill,
  SuitHeartFill,
  PersonCircle,
  PatchQuestionFill,
} from "react-bootstrap-icons";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

class Navigation extends React.Component {
  async signout() {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log("There was an error signing out: ", err);
    }
  }
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        sticky="top"
        className="mx0"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="27"
              height="30"
              className="d-inline-block"
            />{" "}
            Quizzards
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link to="/">
                <HouseFill className="mx-1 mb-1" />
                Home
              </Link>
              <Link to="/quizzes">
                <PatchQuestionFill className="mx-1 mb-1" />
                Quizzes
              </Link>
              <Link to="/groups">
                <PeopleFill className="mx-1 mb-1" />
                Groups
              </Link>
              <Link to="/friends">
                <SuitHeartFill className="mx-1 mb-1" />
                Friends
              </Link>
              <Link to="/profile">
                <PersonCircle className="mx-1 mb-1" />
                Profile
              </Link>
              {/* <NavDropdown>
                <NavDropdown.Item onClick={this.signout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown> */}
               <Button variant="light" onClick={this.signout}>
                Signout
              </Button> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
