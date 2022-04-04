import React, { useState, useEffect } from "react";
import { ChevronCompactLeft, SuitHeartFill } from "react-bootstrap-icons";
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
        console.log("Init");
        let status = "Unknown";
        let button = null;
        //find the user's status
        let res = await getUser(this.state.ourUser);
        if (res.friends.includes(this.state.friendUsername)) {
          status = "Friends";
          button = this.friendButton();
        } else if (
          res.outgoingFriendRequests.includes(this.state.friendUsername)
        ) {
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
          onClick={() => {
            acceptFriend(this.state.ourUser, this.state.friendUsername);
            this.setState({ friendStatus: "Friends" });
            let res = this.friendButton();
            this.setState({ button: res });

            const [oldList, newList] = this.updateList(
              "Friends",
              this.state.lists.friendReqElements,
              this.state.lists.friendElements
            );
            if (oldList.length < 1) {
              this.state.lists.setFriendReqElements(
                <p>You have no Incoming Friend Requests</p>
              );
            } else {
              this.state.lists.setFriendReqElements(oldList);
              this.state.lists.friendReqElements = oldList;
            }
            this.state.lists.setFriendElements(newList);
            this.state.lists.recommendationElements = newList;
          }}
        >
          Accept
        </Button>{" "}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => {
            rejectFriend(this.state.ourUser, this.state.friendUsername);
            this.setState({ friendStatus: "Unconnected" });
            let res = this.unconnectedButton();
            this.setState({ button: res });

            const [oldList, newList] = this.updateList(
              "Unconnected",
              this.state.lists.friendReqElements,
              this.state.lists.recommendationElements
            );
            if (oldList.length < 1) {
              this.state.lists.setFriendReqElements(
                <p>You have no Incoming Friend Requests</p>
              );
            } else {
              console.log("Old list is nonempty")
              console.log(oldList)
              this.state.lists.setFriendReqElements(oldList);
              this.state.lists.friendReqElements = oldList;
            }
            this.state.lists.setRecommendationElements(newList);
            this.state.lists.recommendationElements = newList;
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
          onClick={() => {
            requestFriend(this.state.ourUser, this.state.friendUsername);
            console.log(this.state.lists);
            const [oldList, newList] = this.updateList(
              "Waiting",
              this.state.lists.recommendationElements,
              this.state.lists.outgoingFriendReqElements
            );
            if (oldList.length < 1) {
              this.state.lists.setRecommendationElements(
                <p>You have no recommendations</p>
              );
            } else {
              this.state.lists.recommendationElements = oldList;
              this.state.lists.setRecommendationElements(oldList);
            }

            this.state.lists.outgoingFriendReqElements = newList;
            this.state.lists.setOutgoingFriendReqElements(newList);
          }}
        >
          Request
        </Button>{" "}
      </div>
    );
  }

  /** This function deletes a user element from the old list and adds it to the new list
   *
   * @param {*} oldList
   * @param {*} newList
   */
  updateList(status, oldList, newList) {
    //remove username from old list
    let removed = false;
    let i = 0;
    while (!removed && i < oldList.length) {
      if (
        oldList[i].props.children.props.username === this.state.friendUsername
      ) {
        //found it
        oldList.splice(i, 1); // remove the User from the list
        if (newList.length < 1) {
          newList = [];
        }
        newList.push(
          <div className="col-lg-3 col-sm-6" key={this.state.friendUsername}>
            <User
              image={this.state.friendImage}
              username={this.state.friendUsername}
              status={status}
              ourUser={this.state.ourUser}
              lists={this.state.lists}
            />
          </div>
        );
        removed = true;
        return [oldList, newList];
      }
      i++;
    }
    console.log("Errorr on line 46");
    return [null, null];
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
