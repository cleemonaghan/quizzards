import React from "react";
import { QuizBox , failToLoad, Loading} from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

import { Auth, Storage } from "aws-amplify";
import { listAllQuizzes } from "../databaseFunctions/quizzes";

class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      quizzes: [],
      error: null,
      loading: true,
      searchBar: "",
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      //get the user information
      const response = await Auth.currentAuthenticatedUser();
      const username = response.username;
      const quizzes = await listAllQuizzes(username);
      console.log(quizzes);

      // set the state with the user info
      this.setState({
        username: username,
      });

      //update with the user's groups and user's recommended groups
      this.setState({
        quizzes: quizzes,
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: err });
    } finally {
      //we are done loading, so set loading to false
      this.setState({ loading: false });
    }
  }

  displayQuizzes() {
    let result = [];

    for (let i = 0; i < this.state.quizzes.length; i++) {
      let quiz = this.state.quizzes[i];
      //let quizImage = await Storage.get(quiz.picture);
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

    return result;
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
              {/* <hr /> */}
              <div className="row align-items-center mt-5 mb-2">
                <h1 className="font-weight-bold col-4">Suggested Quizzes</h1>
              </div>
              <div className="row">
                {this.displayQuizzes()}
              </div>
              
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Quizzes;
