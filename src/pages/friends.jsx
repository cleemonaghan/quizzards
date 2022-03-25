import React from "react";
import { User, failToLoad, Loading } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

import { getUser, recommendFriends } from "../databaseFunctions/users.js";

import { Auth, Storage } from "aws-amplify";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      friendElements: null,
      friendReqElements: null,
      recommendationElements: null,
      outgoingFriendReqElements: null,
      error: null,
      loading: true,
    };
  }

  /** This method initalizes the state of the Group component.
   *
   *  This method fetches the user's username and profile picture
   *  and initializes their values in the component's state.
   */
  async componentDidMount() {
    try {
      //get the user information
      const response = await Auth.currentAuthenticatedUser();
      const username = response.username;
      const userArr = await getUser(username);
      const yourFriends = await this.fetchYourFriends(userArr);
      const yourFriendReqs = await this.fetchYourFriendReqs(userArr);
      const yourOutgoingFriendReqs = await this.fetchYourOutgoingFriendReqs(
        userArr
      );
      const yourRecommendations = await this.fetchRecommendedFriends(username);

      // set the state with the user info
      this.setState({
        username: username,
      });

      //update with the user's friends, friend reqs, and recommended friends
      this.setState({
        friendElements: yourFriends,
        friendReqElements: yourFriendReqs,
        outgoingFriendReqElements: yourOutgoingFriendReqs,
        recommendationElements: yourRecommendations,
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: err });
    } finally {
      //we are done loading, so set loading to false
      this.setState({ loading: false });
    }
  }

  /** This method fetches and returns the list of groups that the user is in
   * formatted in html form.
   *
   * @param {JSON} groupArr the user's profile data
   * @returns a list of the html for each of their groups
   */
  async fetchYourFriends(userArr) {
    // if there are no groups,
    if (userArr.friends === undefined || userArr.friends.length < 1) {
      return <p>You have no friends</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < userArr.friends.length; i++) {
        let friend = await getUser(userArr.friends[i]);
        let friendImage = await Storage.get(friend.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <User
              image={friendImage}
              username={friend.name}
              status={"Friends"}
              ourUser={userArr.username}
            />
          </div>
        );
      }
      return result;
    }
  }

  async fetchYourFriendReqs(userArr) {
    // if there are no groups,
    if (
      userArr.friendRequests === undefined ||
      userArr.friendRequests.length < 1
    ) {
      return <p>You have no Incoming Friend Requests</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < userArr.friendRequests.length; i++) {
        let friendReq = await getUser(userArr.friendRequests[i]);
        let friendImage = await Storage.get(friendReq.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <User
              image={friendImage}
              username={friendReq.name}
              status={"Requested"}
              ourUser={userArr.username}
            />
          </div>
        );
      }
      return result;
    }
  }

  async fetchYourOutgoingFriendReqs(userArr) {
    // if there are no groups,
    if (
      userArr.outgoingFriendRequests === undefined ||
      userArr.outgoingFriendRequests.length < 1
    ) {
      return <p>You have no Outgoing Friend Requests</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < userArr.outgoingFriendRequests.length; i++) {
        let friendReq = await getUser(userArr.outgoingFriendRequests[i]);
        let friendImage = await Storage.get(friendReq.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <User
              image={friendImage}
              username={friendReq.name}
              status={"Waiting"}
              ourUser={userArr.username}
            />
          </div>
        );
      }
      return result;
    }
  }

  /** This method fetches and returns the list of recommended groups for the user
   * formatted in html form.
   *
   * @param {JSON} groupArr the user's profile data
   * @returns a list of the html for each of their recommended groups
   */
  async fetchRecommendedFriends(username) {
    let userArr = await getUser(username);
    console.log(userArr);
    let friendList = userArr.friends;
    let friendReqList = userArr.friendRequests;
    let outgoingFriendReqList = userArr.outgoingFriendRequests;
    let recommendations = await recommendFriends(
      username,
      friendList,
      friendReqList,
      outgoingFriendReqList
    );

    // if there are no groups,
    if (recommendations === undefined || recommendations.length < 1) {
      return <p>You have no recommendations</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < recommendations.length; i++) {
        let friend = await getUser(recommendations[i]);
        let friendImage = await Storage.get(friend.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <User
              image={friendImage}
              username={friend.name}
              status={"Unconnected"}
              ourUser={username}
            />
          </div>
        );
      }
      return result;
    }
  }

  render() {
    if (this.state.error) return failToLoad();
    return this.state.loading ? (
      Loading()
    ) : (
      <div className="friends mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <MDBCol>
                <MDBInput
                  hint="Search Users"
                  type="text"
                  containerClass="active-pink active-pink-2 mt-0 mb-3"
                  variant="outline-primary"
                  size="lg"
                />
              </MDBCol>
            </div>
          </div>

          {/* Display the user's friends */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Your Friends</h1>
          </div>
          <div className="row">{this.state.friendElements}</div>

          {/* Display the user's friend requests */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Your Friend Requests</h1>
          </div>
          <h4 className="font-weight-bold">Incoming:</h4>
          <div className="row">{this.state.friendReqElements}</div>

          {/* Display the user's friend requests */}
          <h4 className="font-weight-bold">Outgoing:</h4>
          <div className="row">{this.state.outgoingFriendReqElements}</div>

          {/* Display the user's recommended friends */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Suggested Friends</h1>
          </div>
          <div className="row">{this.state.recommendationElements}</div>
        </div>
      </div>
    );
  }
}

export default Friends;
