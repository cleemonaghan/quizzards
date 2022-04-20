import React from "react";
import { QuizBox, failToLoad, Loading } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

import { Auth, Storage } from "aws-amplify";
import {
  getQuiz,
  listAllQuizzes,
  listQuizzesByTitle,
} from "../databaseFunctions/quizzes";
import {
  getUserQuizzes as getUserQuizzesQuery,
  getUserOwnedQuizzes as getUserOwnedQuizzesQuery,
  getUserSuggestedQuizzes as getUserSuggestedQuizzesQuery,
} from "../databaseFunctions/users";
//import { includes } from "core-js/core/array";
//
class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      ownedQuizzes: [],
      ownedQuizElements: null,
      takenQuizzes: [],
      takenQuizElements: null,
      suggestedQuizzes: [],
      suggestedQuizElements: null,
      error: null,
      loading: true,
      searchBar: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      //get the user information
      const response = await Auth.currentAuthenticatedUser();
      const username = response.username;

      //get the quiz information
      let tempOwned = await getUserOwnedQuizzesQuery(username);
      let tempTaken = await getUserQuizzesQuery(username);
      let tempSuggest = await getUserSuggestedQuizzesQuery(username);

      // set the state with the user info
      this.setState({
        username: username,
        ownedQuizzes: tempOwned,
        takenQuizzes: tempTaken,
        suggestedQuizzes:tempSuggest,
      });

      this.setState({
        ownedQuizElements: await this.displayOwnedQuizzes(this.state.ownedQuizzes),
        takenQuizElements: await this.displayTakenQuizzes(this.state.takenQuizzes),
        suggestedQuizElements: await this.displaySuggestedQuizzes(this.state.suggestedQuizzes),
      })
      console.log(this.state.ownedQuizElements);
      //update with the user's groups and user's recommended groups
      // this.setState({
      //   allQuizzes: allQuizzes,
      // });
    } catch (err) {
      console.log(err);
      this.setState({ error: err });
    } finally {
      //we are done loading, so set loading to false
      this.setState({ loading: false });
    }
  }

  async displayOwnedQuizzes(quizArr){
    //if they have made no quizzes return a message
    if (quizArr === undefined || quizArr.length < 1) {
      console.log("you have made no quizzes");
      return <p>You have made no quizzes. <br></br>
      <Link to="/createQuiz">Create a Quiz</Link></p>;
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

  async displayTakenQuizzes(quizArr){
    //if they have taken no quizzes, return a message.
    if (quizArr === undefined || quizArr.length < 1) {
      console.log("you have made no quizzes");
      return <p>You have taken no quizzes</p>;
    } else {
      //grab the ids of the quizzes they've made to filter with
      let ownedQuizzes = this.state.ownedQuizzes;
      let ownedQuizID = [];
      for(let i = 0; i< ownedQuizzes.length; i++){
        ownedQuizID.push(ownedQuizzes[i].id);
      }

      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < quizArr.length; i++) {
        //only add quizzes that they've taken but haven't made
        if(!ownedQuizID.includes(quizArr[i].id)){
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

      }
      console.log(result);
    }
    return result;
  }

  async displaySuggestedQuizzes(quizArr) {
    //if they have no suggested quizzes, print message
    if (quizArr === undefined || quizArr.length < 1) {
      console.log("you have made no quizzes");
     return <p>There are no suggested quizzes at this time. <br></br> 
     To get suggested quizzes, 
     <Link to="/friends"> add new friends </Link> 
      or 
      <Link to = "/groups"> join new groups </Link></p>;
    } else {
      //grab the ids of the quizzes they've created
      let ownedQuizzes = this.state.ownedQuizzes; 
      let ownedQuizID = [];
      for(let i = 0; i< ownedQuizzes.length; i++){
        ownedQuizID.push(ownedQuizzes[i].id);
      }

      //grab the ids of the quizzes they've taken
      let takenQuizzes = this.state.takenQuizzes;
      let takenQuizID = [];
      for(let i = 0; i< takenQuizzes.length; i++){
        takenQuizID.push(takenQuizzes[i].id);
      }
      //for each quiz we are in, fetch the quiz and add it to the result array
      var result = [];
      for (let i = 0; i < quizArr.length; i++) {
        //only add quizzes they haven't seen yet
        if(!ownedQuizID.includes(quizArr[i].id) && !takenQuizID.includes(quizArr[i].id)){
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

      }
      console.log(result);
    }
    return result;
  }

  async getQuizBySearch(substr) {
    var quizData = await listAllQuizzes();
    var result = [];
    for (let i = 0; i < quizData.length; i++) {
      let quiz = quizData[i];
      if (quiz.title.toLowerCase().includes(substr.toLowerCase())) {
        //let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={quiz.id}>
            <QuizBox
              title={quiz.title}
              author={quiz.ownerUsername}
              id={quiz.id}
            />
          </div>
        );
      }
    }
    if (result.length === 0) {
      return <p> No quizzes match your search</p>;
    }
    return result;
  }

  async handleChange(e) {
    if (e.target.value === "") {
      this.setState({ searchBar: [] });
    } else
      this.setState({ searchBar: await this.getQuizBySearch(e.target.value) });
  }

  render() {
    if (this.state.error) return failToLoad();
    if (this.state.loading) return Loading();
    else {
      return (
        <div className="quizzes mb-5">
          <div className="container">
            <div className="row">
              <div className="col-2"></div>
              <div className="row">
                <div className="col-8 mt-5">
                  <MDBCol>
                    <MDBInput
                      hint="Search Quizzes"
                      type="text"
                      containerClass="active-pink active-pink-2 mt-0 mb-3"
                      variant="outline-primary"
                      size="lg"
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                </div>
                <div className="col-1"></div>
                <div className="col-3 mt-5 mb-4 float-end">
                  <Link to="/createQuiz">
                    <Button variant="outline-primary" size="lg">
                      Create New Quiz +
                    </Button>{" "}
                  </Link>
                </div>
              </div>

              <div className="row">{this.state.searchBar}</div>
              <div className="row align-items-center mt-5 mb-2">
                <h1 className="font-weight-bold col-4">Quizzes You Made</h1>
              </div>
              <div className="row">{this.state.ownedQuizElements}</div>

              <div className="row align-items-center mt-5 mb-2">
                <h1 className="font-weight-bold col-4">Quizzes You've Taken</h1>
              </div>
              <div className="row">{this.state.takenQuizElements}</div>

              <div className="row align-items-center mt-5 mb-2">
                <h1 className="font-weight-bold col-4">Suggested Quizzes</h1>
              </div>
              <div className="row">{this.state.suggestedQuizElements}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Quizzes;
