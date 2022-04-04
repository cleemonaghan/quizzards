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

// import React from "react";
// import { createQuiz, updateQuiz, getQuiz } from "../databaseFunctions/quizzes";
// import "@aws-amplify/ui-react/styles.css";
// import {
//   Form,
//   Button,
//   FloatingLabel,
//   Dropdown,
//   Accordion,
// } from "react-bootstrap";
// import { Auth, Storage } from "aws-amplify";
// import { QuizQuestion, QuizResult } from "../components";
// import { Link } from "react-router-dom";

// import Amplify, { Hub } from "aws-amplify";
// import config from "../aws-exports";
// Amplify.configure(config);

// class CreateQuiz extends React.Component {
//   constructor(props) {
//     super(props);
//     this.user = null;
//     this.state = {
//       id: "",
//       quizName: "",
//       description: "",
//       owner: null,
//       ownerUsername: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.updateAttributes = this.updateAttributes.bind(this);
//   }

//   async componentDidMount() {
//     try {
//       this.user = await Auth.currentAuthenticatedUser();
//     } catch (err) {
//       console.log("There was an error logging: ", err);
//     }
//   }

//   /**
//    * This method updates the user's attributes in AWS Cognito and in the database.
//    */
//   async updateAttributes() {
//     let params = {
//       quizName: this.state.quizName,
//     };
//     await Auth.updateQuizAttributes(this.user, params);

//     params = {
//       //highlightColor:  this.state.color_theme,
//       description: this.state.description,
//     };

//     await updateQuiz(this.user, params);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let quizName = target.quizName;
//     this.setState({
//       [quizName]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     //update the color scheme
//     //update the user profile
//     this.updateAttributes();
//   }

//   render() {
//     return (
//       <div className="create_quiz">
//         <div className="container">
//           <h1 className="font-weight-light my-5">Create Quiz</h1>
//           <Form onSubmit={this.handleSubmit}>
//             {/* Name */}
//             <Form.Group className="mb-3" controlId="name">
//               <FloatingLabel label="Name" className="mb-3">
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   value={this.state.quizName}
//                   onChange={this.handleChange}
//                 />
//               </FloatingLabel>
//             </Form.Group>

//             {/* Description */}
//             <Form.Group className="mb-3" controlId="description">
//               <FloatingLabel label="Quiz description" className="mb-3">
//                 <Form.Control
//                   name="description"
//                   type="text"
//                   value={this.state.description}
//                   onChange={this.handleChange}
//                 />
//               </FloatingLabel>
//             </Form.Group>

//             {/* Results */}
//             <div className="results">
//               <h2 className="font-weight-light mt-5">Results</h2>
//               <Accordion defaultActiveKey="1">
//                 <Accordion.Item eventKey="1">
//                   <Accordion.Header>Result 1</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="1" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="2">
//                   <Accordion.Header>Result 2 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="2" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="3">
//                   <Accordion.Header>Result 3 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="3" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="4">
//                   <Accordion.Header>Result 4 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="4" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="5">
//                   <Accordion.Header>Result 5 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="5" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="6">
//                   <Accordion.Header>Result 6 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="6" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="7">
//                   <Accordion.Header>Result 7 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="7" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="8">
//                   <Accordion.Header>Result 8 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="8" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="9">
//                   <Accordion.Header>Result 9 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="9" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="10">
//                   <Accordion.Header>Result 10 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="10" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="11">
//                   <Accordion.Header>Result 11 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="11" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="12">
//                   <Accordion.Header>Result 12 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizResult rNumber="12" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>

//               {/* <Link to="/addResult">
//                 <Button variant="outline-primary" size="lg">
//                   Add Result +
//                 </Button>{" "}
//               </Link> */}
//             </div>

//             {/* Questions and Answers */}
//             <div className="questions">
//               <h2 className="font-weight-light mt-5">Questions</h2>
//               <Accordion defaultActiveKey="1">
//                 <Accordion.Item eventKey="1">
//                   <Accordion.Header>Question 1</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="1" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="2">
//                   <Accordion.Header>Question 2 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="2" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="3">
//                   <Accordion.Header>Question 3 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="3" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="4">
//                   <Accordion.Header>Question 4 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="4" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="5">
//                   <Accordion.Header>Question 5 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="5" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="6">
//                   <Accordion.Header>Question 6 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="6" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="7">
//                   <Accordion.Header>Question 7 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="7" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="8">
//                   <Accordion.Header>Question 8 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="8" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="9">
//                   <Accordion.Header>Question 9 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="9" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="10">
//                   <Accordion.Header>Question 10 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="10" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="11">
//                   <Accordion.Header>Question 11 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="11" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="12">
//                   <Accordion.Header>Question 12 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="12" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="13">
//                   <Accordion.Header>Question 13 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="13" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="14">
//                   <Accordion.Header>Question 14 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="14" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="15">
//                   <Accordion.Header>Question 15 *optional</Accordion.Header>
//                   <Accordion.Body>
//                     <QuizQuestion qNumber="15" />
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>

//               {/* <Button variant="outline-primary">Add Question +</Button> */}
//             </div>

//             {/* Submit Button */}
//             <Button className="my-5 me-5" variant="primary" type="submit">
//               Create Quiz
//             </Button>
//             <Button className="my-5" variant="primary" type="submit">
//               Publish Quiz
//             </Button>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

// export default CreateQuiz;
// // 15 questions
// // 9 answers
// // 12 results
