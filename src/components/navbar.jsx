import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Auth } from 'aws-amplify';


class NavBar extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const response = await Auth.currentAuthenticatedUser();
		let user = response.username;
    this.setState({ username: user});
  }

  async signOutUser() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }


  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src=""
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Quizzards
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#groups">Groups</Nav.Link>
            <Nav.Link href="#messages">Messages</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#profile">{this.state.username}</Nav.Link>
            <button onClick={this.signOutUser}>Sign out</button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
