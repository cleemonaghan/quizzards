import React from "react";
import { Auth } from "aws-amplify";
import { FriendsList, QuizBox } from "../components";
import GroupBox from "../components/groupBox";
import {
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
} from "../images";

import{
  getUserByUsername as getUser,
  getUserGroups as getUserGroups,
} from "../graphql/userHomeFunctions";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      name:"",
      color_theme: "blue",
      profile_pic: null,
    };

  }

  async componentDidMount() {
    try{
      const response = await Auth.currentAuthenticatedUser();
      this.setState({ 
        username: response.username,
        name: response.name,
        color_theme: response.color_theme,
        profile_pic: response.profile_pic,
      });
      await getUser(this.username);
    }
    catch(err){
      console.log("error attaching user to home page: ",err);
    }

  }


  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="float-end col-3">
            <FriendsList />
          </div>
          <div className="row align-items-center my-5">
            <div className="col-1">
              <img
                className="img-fluid rounded-circle mb-4 mb-0"
                src={photo12}
                alt=""
              />
            </div>
            <h3 className="font-weight-light col-3">{this.state.username}</h3>
          </div>
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-4">Your Groups</h1>
          </div>
          <div className="row col-9 pb-5">
            <div className="col-4 mb-4">
              <GroupBox link={photo13} name="Hogwarts" />
            </div>
            <div className="col-4 mb-4">
              <GroupBox link={photo14} name="Puppies" />
            </div>
            <div className="col-4 mb-4">
              <GroupBox link={photo15} name="Astronomy" />
            </div>
          </div>
          <div className="row col-9 pb-5">
            <div className="col-4 mb-4">
              <GroupBox link={photo16} name="Candy" />
            </div>
            <div className="col-4 mb-4">
              <GroupBox link={photo17} name="Books" />
            </div>
          </div>
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-4">Your Quizzes</h1>
          </div>
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
        </div>
      </div>
    );
  }
}

export default Home;
