import React from "react";
import { createQuiz, updateQuiz, getQuiz } from "../databaseFunctions/quizzes";
import "@aws-amplify/ui-react/styles.css";
import { Form, Button, FloatingLabel, Dropdown } from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { QuizQuestion, QuizResult, QuizAnswer } from "../components";
import { Link } from "react-router-dom";

import Amplify, { Hub } from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

class CreateQuiz extends React.Component {
  constructor(props) {
    console.log("hi");
    super(props);
    this.user = null;
    this.state = {
      id: "",
      quizName: "",
      description: "",
      owner: null,
      ownerUsername: "",
      results: [{ name3: "", img: "" }],
      questions: [{ name4: "", img: "", answers: [{ name2: "b" }] }],
    };
    // console.log(this.state.results);
    console.log(this.state.questions);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
    this.addResult = this.addResult.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
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
    let value = target.type === "text" ? target.checked : target.value;
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

  addResult() {
    const results = this.state.results;
    results.push({ name: "", img: "" });
    this.setState({ results });
  }

  updateResult(index, updatedResult) {
    const results = this.state.results;
    results.splice(index, 1, updatedResult);
    this.setState({ results });
  }

  addQuestion() {
    const questions = this.state.questions;
    questions.push({ name4: "", img: "", answers: [{ name2: "a" }] });
    this.setState({ questions });
    console.log("add question");
    console.log(this.state.questions);
  }

  updateQuestion(index, updatedQuestion) {
    const questions = this.state.questions;
    questions.splice(index, 1, updatedQuestion);
    this.setState({ questions });
  }

  addAnswer(i) {
    // const answers = this.state.questions[i];
    console.log("add answer");
    console.log(i);
    // console.log(answers);
    // answers.push({ name: "" });
    // this.setState({ answers });
  }

  updateAnswer(index, updatedAnswer) {
    // const answers = this.state.questions;
    // answers.splice(index, 1, updatedAnswer);
    // this.setState({ answers });
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
              {this.state.results.map((result, index) => {
                return (
                  <QuizResult
                    index={index}
                    result={result}
                    handleUpdateResult={this.updateResult}
                  />
                );
              })}

              <Button variant="outline-primary" onClick={this.addResult}>
                Add Result +
              </Button>
            </div>

            {/* Questions and Answers */}
            <div className="questions">
              <h2 className="font-weight-light mt-5">Questions</h2>
              {this.state.questions.map((question, index) => {
                return (
                  <div>
                    <QuizQuestion
                      index={index}
                      question={question}
                      handleUpdateQuestion={this.updateQuestion}
                    />
                    {question.answers.map((answer, subIndex) => {
                      return (
                        <div className="ps-5">
                          <QuizAnswer
                            index={subIndex}
                            answer={answer}
                            handleUpdateAnswer={this.updateAnswer}
                          />
                        </div>
                      );
                    })}
                    <Button
                      className="ms-5 mb-3"
                      variant="outline-primary"
                      onClick={this.addAnswer(0)}
                    >
                      Add Answer +
                    </Button>
                  </div>
                );
              })}
              {/* {this.state.questions.map((question, index) => {
                return (
                  <QuizQuestion
                    index={index}
                    question={question}
                    handleUpdateQuestion={this.updateQuestion}
                  />
                );
              })} */}

              <Button variant="outline-primary" onClick={this.addQuestion}>
                Add Question +
              </Button>
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
