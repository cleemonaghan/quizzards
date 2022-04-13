
import { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Stack, Card } from "react-bootstrap";
import { photo3 as profileImage } from "../images";

function answerBox(
  questionIndex,
  answerIndex,
  color,
  question,
  questions,
  score,
  setScore,
  questionRefs,
  completed
) {
  let answer = question.answers[answerIndex];
  let displayColor = color;
  let fontSize = 43;
  if (question.answered && answerIndex !== question.selected) {
    //if this question has been answered and it wasn't this answer, make the color faded
    displayColor = "#CCCCCC";
  }
  if (window.innerWidth < 770) {
    fontSize = 15;
  }
  return (
    <Card className="text-center" style={{ backgroundColor: displayColor }}>
      <Card.Title
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="rbq_text_fit"
          onClick={() => {
            if (!completed) {
              //1. update the score
              let newScore = [...score];
              for (let i = 0; i < answer.weights.length; i++) {
                newScore[i] += answer.weights[i];
              }
              setScore(newScore);

              //2. mark the question as completed
              let res = questions[questionIndex];
              //set answered to true
              res.answered = true;
              //set selected to the index of the answer
              res.selected = answerIndex;
              questions.splice(questionIndex, 1, res);

              //3. Scroll to the next question
              handleBackClick(questionRefs.current[questionIndex + 2]);
            }
          }}
        >
          <div
            className="rbq_answer_text text-center"
            style={{ color: "#FFFFFF", fontSize: fontSize }}
          >
            <div className="rbq_answer_text">{answer.name}</div>
          </div>
        </div>
      </Card.Title>
    </Card>
  );
}

function handleBackClick(reference) {
  reference.scrollIntoView({ behavior: "smooth" });
}

function questionSection(
  index,
  question,
  questions,
  score,
  setScore,
  questionRefs,
  colors,
  completed
) {
  return (
    <div className="rbq_list_item_container rbq_question rbq_first_question">
      <Card className="bg-dark text-white text-center mb-3">
        <Card.Img src={question.img} alt={"Question " + index + " Image"} />
        <Card.ImgOverlay>
          <span
            className="rbq_question_overlap_text"
            style={{ fontSize: 107.8 }}
          >
            {question.name}
          </span>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row>
          {question.answers.map((answer, subindex) => {
            return (
              <Col className="mb-3" xs={6} md={4} key={answer.name + subindex}>
                {answerBox(
                  index,
                  subindex,
                  colors[subindex],
                  question,
                  questions,
                  score,
                  setScore,
                  questionRefs,
                  completed
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function displayResult(completed, scores, results, quizTitle, questionRefs, setCompleted, questions, setScore) {
  //find the best result
  let bestScore = 0;
  let bestIndex = 0;
  for(let i = 0; i < scores.length; i++) {
    if(bestScore < scores[i]) {
      //update the best
      bestScore = scores[i];
      bestIndex = i;
    }
  }


  let visibility = "visible";
  if (!completed) {
    visibility = "hidden";
  }
  return (
    <div
      className="rbq_result_outer_container"
      name="Result"
      style={{ visibility: visibility }}
    >
      <div className="rbq_result_header">
        <h2>{quizTitle}</h2>
      </div>
      <div className="rbq_result_inner_container">
        <div className="rbq_result_inner_description_container">
          <h3 className="rbq_result_inner_description_header">
          {results[bestIndex].name}
          </h3>
          <p className="rbq_result_inner_description">Result Description</p>
        </div>
        <div className="rbq_result_inner_image_container">
          <img
            className="rbq_result_inner_image"
            alt="Result Image"
            src={results[bestIndex].img}
          ></img>
        </div>
      </div>
      <div className="rbq_result_footer">
        <button className="rbq_retake_quiz_button" onClick={() => {
          //retake the quiz
          resetQuiz(questionRefs, setCompleted, questions, results, setScore)
        }}>Retake</button>
      </div>
    </div>
  );
}

function resetQuiz(questionRefs, setCompleted, questions, results, setScore) {
  //scroll to the top
  handleBackClick(questionRefs.current[0])

  //reset the result
  setCompleted(false);

  //reset the questions
  for(let i = 0 ; i < questions.length; i++) {
    let res = questions[i];
    //set answered to true
    res.answered = false;
    //set selected to the index of the answer
    res.selected = null;
    questions.splice(i, 1, res);
  }

  //reset the score
  let temp = [];
  results.forEach(() => {
    temp.push(0);
  });
  setScore(temp);
}

function Quiz() {
  let colors = [
    "#db278d",
    "#f14e48",
    "#ff9038",
    "#feca1d",
    "#43c12c",
    "#27dbae",
    "#0273e9",
    "#7248f1",
    "#c035e7",
  ];

  let database = {
    title: "Your title goes here.",
    description: "Your description goes here.",
    author: "cleemonaghan",
    quiz_picture: "/static/media/photo15.329b750b9600c1113932.png",
    results: [
      { name: "Yes", img: "/static/media/photo15.329b750b9600c1113932.png" },
      { name: "No", img: "/static/media/photo15.329b750b9600c1113932.png" },
    ],
  };

  // init the questions for the quiz
  const [questions, setQuestions] = useState([
    {
      name: "Question One",
      img: "/static/media/photo15.329b750b9600c1113932.png",
      answered: false, //this is important
      selected: null,
      answers: [
        { name: "Answer One", weights: [3, 0] },
        { name: "Answer Two", weights: [0, 3] },
        { name: "Answer Three", weights: [2, 0] },
        { name: "Answer Four", weights: [0, 2] },
        { name: "Answer Five", weights: [1, 0] },
        { name: "Answer Six", weights: [0, 1] },
        { name: "Answer Seven", weights: [0, 0] },
        { name: "Answer Eight", weights: [0, 0] },
        { name: "Answer Nine", weights: [0, 0] },
      ],
    },
    {
      name: "Question Two",
      img: "/static/media/photo15.329b750b9600c1113932.png",
      answered: false, //this is important
      selected: null,
      answers: [
        { name: "Answer One", weights: [3, 0] },
        { name: "Answer Two", weights: [0, 3] },
        { name: "Answer Three", weights: [2, 0] },
        { name: "Answer Four", weights: [0, 2] },
      ],
    },
  ]);

  // init the score array for the quiz
  let temp = [];
  database.results.forEach(() => {
    temp.push(0);
  });
  const [score, setScore] = useState(temp);

  //check if we have answered all the questions
  let [completed, setCompleted] = useState(false);
  let change = true;
  for (let i = 0; i < questions.length; i++) {
    //if they haven't answered a question, set completed to false
    if (!questions[i].answered) {
      change = false;
    }
  }
  if (change && !completed) {
    // We have finished the quiz!
    // Save the results

    // Diplay the results
    setCompleted(true);
  }

  //check if we have finished the quiz

  const itemsRef = useRef([]);
  // you can access the elements with itemsRef.current[n]

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, questions.length + 2);
  }, [questions.length]);

  return (
    <div ref={(el) => (itemsRef.current[0] = el)} name="Top" className="mt-5">
      <div className="rbq_inner_quiz_container">
        <Card className="bg-dark text-white mb-3">
          <Card.Img
            variant="top"
            src={database.quiz_picture}
            alt={database.title}
          />
          <Card.Body>
            <Card.Title>
              <h1>{database.title}</h1>
            </Card.Title>
            <Card.Text>{database.description}</Card.Text>
            <Stack direction="horizontal" gap={3}>
              <img
                className="img-fluid rounded-circle col-2 ms-4 my-2 px-2 py-2"
                alt={database.author}
                src={profileImage}
              />
              <span>
                <p>
                  by <strong>{database.author}</strong>
                </p>
              </span>
            </Stack>
          </Card.Body>
        </Card>

        <div id="main_questions_container">
          {questions.map((question, index) => {
            return (
              <div
                ref={(el) => (itemsRef.current[index + 1] = el)}
                key={"Question" + index}
              >
                {questionSection(
                  index,
                  question,
                  questions,
                  score,
                  setScore,
                  itemsRef,
                  colors,
                  completed
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div ref={(el) => (itemsRef.current[questions.length + 1] = el)}>
        {displayResult(completed, score, database.results, database.title, itemsRef, setCompleted, questions, setScore)}
      </div>
    </div>
  );
}

export default Quiz;
