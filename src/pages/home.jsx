import React from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const response = await Auth.currentAuthenticatedUser();
    let user = response.username;
    this.setState({ username: user });
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="float-end col-lg-3">
            <FriendsList />
          </div>
          <div className="row align-items-center my-5">
            <div className="col-lg-1">
              <img
                className="img-fluid rounded-circle mb-4 mb-lg-0"
                src={photo12}
                alt=""
              />
            </div>
            <h3 className="font-weight-light col-lg-3">
              {this.state.username}
            </h3>
          </div>
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-lg-4">Your Groups</h1>
          </div>
          <div className="row col-lg-9 pb-5">
            <div className="col-lg-4 mb-4">
              <Link to="/groupPage">
                <Link to="/groupPage">
                  <GroupBox link={photo13} name="Hogwarts" />
                </Link>
              </Link>
            </div>
            <div className="col-lg-4 mb-4">
              <Link to="/groupPage">
                <GroupBox link={photo14} name="Puppies" />
              </Link>
            </div>
            <div className="col-lg-4 mb-4">
              <Link to="/groupPage">
                <GroupBox link={photo15} name="Astronomy" />
              </Link>
            </div>
          </div>
          <div className="row col-lg-9 pb-5">
            <div className="col-lg-4 mb-4">
              <Link to="/groupPage">
                <GroupBox link={photo16} name="Candy" />
              </Link>
            </div>
            <div className="col-lg-4 mb-4">
              <Link to="/groupPage">
                <GroupBox link={photo17} name="Books" />
              </Link>
            </div>
          </div>
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-lg-4">Your Quizzes</h1>
          </div>
          <div className="row col-lg-9 pb-5">
            <div className="col-lg-4">
              <QuizBox
                name="Hogwarts"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-lg-4">
              <QuizBox
                name="Puppies"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-lg-4">
              <QuizBox
                name="Astronomy"
                description="description of the quiz goes here."
              />
            </div>
          </div>
          <div className="row col-lg-9 pb-5">
            <div className="col-lg-4">
              <QuizBox
                name="Candy"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-lg-4">
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
