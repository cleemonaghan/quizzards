import React, { useState, useEffect } from "react";
import { SuitHeartFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  acceptFriend,
  getUser,
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

/** This function deletes a user element from the old list and adds it to the new list
 *
 * @param {*} username
 * @param {*} oldList
 * @param {*} newList
 */
function updateList(username, oldList, newList) {
  //remove username from old list
  let removed = false;
  let i = 0;
  while (!removed && i < oldList.length) {
    if (oldList[i].props.children.props.username === username) {
      //found it
      let removedNode = oldList.splice(i, 1); // remove the username from the list
      console.log(removedNode[0].props.children.props.status);
      newList.push(removedNode[0]);
      removed = true;

      //updateOld(oldList);
      //updateNew(newList);
      //console.log(oldList, newList)
      return [oldList, newList];
    }
    i++;
  }
  console.log("Errorr on line 46");
  return [null, null];
}

function requestedButton(
  setButton,
  ourUser,
  friendUsername,
  setStatus,
  lists,
  status
) {
  //if (status === "Requested") {
  return (
    <div className="ms-5 ps-5">
      <Button
        variant="outline-success"
        size="sm"
        onClick={() => {
          acceptFriend(ourUser, friendUsername);
          setStatus("Friends");
          let res = friendButton(setButton);
          setButton(res);
          console.log(res);
          const [oldList, newList] = updateList(
            friendUsername,
            lists.friendReqElements,
            lists.friendElements
          );
          console.log(lists);
          lists.setFriendReqElements(oldList);
          lists.setFriendElements(newList);
          console.log(lists);
        }}
      >
        Accept
      </Button>{" "}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          console.log(status);
          rejectFriend(ourUser, friendUsername);
          setStatus("Unconnected");
          let res = unconnectedButton(
            setButton,
            ourUser,
            friendUsername,
            setStatus,
            lists,
            status
          );
          setButton(res);
          console.log(status);
          const [oldList, newList] = updateList(
            friendUsername,
            lists.friendReqElements,
            lists.recommendationElements
          );
          console.log(lists);
          lists.setFriendReqElements(oldList);
          lists.setRecommendationElements(newList);
          console.log(lists);
        }}
      >
        Deny
      </Button>{" "}
    </div>
  );
}

function unconnectedButton(
  setButton,
  ourUser,
  friendUsername,
  setStatus,
  lists,
  status
) {
  //if (status === "Unconnected") {
  return (
    <div className="ms-5 ps-5">
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => {
          console.log(status);
          requestFriend(ourUser, friendUsername);
          setStatus("Waiting");
          let res = waitingButton(setButton);
          setButton(res);
          console.log(status);

          const [oldList, newList] = updateList(
            friendUsername,
            lists.recommendationElements,
            lists.outgoingFriendReqElements
          );
          console.log(lists);
          lists.setRecommendationElements(oldList);
          lists.setOutgoingFriendReqElements(newList);
          console.log(lists);
        }}
      >
        Request
      </Button>{" "}
    </div>
  );
}
function waitingButton(setButton) {
  //if (status === "Waiting") {
  return (
    <div className="ms-5 ps-5">
      <Button variant="primary" size="sm" disabled={true}>
        Requested
      </Button>{" "}
    </div>
  );
}

function friendButton(setButton) {
  console.log("Updating");
  //status === "Friends"
  return <div></div>;
}

function useInitStatus(ourUser, friendUser, inputStatus, lists) {
  const [friendStatus, setStatus] = useState(inputStatus);
  const [button, setButton] = useState(null);

  async function getInfo() {
    try {
      console.log("Init");
      //if we don't know what our relationship is, figure it out
      if (friendStatus === "Unknown") {
        //find the user's status
        let res = await getUser(ourUser);
        if (res.friends.includes(friendUser)) {
          setStatus("Friends");
        } else if (res.outgoingFriendRequests.includes(friendUser)) {
          setStatus("Waiting");
        } else if (res.friendRequests.includes(friendUser)) {
          setStatus("Requested");
        } else {
          setStatus("Unconnected");
        }
      }
      //then assign the proper button for the friend
      if (friendStatus === "Friends") {
        setButton(friendButton(setButton));
      } else if (friendStatus === "Waiting") {
        setButton(waitingButton(setButton));
      } else if (friendStatus === "Requested") {
        setButton(
          requestedButton(
            setButton,
            ourUser,
            friendUser,
            setStatus,
            lists,
            friendStatus
          )
        );
      } else {
        //Unconnected
        setButton(
          unconnectedButton(
            setButton,
            ourUser,
            friendUser,
            setStatus,
            lists,
            friendStatus
          )
        );
      }
    } catch (e) {
      //there was an error, so log it
      console.log(e);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);

  return [friendStatus, button, setStatus, setButton];
}

function User({ ourUser, username, image, status, lists }) {
  const [friendStatus, button, setStatus, setButton] = useInitStatus(
    ourUser,
    username,
    status,
    lists
  );
  console.log("status:");
  console.log(friendStatus);

  return (
    <div className="user">
      <div className="row">
        <Link
          to={{ pathname: "/profile/" + username }}
          style={{ textDecoration: "none", color: "#292b2c" }}
        >
          <div className="row">
            <img
              className="img-fluid rounded-circle col-2 px-2 py-2"
              src={image}
              alt=""
              style={{ height: "60px", width: "60px" }}
            />
            {heart(friendStatus)}
            <h5 className="font-weight-light col-8 ps-2 pt-3 mb-0">
              {username}
            </h5>
          </div>
        </Link>

        {button}
      </div>
    </div>
  );
}

export default User;
