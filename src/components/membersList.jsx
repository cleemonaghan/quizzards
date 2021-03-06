import React, { useState, useEffect } from "react";
import { Storage, Auth } from "aws-amplify";
import Friend from "./friend";
import Member from "./member";
import { Button, Form, Modal } from "react-bootstrap";
import { getUser } from "../databaseFunctions/users";
import {
  getGroup,
  addMemberToGroup,
  requestMemberToGroup,
  addMemberfromRequestList,
  removeMemberFromGroup,
} from "../databaseFunctions/groups";

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

async function refreshMembers(
  ownername,
  memberList,
  requestedMemList,
  setMembers,
  setMemberRequests
) {
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
    let reqResult = [];
    for (let mem in requestedMemList) {
      if (requestedMemList[mem].userID === ownername) continue;
      let image = await getUserImage(requestedMemList[mem].userID);
      reqResult.push({
        name: requestedMemList[mem].userID,
        image: image,
      });
    }
    setMemberRequests(reqResult);
  } catch (e) {
    //there was an error, so print it
    console.log(e);
  }
}

function displayMembers(loading, members) {
  if (loading) return <p>loading...</p>;
  else {
    if (members.length < 1) {
      return <p className="ms-2">There are no other members.</p>;
    }
    let list = [];
    members.forEach(element => {
      list.push(
        <Member
          userName={element.name}
          link={element.image}
          key={element.name}
        />
      );
    });
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
        if (memberList[mem].name === friendList[friend]) {
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

async function gatherMemberReqs(
  memberReqList,
  memberList,
  setLoading,
  setFriends
) {
  try {
    setLoading(true);
    let result = [];
    for (let friend in memberReqList) {
      let match = false;
      for (let mem in memberList) {
        if (memberList[mem].userID === memberReqList[friend].userID) {
          match = true;
          break;
        }
      }
      if (!match) {
        let image = await getUserImage(memberReqList[friend].userID);
        result.push({
          name: memberReqList[friend].userID,
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

function generateInviteButton(currentUser, owner, showFriends) {
  if (currentUser === owner)
    return (
      <Button variant="outline-primary" onClick={showFriends}>
        Invite
      </Button>
    );
  else {
    return <div></div>;
  }
}

async function removeUserFromGroup(username, groupID, isMember, setMembership) {
  console.log(username);
  console.log(groupID);
  console.log(isMember);
  //remove user from group member list
  let res = await removeMemberFromGroup(username, groupID);
  console.log("Leaving group");
  console.log(res);
  if (isMember) {
    setMembership(false);
  }
  console.log(isMember);
}

function useRequestButton(
  params,
  currentUser,
  owner,
  members,
  requested,
  groupID,
  handleShow
) {
  //let disable = false;
  //let title = "Request to Join";
  const [disable, setDisable] = useState(false);
  const [title, setTitle] = useState("Request to Join");
  if (currentUser === owner) {
    let color = "outline-success";
    if (requested.length < 1) {
      color = "outline-primary";
    }
    return (
      <Button variant={color} onClick={handleShow}>
        Accept Requests
      </Button>
    );
  } else if (
    requested.filter(function (e) {
      return e.name === currentUser;
    }).length > 0
  ) {
    //we have requested to join, but have not been accepted yet
    return (
      <Button variant="outline-primary" disabled>
        Requested
      </Button>
    );
  } else if (
    members.filter(function (e) {
      return e.name === currentUser;
    }).length > 0
  ) {
    //we are already a member
    return (
      <Button
        variant="outline-danger"
        onClick={async () => {
          await removeUserFromGroup(
            currentUser,
            groupID,
            params.isMember,
            params.setMembership
          );
          
        }}
      >
        Leave Group
      </Button>
    );
  } else {
    //we are not in the group, we have not requested to join yet

    return (
      <Button
        variant="outline-primary"
        disabled={disable}
        onClick={async () => {
          //request to join
          let x = await requestMemberToGroup(currentUser, groupID);
          //update button
          setDisable(true);
          setTitle("Requested");
        }}
      >
        {title}
      </Button>
    );
  }
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
          <Form.Check
            className="col-1 my-auto"
            id={friends[i].name}
          ></Form.Check>
          <div className="col-11 ps-0">
            <Friend
              userName={friends[i].name}
              link={friends[i].image}
              key={friends[i].name}
            />
          </div>
        </Form.Group>
      );
    }
    if (list.length < 1) {
      return <p>There is no one to add to the group!</p>;
    }
    return <div>{list}</div>;
  }
}

function MembersList(params) {
  const ownerUsername = params.group.ownerUsername;
  const [username, loading1] = useGatherCurrentUser();
  const [ownerProfile, loading2] = useGatherOwner(ownerUsername);

  const [members, setMembers] = useState([]);
  const [memberRequests, setMemberRequests] = useState([]);

  const [loading3, setLoading3] = useState(false);

  useEffect(async () => {
    setLoading3(true);
    await refreshMembers(
      ownerUsername,
      params.group.members.items,
      params.group.memberRequests.items,
      setMembers,
      setMemberRequests
    );
    //we are finished loading, so set loading to false
    setLoading3(false);
  }, []);

  //constants for adding friends to the group
  const [loading4, setLoading4] = useState(false);
  const [friends, setFriends] = useState([]);

  const [showFriends, setShowFriends] = useState(false);
  const [showRequests, setShowRequests] = useState(false);
  const handleClose = () => {
    setShowFriends(false);
    setShowRequests(false);
  };
  const useHandleShowFriends = async () => {
    let res = await gatherFriends(username, members, setLoading4, setFriends);
    setShowFriends(true);
  };
  const useHandleShowRequests = async () => {
    let res = await gatherMemberReqs(
      params.group.memberRequests.items,
      params.group.members.items,
      setLoading4,
      setMemberRequests
    );
    setShowRequests(true);
  };

  const inviteButton = generateInviteButton(
    username,
    ownerUsername,
    useHandleShowFriends
  );

  const requestButton = useRequestButton(
    params,
    username,
    ownerUsername,
    members,
    memberRequests,
    params.group.id,
    useHandleShowRequests
  );

  return loading1 || loading2 || loading3 || loading4 ? (
    <div>Loading...</div>
  ) : (
    <div className="members-list">
      <div className="outline">
        <div className="row">
          <h4 className="col-5 ms-2 my-2"> Owner: </h4>
        </div>
        {ownerProfile}
        <h4 className="ms-2 me-0 my-2"> Members: </h4>
        <div className="row mx-auto">
          <div className="col-auto"> {requestButton} </div>
          <div className="col-auto"> {inviteButton} </div>
        </div>

        {displayMembers(loading3, members)}
      </div>

      <div>
        {/** Modal for adding friends to the Group */}
        <Modal show={showFriends} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Friends to Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/** List the friends below */}
            <Form
              id="member-form"
              onSubmit={async (event) => {
                //addMembers
                event.preventDefault();
                let target = event.target;
                for (let i = 0; i < friends.length; i++) {
                  // if friend is checked, add them to the group
                  if (event.target[i].checked) {
                    let res = await addMemberToGroup(
                      target[i].id,
                      params.group.id
                    );
                    console.log("Adding member to group:");
                    console.log(res);
                  }
                }
                // update the members list
                let res = await getGroup(params.group.id);
                console.log("Updating group members:");
                console.log(res);
                refreshMembers(
                  ownerUsername,
                  res.members.items,
                  res.memberRequests.items,
                  setMembers,
                  setMemberRequests
                );
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
      <div>
        {/** Modal for accepting requests to join the Group */}
        <Modal show={showRequests} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Accept join requests</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/** List the requestees below */}
            <Form
              id="member-req-form"
              onSubmit={async (event) => {
                //addMembers
                event.preventDefault();
                let target = event.target;
                for (let i = 0; i < memberRequests.length; i++) {
                  // if friend is checked, add them to the group
                  if (event.target[i].checked) {
                    await addMemberfromRequestList(
                      target[i].id,
                      params.group.id
                    );
                  }
                }
                // update the members list
                let res = await getGroup(params.group.id);
                console.log("Updating group members:");
                console.log(res);
                refreshMembers(
                  ownerUsername,
                  res.members.items,
                  res.memberRequests.items,
                  setMembers,
                  setMemberRequests
                );
                handleClose();
              }}
            >
              {displayModalBody(loading4, memberRequests)}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button form="member-req-form" variant="primary" type="submit">
              Add Members
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MembersList;
