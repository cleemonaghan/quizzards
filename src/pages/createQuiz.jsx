import React from "react";
import { createQuiz, updateQuiz, getQuiz } from "../databaseFunctions/quizzes";
import "@aws-amplify/ui-react/styles.css";
import {
  Form,
  Button,
  FloatingLabel,
  Dropdown,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { QuizQuestion, QuizResult, QuizAnswer } from "../components";
import { Link } from "react-router-dom";

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      quizName: "",
      description: "",
      ownerUsername: "",
      temp_picture: null,
      quiz_picture: "default_group_image",
      results: [{ name: "", img: "" }],
      questions: [{ name: "", img: "", answers: [{ name: "", weights: [0] }] }],
      validated: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
    this.addResult = this.addResult.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.publishQuiz = this.publishQuiz.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  async componentDidMount() {
    try {
      this.user = await Auth.currentAuthenticatedUser();
      this.setState({ ownerUsername: this.user.username });
    } catch (err) {
      console.log("There was an error: ", err);
    }
  }

  /**
   * This method updates the state
   */
  async updateAttributes() {
    let params = {
      quizName: this.state.quizName,
      description: this.state.description,
      ownerUsername: this.state.ownerUsername,
    };

    await updateQuiz(this.user, params);
  }

  /**
   * This method updates the quiz in the DB
   */
  async publishQuiz() {
    console.log(this.state.quizName);
    console.log(this.state.ownerUsername);
    console.log(this.state.description);
    console.log(this.state.quiz_picture);
    console.log(this.state.questions);
    console.log(this.state.results);
    try{
      let quiz = await createQuiz(this.state.quizName, this.state.ownerUsername, this.state.questions, this.state.results, this.state.description, this.state.quiz_picture);
      //console.log(quiz);
      return quiz;
    }
    catch(err){
      console.log("there was an error: ",err);
    }
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleImageChange(event) {
    //check if they they submitted files
    if (event.target.files) {
      if (event.target.files.length > 0 && event.target.files[0].size > 1) {
        let file = event.target.files[0];
        this.setState({
          temp_picture: URL.createObjectURL(file),
          quiz_picture: file,
        });
      } else {
        //no file was uploaded, so revert to the default
        this.setState({
          temp_picture: null,
          quiz_picture: "default_group_image",
        });
      }
    }
  }

  displayImage(image) {
    if (image === null) {
      return <div></div>;
    } else
      return (
        <img
          id="quiz_pic_display"
          className="img-fluid" // col-2 ms-4 mt-2 mb-0 px-2 py-2"
          alt=""
          src={image}
          style={{ height: "200px", width: "400px" }}
        />
      );
  }

  addResult() {
    // first push a new result
    const results = this.state.results;
    results.push({ name: "", img: "" });
    this.setState({ results });
    //then push a new weight for each question's answers
    this.state.questions.forEach((question) => {
      question.answers.forEach((answer) => {
        answer.weights.push(0);
      });
    });
  }

  updateResult(index, updatedResult) {
    const results = this.state.results;
    results.splice(index, 1, updatedResult);
    this.setState({ results });
  }

  addQuestion() {
    const questions = this.state.questions;
    let weights = [];
    this.state.results.forEach(() => weights.push(0));
    questions.push({ name: "", img: "", answers: [{ name: "" , weights: weights}] });
    this.setState({ questions });
  }

  updateQuestion(index, updatedQuestion) {
    const questions = this.state.questions;
    questions.splice(index, 1, updatedQuestion);
    this.setState({ questions });
  }

  addAnswer(i) {
    const answers = this.state.questions[i].answers;
    let weights = [];
    this.state.results.forEach(() => weights.push(0));
    answers.push({ name: "" , weights: weights});
    this.setState((state) => { return state });
  }

  updateAnswer(index, subindex, updatedAnswer) {
    const answers = this.state.questions[index].answers;
    answers.splice(subindex, 1, updatedAnswer);
  }

  updateWeight(index, subindex, resultIndex, newWeight) {
    const weights = this.state.questions[index].answers[subindex].weights;
    weights.splice(resultIndex, 1, newWeight);
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      // if they have not filled all the fields, don't let them publish the quiz
      console.log("Failed");
      event.stopPropagation();
    } else {
      //if they did properly fill out the quiz, let them publish the quiz
      this.publishQuiz();
      console.log(this.state);
    }
    this.setState({ validated: true });
  }

  render() {
    return (
      <div className="create_quiz">
        <div className="container">
          <h1 className="font-weight-light my-5">Create Quiz</h1>
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.handleSubmit}
          >
            <Container>
              <Row>
                <Col>
                  {/* Name */}
                  <Form.Group className="mb-3" controlId="name">
                    <FloatingLabel label="Title" className="mb-3">
                      <Form.Control
                        required
                        name="quizName"
                        type="text"
                        value={this.state.quizName}
                        onChange={this.handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a tile for the quiz.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col md="auto">
                  {/* Quiz Picture */}
                  <Form.Group controlId="quiz_pic" className="mb-3">
                    {/* <Form.Label>Quiz Picture</Form.Label> */}
                    <Form.Control
                      required
                      type="file"
                      name="quiz_pic"
                      onChange={this.handleImageChange}
                      accept="image/png, image/jpeg"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a picture for the quiz.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  {/* Description */}
                  <Form.Group className="mb-3" controlId="description">
                    <FloatingLabel label="Description" className="mb-3">
                      <Form.Control
                        required
                        name="description"
                        type="text"
                        as="textarea"
                        rows={3}
                        style={{ height: 196, resize: "none" }}
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a description for the quiz.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col md="auto">
                  {this.displayImage(this.state.temp_picture)}
                </Col>
              </Row>
            </Container>

            {/* Results */}
            <Container className="results mb-3">
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
            </Container>

            {/* Questions and Answers */}

            <Container className="questions">
              <h2 className="font-weight-light mt-5">Questions</h2>
              {this.state.questions.map((question, index) => {
                return (
                  <div>
                    <QuizQuestion
                      index={index}
                      question={question}
                      handleUpdateQuestion={this.updateQuestion}
                    />
                    <Row>
                      {question.answers.map((answer, subIndex) => {
                        return (
                          <Col md="auto" className="ps-5">
                            <QuizAnswer
                              index={subIndex}
                              answer={answer}
                              handleUpdateAnswer={(a, b) =>
                                this.updateAnswer(index, a, b)
                              }
                              handleUpdateWeight={(a, b, c) =>
                                this.updateWeight(index, a, b, c)
                              }
                              results={this.state.results}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                    <Button
                      className="ms-5 mb-3"
                      variant="outline-primary"
                      onClick={() => this.addAnswer(index)}
                    >
                      Add Answer +
                    </Button>
                  </div>
                );
              })}

              <Button variant="outline-primary" onClick={this.addQuestion}>
                Add Question +
              </Button>
            </Container>

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
