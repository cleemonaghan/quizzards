import React from "react";
import { Auth, Storage } from "aws-amplify";
import { FriendsList, QuizBox, failToLoad, Loading } from "../components";
import GroupBox from "../components/groupBox";

import {
  getUser,
  getUserGroups,
  getUserQuizzes,
  acceptFriend,
  requestFriend,
  createUser,
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
        quizElements: await this.displayQuizzesElement(),
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
      return <p>You have no groups</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < groupArr.length; i++) {
        let group = await getGroup(groupArr[i].groupID);
        let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <div className="col-4 mb-4" key={i}>
            <GroupBox
              link={groupImage}
              name={group.name}
              groupID={groupArr[i].groupID}
            />
          </div>
        );
      }
      return result;
    }
  }

  async displayQuizzesElement() {
    const quizArr = await getUserQuizzes(this.state.username);
    // if there are no quizzes, display message
    if (quizArr === undefined || quizArr.length < 1) {
      return <p>You have no quizzes</p>;
    } else {
      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < quizArr.length; i++) {
        let quiz = await getQuiz(quizArr[i].quizID);
        result.push(
          <div className="col-4" key={i}>
            <QuizBox name={quiz.quizname} description={quiz.description} />
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
      <div className="home">
        <div className="container">
          <div className="float-end col-3">
            <FriendsList />
          </div>
          <div className="row align-items-center my-5">
            <div className="col-1">
              <img
                className="img-fluid rounded-circle my-auto"
                src={this.state.profile_pic}
                alt=""
              />
            </div>
            <h3 className="font-weight-light col-3 my-auto">
              {this.state.username}
            </h3>
          </div>
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-4">Your Groups</h1>
          </div>
          <div className="row col-9 pb-5">
            {/* Display the user's groups */}
            {this.state.groupElements}
          </div>

          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-4">Your Quizzes</h1>
          </div>
          <div className="row col-9 pb-5">
            {/* Display the user's quizzes */}
            {this.state.quizElements}
          </div>
          <div className="row align-items-center mt-5 mb-2">
            <h1>Make a Friend!</h1>
          </div>
          <Button
            onClick={() =>
              requestFriend(this.state.username, "cleemonaghanALT")
            }
          >
            Request Friend
          </Button>
          <Button
            onClick={() => acceptFriend("cleemonaghanALT", this.state.username)}
          >
            Accept Friend
          </Button>
          <Button onClick={() => createUser("cleemonaghanALT")}>
            Create User
          </Button>
          <Button
            onClick={async () => {
              let x = await getUser(this.state.username);
              console.log(x);
            }}
          >
            Log User
          </Button>
          {/*
          <div className="row col-9 pb-5">
            <div className="col-4">
              <QuizBox
                name="Hogwarts"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-4">
              <QuizBox
                name="Puppies"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-4">
              <QuizBox
                name="Astronomy"
                description="description of the quiz goes here."
              />
            </div>
          </div>
          <div className="row col-9 pb-5">
            <div className="col-4">
              <QuizBox
                name="Candy"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-4">
              <QuizBox
                name="Books"
                description="description of the quiz goes here."
              />

              </div>  
              </div>
           
          */}
        </div>
      </div>
    );
  }
}

export default Home;
