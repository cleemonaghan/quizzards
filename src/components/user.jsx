import React from "react";
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

class User extends React.Component {
  constructor({ ourUser, username, image, status, lists }) {
    super();

    this.friendButton = this.friendButton.bind(this);
    this.waitingButton = this.waitingButton.bind(this);
    this.requestedButton = this.requestedButton.bind(this);
    this.unconnectedButton = this.unconnectedButton.bind(this);

    let button = null;
    //then assign the proper button for the friend
    if (status === "Friends") {
      button = this.friendButton();
    } else if (status === "Waiting") {
      button = this.waitingButton();
    } else if (status === "Requested") {
      button = this.requestedButton();
    } else if (status === "Unconnected") {
      button = this.unconnectedButton();
    }
    this.state = {
      ourUser: ourUser,
      friendUsername: username,
      friendImage: image,
      friendStatus: status,
      button: button,
      lists: lists,
    };
    // if the status is unknown, figure it out
    if (status === "Unknown") {
      this.determineStatus(ourUser, username);
    }
  }

  async determineStatus(ourUser, friendUsername) {
    //if we don't know what our relationship is, figure it out

    let status = "Unknown";
    let button = null;
    //find the user's status
    let res = await getUser(ourUser);
    if (res.friends.includes(friendUsername)) {
      status = "Friends";
      button = this.friendButton();
    } else if (res.outgoingFriendRequests.includes(friendUsername)) {
      status = "Waiting";
      button = this.waitingButton();
    } else if (res.friendRequests.includes(friendUsername)) {
      status = "Requested";
      button = this.requestedButton();
    } else {
      status = "Unconnected";
      button = this.unconnectedButton();
    }

    // set the state with the user info
    this.setState({
      friendStatus: status,
      button: button,
    });
  }

  friendButton() {
    //status === "Friends"
    return <div></div>;
  }

  waitingButton() {
    //if (status === "Waiting") {
    return (
      <div className="ms-5 ps-4">
        <Button variant="primary" size="sm" disabled={true}>
          Requested
        </Button>{" "}
      </div>
    );
  }

  requestedButton() {
    //if (status === "Requested") {
    return (
      <div className="ms-5 ps-4">
        <Button
          variant="outline-success"
          size="sm"
          onClick={async () => {
            this.setState({ button: this.friendButton() });
            await acceptFriend(this.state.ourUser, this.state.friendUsername);
            const [oldList, newList] = this.updateList(
              this.state.lists.friendReqs,
              this.state.lists.friends,
              "Friends"
            );
            this.state.lists.update({
              friendReqs: oldList,
              friends: newList,
            });
          }}
        >
          Accept
        </Button>{" "}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={async () => {
            this.setState({ button: this.unconnectedButton() });
            await rejectFriend(this.state.ourUser, this.state.friendUsername);
            const [oldList, newList] = this.updateList(
              this.state.lists.friendReqs,
              this.state.lists.recommendations,
              "Unconnected"
            );
            this.state.lists.update({
              friendReqs: oldList,
              recommendations: newList,
            });
          }}
        >
          Deny
        </Button>{" "}
      </div>
    );
  }

  unconnectedButton() {
    //if (status === "Unconnected") {
    return (
      <div className="ms-5 ps-5">
        <Button
          variant="outline-primary"
          size="sm"
          onClick={async () => {
            this.setState({ button: this.waitingButton() });
            await requestFriend(this.state.ourUser, this.state.friendUsername);
            const [oldList, newList] = this.updateList(
              this.state.lists.recommendations,
              this.state.lists.outgoingFriendReqs,
              "Waiting"
            );
            this.state.lists.update({
              recommendations: oldList,
              outgoingFriendReqs: newList,
            });
          }}
        >
          Request
        </Button>{" "}
      </div>
    );
  }

  updateList(oldList, newList, newStatus) {
    //remove username from old list
    let i = 0;
    while (i < oldList.length) {
      if (oldList[i].username === this.state.friendUsername) {
        //found it
        let removedNode = oldList.splice(i, 1); // something is wrong here
        removedNode.status = newStatus;
        newList.push({
          username: removedNode[0].username,
          image: removedNode[0].image,
          status: newStatus,
        });

        return [oldList, newList];
      }
      i++;
    }

    return [oldList, newList];
  }

  render() {
    return (
      <div className="user">
        <div className="row">
          <Link
            to={{ pathname: "/profile/" + this.state.friendUsername }}
            style={{ textDecoration: "none", color: "#292b2c" }}
          >
            <div className="row">
              <img
                className="img-fluid rounded-circle col-2 px-2 py-2"
                src={this.state.friendImage}
                alt=""
                style={{ height: "60px", width: "60px" }}
              />
              {heart(this.state.friendStatus)}
              <h5 className="font-weight-light col-8 ps-2 pt-3 mb-0">
                {this.state.friendUsername}
              </h5>
            </div>
          </Link>

          {this.state.button}
        </div>
      </div>
    );
  }
}

export default User;
