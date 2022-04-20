import React from "react";
import { Button } from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { getUser, getUserOwnedGroups, getUserOwnedQuizzes } from "../databaseFunctions/users";
import { getGroup } from "../databaseFunctions/groups";
import { Link } from "react-router-dom";
import { QuizBox,  } from "../components";
import GroupBox from "../components/groupBox";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      username: "",
      name: "",
      birthdate: "",
      email: "",
      profile_pic: null,
      biography: "",
      show: false,
      myQuizzes: null,
      quizElements: null,
      myGroups: null,
      groupElements: null,
    };

  }

  async componentDidMount() {
    this.user = await Auth.currentAuthenticatedUser();
    let userSettings = await Auth.currentUserInfo();
    let userDatabase = await getUser(this.user.username);
    let tempQuizzes = await getUserOwnedQuizzes(userSettings.username);
    let tempGroups = await getUserOwnedGroups(userSettings.username);
    console.log("hi")
    console.log(userSettings.username);
    console.log(tempQuizzes);
    console.log(tempGroups);

    this.setState({
      username: userSettings.username,
      name: userSettings.attributes.name,
      birthdate: userSettings.attributes.birthdate,
      email: userSettings.attributes.email,
      profile_pic: userDatabase.profilePicture,
      biography: userDatabase.bio,
      myQuizzes: tempQuizzes,
      myGroups: tempGroups,
      quizElements: await this.displayOwnedQuizzes(tempQuizzes),
      groupElements: await this.displayOwnedGroups(tempGroups),
    });
    //load the picture from storage
    try {
      const image = await Storage.get(userDatabase.profilePicture);
      this.setState({ profile_pic: image });
    } catch (error) {
      console.log("Error occured: " + error);
    }
  }

  async displayOwnedQuizzes(quizArr){
    //if they have made no quizzes return a message
    if (quizArr === undefined || quizArr.length < 1) {
      return <p>${this.state.username} has made no quizzes. </p>;
    } else {
      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < quizArr.length; i++) {
        result.push(
          <div className="col-4" key={i}>
            <QuizBox
              title={quizArr[i].title}
              author={quizArr[i].ownerUsername}
              id={quizArr[i].id}
            />
          </div>
        );
      }
      console.log(result);
    }
    return result;
  }

  async displayOwnedGroups(groupArr){
    //if they have made no quizzes return a message
    if (groupArr === undefined || groupArr.length < 1) {
      return <p>${this.state.username} has made no groups. </p>;
    } else {
      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < groupArr.length; i++) {
        console.log(groupArr[i]);
        let group = await getGroup(groupArr[i].id);
        console.log(group);
        let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <div className="col-4" key={i}>
            <GroupBox
              link={groupImage}
              name={group.name}
              groupID={groupArr[i].groupID}
            />
          </div>
        );
      }
      console.log(result);
    }
    return result;
  }

  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row align-items-center my-5">
            <h1 className="col-11">Profile</h1>
            <Link to={{ pathname: "/profileEdit"}}>
              <Button variant="outline-primary" className="col-1 float-end">Edit Profile </Button>{" "}
            </Link>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-1">
              <img
                id="profile_pic_display"
                className="img-fluid rounded-circle my-auto"
                src={this.state.profile_pic}
                alt=""
              />
            </div>
            <h3 className="font-weight-light col-3 my-auto">
              {this.state.username}
            </h3>
          </div>

          <div className="row">
            <h4 className="col-1">Name:</h4>
            <h4 className="col-11 ps-4">{this.state.name}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Email:</h4>
            <h4 className="col-11 ps-4">{this.state.email}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Birthdate:</h4>
            <h4 className="col-11 ps-4">{this.state.birthdate}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Bio:</h4>
            <h4 className="col-11 ps-4">{this.state.biography}</h4>
          </div>
        </div>
        <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">{this.state.name}'s Groups</h1>
          </div>
          <div className="row col-9">
            {/* Display the user's groups */}
            {this.state.groupElements}
        </div>
        <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">{this.state.name}'s Quizzes</h1>
          </div>
          <div className="row col-9">
            {/* Display the user's groups */}
            {this.state.quizElements}
          </div>
      </div>
      
    );
  }
}

export default Profile;
