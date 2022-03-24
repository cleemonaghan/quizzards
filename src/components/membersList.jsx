import React, { useState, useEffect } from "react";
import { Storage, Auth } from "aws-amplify";
import Friend from "./friend";
import Member from "./member";
import { Button, Form, Modal } from "react-bootstrap";
import { photo2, photo3, photo4, photo5 } from "../images";
import { getUser } from "../databaseFunctions/users";

async function getUserImage(username) {
  let user = await getUser(username);
  let res = await Storage.get(user.profilePicture);
  return res;
}

function useGatherCurrentUser() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  async function getInfo() {
    try {
      //fetch the user's username
      const response = await Auth.currentAuthenticatedUser();
      setUsername(response.username);
    } catch (e) {
      //there was an error, so print it
      console.log(e);
    } finally {
      //we are finished loading, so set loading to false
      setLoading(false);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);
  return [username, loading];
}

function useGatherOwner(username) {
  const [loading, setLoading] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(null);
  async function getInfo() {
    try {
      //fetch the owner's username and image then update the ownerProfile state
      let image = await getUserImage(username);
      setOwnerProfile(<Friend userName={username} link={image} />);
    } catch (e) {
      //there was an error, so print it
      console.log(e);
    } finally {
      //we are finished loading, so set loading to false
      setLoading(false);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);
  return [ownerProfile, loading];
}

function useGatherMembers(ownername, memberList) {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState(null);
  async function getInfo() {
    try {
      let result = [];
      for (let mem in memberList) {
        if (memberList[mem].userID === ownername) continue;
        let image = await getUserImage(memberList[mem].userID);
        result.push(
          <Friend
            userName={memberList[mem].userID}
            link={image}
            key={memberList[mem].userID}
          />
        );
      }
      setMembers(result);
    } catch (e) {
      //there was an error, so print it
      console.log(e);
    } finally {
      //we are finished loading, so set loading to false
      setLoading(false);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);
  return [members, loading];
}

function generateInviteButton(currentUser, owner, handleShow) {
  if (currentUser === owner)
    return (
      <div className="float-end col-5 mt-2">
        <Button variant="outline-primary" onClick={handleShow}>
          Invite
        </Button>{" "}
      </div>
    );
  else return <div></div>;
}

function MembersList(params) {
  const [username, loading1] = useGatherCurrentUser();
  const [ownerProfile, loading2] = useGatherOwner(params.group.ownerUsername);
  const [members, loading3] = useGatherMembers(
    params.group.ownerUsername,
    params.group.members.items
  );


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inviteButton = generateInviteButton(username, params.group.ownerUsername, handleShow)

  return loading1 || loading2 || loading3 ? (
    <div>Loading...</div>
  ) : (
    <div className="members-list">
      <div className="outline ms-3 mb-5">
        <div className="row">
          <h4 className="col-5 mx-2 my-2"> Owner: </h4>
        </div>
        {ownerProfile}

        <div className="row">
          <h4 className="col-5 mx-2 my-2"> Members: </h4>
          <div className="col-1"></div>
          {inviteButton}
        </div>
        {members}
        <Friend userName={"test1"} link={photo2} />
        <Friend userName={"test2"} link={photo3} />
        <Friend userName={"test3"} link={photo4} />
        <Friend userName={"test4"} link={photo5} />
      </div>

      <div>
        {/** Modal for adding friends to the Group */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Friends to Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/** List the friends below */}
            <Form>
              <div className="row">
                <Form.Check></Form.Check>
                <Friend userName={"test1"} link={photo2} />
              </div>
              <div className="row">
                <Form.Check></Form.Check>
                <Friend userName={"test2"} link={photo3} />
              </div>
              <div className="row">
                <Form.Check></Form.Check>
                <Friend userName={"test3"} link={photo4} />
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Friends
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MembersList;
