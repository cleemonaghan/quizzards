import React from "react";
import { createQuiz, updateQuiz, getQuiz } from "../databaseFunctions/quizzes";
import "@aws-amplify/ui-react/styles.css";
import {
  Form,
  Button,
  FloatingLabel,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { QuizQuestion, QuizResult } from "../components";
import { Link } from "react-router-dom";

import Amplify, { Hub } from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      id: "",
      quizName: "",
      description: "",
      owner: null,
      ownerUsername: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
  }

  async componentDidMount() {
    try {
      this.user = await Auth.currentAuthenticatedUser();
    } catch (err) {
      console.log("There was an error logging: ", err);
    }
  }

  /**
   * This method updates the user's attributes in AWS Cognito and in the database.
   */
  async updateAttributes() {
    let params = {
      quizName: this.state.quizName,
    };
    await Auth.updateQuizAttributes(this.user, params);

    params = {
      //highlightColor:  this.state.color_theme,
      description: this.state.description,
    };

    await updateQuiz(this.user, params);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let quizName = target.quizName;
    this.setState({
      [quizName]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //update the color scheme
    //update the user profile
    this.updateAttributes();
  }

  render() {
    return (
      <div className="create_quiz">
        <div className="container">
          <h1 className="font-weight-light my-5">Create Quiz</h1>
          <Form onSubmit={this.handleSubmit}>
            {/* Name */}
            <Form.Group className="mb-3" controlId="name">
              <FloatingLabel label="Name" className="mb-3">
                <Form.Control
                  name="name"
                  type="text"
                  value={this.state.quizName}
                  onChange={this.handleChange}
                />
              </FloatingLabel>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3" controlId="description">
              <FloatingLabel label="Quiz description" className="mb-3">
                <Form.Control
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </FloatingLabel>
            </Form.Group>

            {/* Results */}
            <div className="results">
              <h2 className="font-weight-light mt-5">Results</h2>
              <QuizResult rNumber="1" />

              <Button variant="outline-primary">Add Result +</Button>
            </div>

            {/* Questions and Answers */}
            <div className="questions">
              <h2 className="font-weight-light mt-5">Questions</h2>
              <QuizQuestion qNumber="1" />

              <Button variant="outline-primary">Add Question +</Button>
            </div>

            {/* Submit Button */}
            <Button className="my-5 me-5" variant="primary" type="submit">
              Create Quiz
            </Button>
            <Button className="my-5" variant="primary" type="submit">
              Publish Quiz
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreateQuiz;
// 15 questions
// 9 answers
// 12 results
