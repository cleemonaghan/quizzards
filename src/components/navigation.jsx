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

          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">
                <HouseFill className="mx-1 mb-1" />
                Home
              </Nav.Link>
              <Nav.Link href="/quizzes">
                <PatchQuestionFill className="mx-1 mb-1" />
                Quizzes
              </Nav.Link>
              <Nav.Link href="/groups">
                <PeopleFill className="mx-1 mb-1" />
                Groups
              </Nav.Link>
              <Nav.Link href="/friends">
                <SuitHeartFill className="mx-1 mb-1" />
                Friends
              </Nav.Link>
              <Nav.Link href="/profile">
                <PersonCircle className="mx-1 mb-1" />
                Profile
              </Nav.Link>
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
