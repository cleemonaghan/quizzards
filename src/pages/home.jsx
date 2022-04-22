import React, { Fragment } from "react";
import Media from "react-media";
import { updateUser as updateUserMutation } from "../graphql/mutations";
import { API, Auth, Storage } from "aws-amplify";
import { default as Friends } from "./friends";
import { QuizBox, failToLoad, Loading, FriendsList } from "../components";
import GroupBox from "../components/groupBox";
import { Link } from "react-router-dom";

import {
  getUser,
  getUserGroups,
  getUserQuizzes,
  getUserOwnedQuizzes,
  acceptFriend,
  requestFriend,
} from "../databaseFunctions/users.js";
import Button from "@restart/ui/esm/Button";

import { getGroup } from "../databaseFunctions/groups";
import { getQuiz } from "../databaseFunctions/quizzes";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      name: "",
      color_theme: "blue",
      profile_pic: null,
      groupElements: null,
      quizElements: null,
      quizTakenElements: null,
      myQuizzes: null,
      error: null,
      loading: true,
    };
  }

  /** This method initalizes the state of the Home component.
   *
   *  This method fetches the user's username and profile picture
   *  and initializes their values in the component's state.
   */
  async componentDidMount() {
    try {
      //get the user information
      const response = await Auth.currentAuthenticatedUser();
      const username = response.username;
      const userSettings = await getUser(username);
      const image = await Storage.get(userSettings.profilePicture);

      // set the state with the user info
      this.setState({
        username: username,
        profile_pic: image,
      });

      //fetch the user's groups and quizzes
      this.setState({
        groupElements: await this.displayGroupsElement(),
        quizElements: await this.displayQuizzesOwnedElement(),
      });

      console.log(this.state.myQuizzes);
      this.setState({
        quizTakenElements: await this.displayQuizzesTakenElement(
          this.state.myQuizzes
        ),
      });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      //we are done loading, so set loading to false
      this.setState({ loading: false });
    }
  }

  async displayGroupsElement() {
    const groupArr = await getUserGroups(this.state.username);
    // if there are no groups,
    if (groupArr === undefined || groupArr.length < 1) {
      return (
        <p>
          You have made no groups. <br></br>
          <Link to="/createGroup">Create a Group</Link>
        </p>
      );
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < groupArr.length; i++) {
        let group = await getGroup(groupArr[i].groupID);
        let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <Media
            queries={{
              other: "(max-width: 999px)",
              wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
              desktop: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.other && (
                  <div className="col-12 mb-0" key={i}>
                    <GroupBox
                      link={groupImage}
                      name={group.name}
                      groupID={groupArr[i].groupID}
                    />
                  </div>
                )}
                {matches.wideTablet && (
                  <div className="col-6 mb-1" key={i}>
                    <GroupBox
                      link={groupImage}
                      name={group.name}
                      groupID={groupArr[i].groupID}
                    />
                  </div>
                )}
                {matches.desktop && (
                  <div className="col-4 mb-1" key={i}>
                    <GroupBox
                      link={groupImage}
                      name={group.name}
                      groupID={groupArr[i].groupID}
                    />
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        );
      }
      return result;
    }
  }

  async displayQuizzesOwnedElement() {
    const quizArr = await getUserOwnedQuizzes(this.state.username);
    // if there are no quizzes, display message
    if (quizArr === undefined || quizArr.length < 1) {
      this.setState({ myQuizzes: [] });
      return (
        <p>
          You have made no quizzes. <br></br>
          <Link to="/createQuiz">Create a Quiz</Link>
        </p>
      );
    } else {
      console.log(quizArr);
      console.log(quizArr.length);
      let quizIDArr = [];
      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < quizArr.length; i++) {
        console.log(quizArr[i]);
        quizIDArr.push(quizArr[i].id);
        let quiz = await getQuiz(quizArr[i].id);
        result.push(
          <Media
            queries={{
              other: "(max-width: 999px)",
              wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
              desktop: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.other && (
                  <div className="col-12 mb-1" key={i}>
                    <QuizBox
                      title={quiz.title}
                      author={this.state.username}
                      id={quiz.id}
                    />
                  </div>
                )}
                {matches.wideTablet && (
                  <div className="col-6 mb-2" key={i}>
                    <QuizBox
                      title={quiz.title}
                      author={this.state.username}
                      id={quiz.id}
                    />
                  </div>
                )}
                {matches.desktop && (
                  <div className="col-4 mb-2" key={i}>
                    <QuizBox
                      title={quiz.title}
                      author={this.state.username}
                      id={quiz.id}
                    />
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        );
      }
      this.setState({ myQuizzes: quizIDArr });
      console.log(result);
      return result;
    }
  }

  async displayQuizzesTakenElement(quizElements) {
    console.log(quizElements);
    const quizArr = await getUserQuizzes(this.state.username);
    // if there are no quizzes, display message
    if (quizArr === undefined || quizArr.length < 1) {
      return (
        <p>
          You have taken no quizzes. <br></br>
          <Link to="/quizzes">Take a Quiz</Link>
        </p>
      );
    } else {
      console.log(quizArr);
      console.log(quizArr.length);

      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < quizArr.length; i++) {
        console.log(quizArr[i]);
        if (!quizElements.includes(quizArr[i].id)) {
          let quiz = await getQuiz(quizArr[i].id);
          result.push(
            <Media
              queries={{
                other: "(max-width: 999px)",
                wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
                desktop: "(min-width: 1200px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.other && (
                    <div className="col-12" key={i}>
                      <QuizBox
                        title={quiz.title}
                        author={quiz.ownerUsername}
                        id={quiz.id}
                      />
                    </div>
                  )}
                  {matches.wideTablet && (
                    <div className="col-6 mb-2" key={i}>
                      <QuizBox
                        title={quiz.title}
                        author={quiz.ownerUsername}
                        id={quiz.id}
                      />
                    </div>
                  )}
                  {matches.desktop && (
                    <div className="col-4 mb-2" key={i}>
                      <QuizBox
                        title={quiz.title}
                        author={quiz.ownerUsername}
                        id={quiz.id}
                      />
                    </div>
                  )}
                </Fragment>
              )}
            </Media>
          );
        }
      }
      console.log(result);
      return result;
    }
  }

  render() {
    if (this.state.error) return failToLoad();
    return this.state.loading ? (
      Loading()
    ) : (
      <div className="home">
        <div className="container">
          <Media
            queries={{
              mobile: "(max-width: 575px)",
              tablet: "(min-width: 576px) and (max-width: 999px)",
              wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
              desktop: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.mobile && <div className="position-absolute"></div>}
                {matches.tablet && (
                  <div className="float-end col-6">
                    <div className="outline ms-3 mb-5 p-4">
                      <FriendsList />
                    </div>
                  </div>
                )}
                {matches.wideTablet && (
                  <div className="float-end col-4">
                    <div className="outline ms-3 mb-5 p-4">
                      <FriendsList />
                    </div>
                  </div>
                )}
                {matches.desktop && (
                  <div className="float-end col-3">
                    <div className="outline ms-3 mb-5 p-4">
                      <FriendsList />
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
          <div className="row align-items-center my-5">
            <Media
              queries={{
                mobile: "(max-width: 575px)",
                tablet: "(min-width: 576px) and (max-width: 999px)",
                wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
                desktop: "(min-width: 1200px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.mobile && (
                    <div className="col-3 ms-2">
                      <img
                        className="img-fluid rounded-circle my-auto"
                        src={this.state.profile_pic}
                        alt=""
                      />
                    </div>
                  )}
                  {matches.tablet && (
                    <div className="col-3">
                      <img
                        className="img-fluid rounded-circle my-auto"
                        src={this.state.profile_pic}
                        alt=""
                      />
                    </div>
                  )}
                  {matches.wideTablet && (
                    <div className="col-2">
                      <img
                        className="img-fluid rounded-circle my-auto"
                        src={this.state.profile_pic}
                        alt=""
                      />
                    </div>
                  )}
                  {matches.desktop && (
                    <div className="col-1">
                      <img
                        className="img-fluid rounded-circle my-auto"
                        src={this.state.profile_pic}
                        alt=""
                      />
                    </div>
                  )}
                </Fragment>
              )}
            </Media>

            <h3 className="font-weight-light col-3 my-auto">
              {this.state.username}
            </h3>
          </div>
          <div className="row align-items-center m-0 mt-5 mb-2">
            <h1 className="font-weight-bold">Your Groups</h1>
          </div>
          {/* Display the user's groups */}
          <Media
            queries={{
              mobile: "(max-width: 575px)",
              tablet: "(min-width: 576px) and (max-width: 999px)",
              wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
              desktop: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.mobile && (
                  <div className="row col-12 m-0">
                    {this.state.groupElements}
                  </div>
                )}
                {matches.tablet && (
                  <div className="row col-6">{this.state.groupElements}</div>
                )}
                {matches.wideTablet && (
                  <div className="row col-8">{this.state.groupElements}</div>
                )}
                {matches.desktop && (
                  <div className="row col-9">{this.state.groupElements}</div>
                )}
              </Fragment>
            )}
          </Media>

          <div className="row align-items-center m-0 mt-5 mb-2">
            <h1 className="font-weight-bold">Your Quizzes</h1>
          </div>
          {/* Display the user's quizzes */}
          <Media
            queries={{
              mobile: "(max-width: 575px)",
              tablet: "(min-width: 576px) and (max-width: 999px)",
              wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
              desktop: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.mobile && (
                  <div className="row col-12 m-0">
                    {this.state.quizElements}
                    {this.state.quizTakenElements}
                  </div>
                )}
                {matches.tablet && (
                  <div className="row col-6">
                    {this.state.quizElements}
                    {this.state.quizTakenElements}
                  </div>
                )}
                {matches.wideTablet && (
                  <div className="row col-8">
                    {this.state.quizElements}
                    {this.state.quizTakenElements}
                  </div>
                )}
                {matches.desktop && (
                  <div className="row col-9">
                    {this.state.quizElements}
                    {this.state.quizTakenElements}
                  </div>
                )}
              </Fragment>
            )}
          </Media>

          {/* <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Quizzes You Made</h1>
          </div>
          <div className="row col-9">
            // Display the user's made quizzes
            {this.state.quizElements}
          </div>

          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Quizzes You've Taken</h1>
          </div>
          <div className="row col-9">
            // Display the user's taken quizzes
            {this.state.quizTakenElements}
          </div> */}

          {/* <div className="row align-items-center mt-5 mb-2">
            <h1>Make a Friend!</h1>
          </div>
          <Button
            onClick={async () => {
              let user = await getUser(this.state.username);
              //remove self from user's friend list
              let index = user.friends.indexOf(this.state.username);
              if (index >= 0) user.friends.splice(index, 1); // remove the username from the list
              index = user.friends.indexOf("cleemonaghan");
              if (index >= 0) user.friends.splice(index, 1); // remove the username from the list
              index = user.friends.indexOf("colinmonaghan");
              if (index >= 0) user.friends.splice(index, 1); // remove the username from the list
              index = user.friends.indexOf("avb123");
              if (index >= 0) user.friends.splice(index, 1); // remove the username from the list
              //remove self from user's friend request list
              index = user.friendRequests.indexOf(this.state.username);
              if (index >= 0) user.friendRequests.splice(index, 1); // remove the username from the list
              index = user.friendRequests.indexOf("cleemonaghan");
              if (index >= 0) user.friendRequests.splice(index, 1); // remove the username from the list
              index = user.friendRequests.indexOf("colinmonaghan");
              if (index >= 0) user.friendRequests.splice(index, 1); // remove the username from the list
              index = user.friendRequests.indexOf("avb123");
              if (index >= 0) user.friendRequests.splice(index, 1); // remove the username from the list
              //remove self from user's outgoing friend request list
              index = user.outgoingFriendRequests.indexOf(this.state.username);
              if (index >= 0) user.outgoingFriendRequests.splice(index, 1); // remove the username from the list
              index = user.outgoingFriendRequests.indexOf("cleemonaghan");
              if (index >= 0) user.outgoingFriendRequests.splice(index, 1); // remove the username from the list
              index = user.outgoingFriendRequests.indexOf("colinmonaghan");
              if (index >= 0) user.outgoingFriendRequests.splice(index, 1); // remove the username from the list
              index = user.outgoingFriendRequests.indexOf("avb123");
              if (index >= 0) user.outgoingFriendRequests.splice(index, 1); // remove the username from the list

              //update the database with the new lists
              await API.graphql({
                query: updateUserMutation,
                variables: {
                  input: {
                    username: this.state.username,
                    friends: user.friends,
                    friendRequests: user.friendRequests,
                    outgoingFriendRequests: user.outgoingFriendRequests,
                  },
                },
              });
            }}
          >
            Delete self from friend list
          </Button>
          <Button
            onClick={async () => {
              let x = await getUser(this.state.username);
              console.log(x);
            }}
          >
            Log User
          </Button> */}
        </div>
      </div>
    );
  }
}

export default Home;
