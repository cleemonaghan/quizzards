import React from "react";
import { Quiz } from "../components";

class QuizPage extends React.Component {
  render() {
    return (
      <div className="quiz-page">
        <div className="container">
          <Quiz />
        </div>
      </div>
    );
  }
}

export default QuizPage;
