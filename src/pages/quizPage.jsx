import React from "react";
import { useParams } from "react-router-dom";
import { Quiz } from "../components";

function QuizPage() {
  let info = useParams();
  let quizID = info.id;

  return (
    <div className="quiz-page">
      <div className="container">
        <Quiz quizID={quizID} />
      </div>
    </div>
  );
}

export default QuizPage;
