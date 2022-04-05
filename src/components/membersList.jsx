import React, { useState, useEffect } from "react";
import { Storage, Auth } from "aws-amplify";
import Friend from "./friend";
import Member from "./member";
import { Button, Form, Modal } from "react-bootstrap";
import { photo2, photo3, photo4, photo5 } from "../images";
import { getUser } from "../databaseFunctions/users";
import { addMemberToGroup } from "../databaseFunctions/groups"

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
      setOwnerProfile(<Member userName={username} link={image} />);
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
        result.push({
          name: memberList[mem].userID,
          image: image,
        });
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

function displayMembers(loading, members) {
  if (loading) return <p>loading...</p>;
  else {
    if(members.length < 1) {
      return <p>There are no other members.</p>
    }
    let list = [];
    for (let i in members) {
      list.push(
        <Member
          userName={members[i].name}
          link={members[i].image}
          key={members[i].name}
        />
      );
    }
    return <div>{list}</div>;
  }
}

async function gatherFriends(username, memberList, setLoading, setFriends) {
  try {
    setLoading(true);
    let friendList = (await getUser(username)).friends;
    let result = [];
    for (let friend in friendList) {
      let match = false;
      for (let mem in memberList) {
        if (memberList[mem].userID === friendList[friend]) {
          match = true;
          break;
        }
      }
      if (!match) {
        let image = await getUserImage(friendList[friend]);
        result.push({
          name: friendList[friend],
          image: image,
        });
      }
    }
    setFriends(result);
  } catch (e) {
    //there was an error, so print it
    console.log(e);
  } finally {
    //we are finished loading, so set loading to false
    setLoading(false);
  }

  return true;
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

async function addMembers(event, friends, groupID) {
  event.preventDefault();
  let target = event.target;
  for(let i = 0; i < friends.length; i++) {
    // if friend is checked, add them to the group
    if(event.target[i].checked) {
      console.log("Adding "+target[i].id)
      await addMemberToGroup(target[i].id, groupID)
    }
  }
  console.log("Done adding members to group!");
}

function displayModalBody(loading, friends) {
  if (loading) return <p>loading...</p>;
  else {
    let list = [];
    for (let i in friends) {
      list.push(
        <Form.Group
          className="row"
          controlId={friends[i].name}
          key={friends[i].name}
        >
          <Form.Check id={friends[i].name}></Form.Check>
          <Friend
            userName={friends[i].name}
            link={friends[i].image}
            key={friends[i].name}
          />
        </Form.Group>
      );
    }
    if(list.length < 1) {
      return <p>All your friends are in the group!</p>
    }
    return <div>{list}</div>;
  }
}

function MembersList(params) {
  const ownerUsername = params.group.ownerUsername;
  const [username, loading1] = useGatherCurrentUser();
  const [ownerProfile, loading2] = useGatherOwner(ownerUsername);
  const [members, loading3] = useGatherMembers(
    ownerUsername,
    params.group.members.items
  );

  //constants for adding friends to the group
  const [loading4, setLoading4] = useState(true);
  const [friends, setFriends] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const useHandleShow = async () => {
    let res = await gatherFriends(
      username,
      params.group.members.items,
      setLoading4,
      setFriends
    );
    setShow(true);
  };
  const inviteButton = generateInviteButton(
    username,
    ownerUsername,
    useHandleShow
  );

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
        {displayMembers(loading3, members)}
      </div>

      <div>
        {/** Modal for adding friends to the Group */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Friends to Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/** List the friends below */}
            <Form
              id="member-form"
              onSubmit={(event) => {
                addMembers(event, friends, params.group.id);
                handleClose();
              }}
            >
              {displayModalBody(loading4, friends)}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button form="member-form" variant="primary" type="submit">
              Add Friends
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MembersList;
