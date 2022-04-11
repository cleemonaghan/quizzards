import React from "react";
import { Form, Button, FloatingLabel, Accordion } from "react-bootstrap";
import { QuizAnswer } from "../components";

function QuizQuestion({ question, index, handleUpdateQuestion }) {
  function handleNameChange(evt) {
    const newName = evt.nativeEvent.target.value;
    handleUpdateQuestion(index, {
      ...question,
      name: newName,
    });
  }

  return (
    <div className="question">
      <h4>Question {index + 1}</h4>
      <Form.Group className="mb-3" controlId="question">
        <FloatingLabel label="Question" className="mb-3">
          <Form.Control name="name" type="text" onChange={handleNameChange} />
        </FloatingLabel>
      </Form.Group>
      <div className="ps-5">
        <Form.Group controlId="question_pic" className="mb-3">
          <Form.Label>Question Picture</Form.Label>
          <Form.Control
            type="file"
            name="question_pic"
            accept="image/png, image/jpeg"
          />
        </Form.Group>
        {/* <QuizAnswer index={0} /> */}
        {/* {this.state.answers.map((answer, index) => {
          return (
            <QuizAnswer
              index={index}
              answer={answer}
              handleUpdateAnswer={this.passAddAnswer}
            />
          );
        })} */}

        {/* <Button className="mb-3" variant="outline-primary">
          Add Answer +
        </Button> */}
        {/* <Button variant="outline-primary" onClick={this.addAnswer}>
          Add Answer +
        </Button> */}
      </div>
    </div>
  );
}

export default QuizQuestion;

// import React from "react";
// import { Form, Button, FloatingLabel, Accordion } from "react-bootstrap";
// import { QuizAnswer } from "../components";

// function QuizQuestion({ qNumber }) {
//   return (
//     <div className="question">
//       <h4>Question {qNumber}</h4>
//       <Form.Group className="mb-3" controlId="question">
//         <FloatingLabel label="Question" className="mb-3">
//           <Form.Control name="name" type="text" />
//         </FloatingLabel>
//       </Form.Group>
//       <div className="ps-5">
//         <Form.Group controlId="question_pic" className="mb-3">
//           <Form.Label>Question Picture</Form.Label>
//           <Form.Control
//             type="file"
//             name="question_pic"
//             accept="image/png, image/jpeg"
//           />
//         </Form.Group>
//         <Accordion defaultActiveKey="1">
//           <Accordion.Item eventKey="1">
//             <Accordion.Header>Answer 1</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="1" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="2">
//             <Accordion.Header>Answer 2 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="2" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="3">
//             <Accordion.Header>Answer 3 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="3" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="4">
//             <Accordion.Header>Answer 4 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="4" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="5">
//             <Accordion.Header>Answer 5 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="5" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="6">
//             <Accordion.Header>Answer 6 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="6" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="7">
//             <Accordion.Header>Answer 7 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="7" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="8">
//             <Accordion.Header>Answer 8 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="8" />
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="9">
//             <Accordion.Header>Answer 9 *optional</Accordion.Header>
//             <Accordion.Body>
//               <QuizAnswer aNumber="9" />
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//         {/* <Button className="mb-3" variant="outline-primary">
//           Add Answer +
//         </Button> */}
//       </div>
//     </div>
//   );
// }

// export default QuizQuestion;
