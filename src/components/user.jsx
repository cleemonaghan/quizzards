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
  }

  async componentDidMount() {
    try {
      //if we don't know what our relationship is, figure it out
      if (this.state.friendStatus === "Unknown") {
        let status = "Unknown";
        let button = null;
        //find the user's status
        let res = await getUser(this.state.ourUser);
        if (res.friends.includes(this.state.friendUsername)) {
          status = "Friends";
          button = this.friendButton();
        } else if (res.outgoingFriends.includes(this.state.friendUsername)) {
          status = "Waiting";
          button = this.waitingButton();
        } else if (res.friendRequests.includes(this.state.friendUsername)) {
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
    } catch (err) {
      console.log(err);
    }
  }

  friendButton() {
    //status === "Friends"
    return <div></div>;
  }

  waitingButton() {
    //if (status === "Waiting") {
    return (
      <div className="ms-5 ps-5">
        <Button variant="primary" size="sm" disabled={true}>
          Requested
        </Button>{" "}
      </div>
    );
  }

  requestedButton() {
    //if (status === "Requested") {
    return (
      <div className="ms-5 ps-5">
        <Button
          variant="outline-success"
          size="sm"
          onClick={async () => {
            console.log(this.state.ourUser, this.state.friendUsername);
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
            console.log(this.state.lists);
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
            console.log(
              "requesting " +
                this.state.ourUser +
                " " +
                this.state.friendUsername
            );
            //await requestFriend(this.state.ourUser, this.state.friendUsername);
            /*const [oldList, newList, i] = this.updateList(
              this.state.lists.recommendations,
              this.state.lists.outgoingFriendReqs,
              "Waiting"
            );*/
            //console.log(oldList, newList)
            this.state.lists.update((state) => {
              console.log("Starting");
              let i = 0;
              while (i < state.recommendations.length) {
                if (
                  state.recommendations[i].username ===
                  this.state.friendUsername
                ) {
                  console.log(i);
                  break;
                }
                i++;
              }
              let element = state.recommendations[i];
              console.log("Moving: ");
              console.log(element);
              console.log("OutgoingFriendReqs: ");
              let second = [...state.outgoingFriendReqs];
              second.push({
                image: element.image,
                status: "Waiting",
                username: element.username,
              });
              console.log(second);

              console.log("Recommendations: ");
              let first = [...state.recommendations];
              first.splice(i, 1);
              console.log(first);
              console.log("Ending");
              return {
                outgoingFriendReqs: second,
                recommendations: first,
              };
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
    console.log("looking for " + this.state.friendUsername);
    while (i < oldList.length) {
      if (oldList[i].username === this.state.friendUsername) {
        //found it
        console.log("found " + oldList[i].username + " at index " + i);
        let removedNode = oldList.splice(i, 1); // something is wrong here
        console.log(oldList);
        console.log(removedNode);
        removedNode.status = newStatus;
        newList.push({
          image: removedNode[0].image,
          status: newStatus,
          username: removedNode[0].username,
        });
        console.log(newList);

        return [oldList, newList, i];
      } else {
        console.log("not " + oldList[i].username);
      }
      i++;
    }
    console.log("Error with updating lists");
    return [oldList, newList];
  }

  render() {
    let button = null;
    //then assign the proper button for the friend
    if (this.state.friendStatus === "Friends") {
      button = this.friendButton();
    } else if (this.state.friendStatus === "Waiting") {
      button = this.waitingButton();
    } else if (this.state.friendStatus === "Requested") {
      button = this.requestedButton();
    } else if (this.state.friendStatus === "Unconnected") {
      button = this.unconnectedButton();
    }

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

          {button}
        </div>
      </div>
    );
  }
}

export default User;
