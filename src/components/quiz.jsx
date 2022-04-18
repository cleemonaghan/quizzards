import { Auth, Storage } from "aws-amplify";
import { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Stack, Card } from "react-bootstrap";
import { failToLoad, Loading } from "../components";
import { getQuiz } from "../databaseFunctions/quizzes";
import { default_group as spareBackground } from "../images";
import { photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9} from "../images";

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
  let answer = question.answers.items[answerIndex];
  let displayColor = color;
  let opacity = 1;
  let fontWeight = 900;
  if (question.answered && answerIndex !== question.selected) {
    //if this question has been answered and it wasn't this answer, make the color faded
    opacity = 0.3;
  }

  return (
    <Card
      className="text-center py-4 border-0 align-items-center d-flex justify-content-center"
      style={{
        height: "150px",
        backgroundColor: displayColor,
        opacity: opacity,
      }}
    >
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
            style={{
              color: "#FFFFFF",
              fontWeight: fontWeight,
            }}
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
  completed,
  lizards
) {
  let background = question.picture;
  if (question.picture === undefined || question.picture === null) {
    //if there is no picture, then use a blank color
    background = lizards[index];
  }
  return (
    <div className="rbq_list_item_container rbq_question rbq_first_question">
      <Card className="bg-dark text-white text-center mb-4">
        <Card.Img src={background} alt={"Question " + index + " Image"} />
        <Card.ImgOverlay>
          <span className="rbq_question_overlap_text" style={{ fontSize: 80 }}>
            {question.name}
          </span>
        </Card.ImgOverlay>
      </Card>

      <Container className="mb-5 p-0">
        <Row>
          {question.answers.items.map((answer, subindex) => {
            return (
              <Col className="mb-4" xs={6} md={4} key={answer.name + subindex}>
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

function displayResult(
  completed,
  scores,
  results,
  quizTitle,
  questionRefs,
  setCompleted,
  questions,
  setScore
) {
  //find the best score
  let bestScore = 0;
  let bestIndex = 0;
  for (let i = 0; i < scores.length; i++) {
    if (bestScore < scores[i]) {
      //update the best
      bestScore = scores[i];
      bestIndex = i;
    }
  }

  //find the best result
  let result = results[0];
  for (let i = 0; i < results.length; i++) {
    if (results[i].index === bestIndex) {
      result = results[i];
      break;
    }
  }

  let visibility = "visible";
  if (!completed) {
    visibility = "hidden";
  }
  let background = result.picture;
  if (result.picture === undefined || result.picture === null) {
    //if there is no picture, then use a blank color
    background = spareBackground;
  }
  return (
    <div
      className="rbq_result_outer_container mb-4"
      name="Result"
      style={{ visibility: visibility }}
    >
      <div className="rbq_result_header">
        <h2>{quizTitle}</h2>
      </div>
      <div className="rbq_result_inner_container">
        <div className="rbq_result_inner_description_container">
          <h3 className="rbq_result_inner_description_header">{result.name}</h3>
          {/* <p className="rbq_result_inner_description">Result Description</p> */}
        </div>
        <div className="rbq_result_inner_image_container">
          <img
            className="rbq_result_inner_image"
            alt="Result Image"
            src={background}
          ></img>
        </div>
      </div>
      <div className="rbq_result_footer">
        <button
          className="rbq_retake_quiz_button"
          onClick={() => {
            //retake the quiz
            resetQuiz(questionRefs, setCompleted, questions, results, setScore);
          }}
        >
          Retake
        </button>
      </div>
    </div>
  );
}

function resetQuiz(questionRefs, setCompleted, questions, results, setScore) {
  //scroll to the top
  handleBackClick(questionRefs.current[0]);

  //reset the result
  setCompleted(false);

  //reset the questions
  for (let i = 0; i < questions.length; i++) {
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

function useGatherResources(quizID) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState({});
  const [username, setUsername] = useState(null);

  /** This function is called upon initialization to fetch all the
   * information essential to displaying the page. Once all the
   * information is gathered, it sets the loading state var to false
   * so that the component will re-render with the information.
   */
  async function getInfo() {
    try {
      //get the quiz
      let res = await getQuiz(quizID);
      //get the quiz image
      let image = await Storage.get(res.owner.profilePicture);
      res.owner_picture = image;
      //get the quiz image
      image = await Storage.get(res.picture);
      res.picture = image;
      //get all the results images
      for (let i = 0; i < res.results.items.length; i++) {
        if (res.results.items[i].picture !== "null") {
          image = await Storage.get(res.results.items[i].picture);
          res.results.items[i].picture = image;
        } else res.results.items[i].picture = null;
      }
      //get all the question images
      for (let i = 0; i < res.questions.items.length; i++) {
        if (res.questions.items[i].picture !== "null") {
          image = await Storage.get(res.questions.items[i].picture);
          res.questions.items[i].picture = image;
        } else res.questions.items[i].picture = null;
        //create and initialize status variables for later
        res.questions.items[i].answered = false;
        res.questions.items[i].selected = null;
      }

      setQuiz(res);
      //get the user
      res = await Auth.currentAuthenticatedUser();
      setUsername(res.username);
    } catch (e) {
      //there was an error, so save it
      setError(e);
    } finally {
      //we are finished loading, so set loading to false
      setLoading(false);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return [quiz, username, error, loading];
}

function Quiz({ quizID }) {
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
    "#db278d",
    "#f14e48",
    "#ff9038",
  ];

  let lizards = [
    photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,
  ];

  const [score, setScore] = useState([]);
  const [completed, setCompleted] = useState(false);
  const itemsRef = useRef([]);
  const [quiz, username, error, loading1] = useGatherResources(quizID);
  const [loading2, setLoading2] = useState(true);

  //var questions = [];
  //var results = [];

  useEffect(() => {
    if (!loading1) {
      //questions = quiz.questions.items;
      //results = quiz.results.items;
      // init the score array for the quiz
      let temp = [];
      quiz.results.items.forEach(() => {
        temp.push(0);
      });
      setScore(temp);

      //check if we have finished the quiz

      // you can access the elements with itemsRef.current[n]
      itemsRef.current = itemsRef.current.slice(
        0,
        quiz.questions.items.length + 2
      );
      setLoading2(false);
    }
  }, [loading1]);

  if (error) return failToLoad();
  else if (loading1 || loading2) return Loading();
  else {
    if (!loading2 && quiz.questions !== undefined) {
      //check if we have answered all the questions
      let change = true;
      for (let i = 0; i < quiz.questions.items.length; i++) {
        //if they haven't answered a question, set completed to false
        if (!quiz.questions.items[i].answered) {
          change = false;
        }
      }
      if (change && !completed) {
        // We have finished the quiz!
        // Save the results
        console.log("Results are");
        console.log(quiz.results);

        console.log("Score is");
        console.log(score);

        // Diplay the results
        setCompleted(true);
      }
    }
    return (
      <div ref={(el) => (itemsRef.current[0] = el)} name="Top" className="mt-5">
        <div className="rbq_inner_quiz_container">
          <h1 style={{ fontWeight: "bold" }}>{quiz.title}</h1>
          <p> {quiz.description} </p>
          <div className="row">
            <img
              className="img-fluid rounded-circle col-2 ms-4 mt-0 mb-2 px-3 py-3"
              alt={quiz.owner_picture}
              src={profileImage}
            />
            <p className="col-5 my-auto" style={{ fontSize: "25px" }}>
              by <strong>{quiz.ownerUsername}</strong>
            </p>
          </div>

          {/* <Card className="bg-dark text-white mb-5">
            <Card.Img
              variant="top"
              height="200px"
              src={quiz.picture}
              alt={quiz.title}
            />
            <Card.ImgOverlay className="overlap_text">
              <Card.Title>
                <h1 style={{ fontWeight: "bold" }}>{quiz.title}</h1>
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                {quiz.description}
              </Card.Text>
              <Stack direction="horizontal" gap={3}>
              <img
                className="img-fluid rounded-circle col-2 ms-4 my-2 px-2 py-2"
                alt={database.author}
                src={profileImage}
              />
              <span>
                <p style={{ fontSize: "25px" }}>
                  by <strong>{database.author}</strong>
                </p>
              </span>
            </Stack>
            </Card.ImgOverlay>
            <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <img
                  className="img-fluid rounded-circle col-2 ms-4 my-2 px-2 py-2"
                  alt={quiz.ownerUsername}
                  src={quiz.owner_picture}
                />
                <span>
                  <p>
                    by <strong>{quiz.ownerUsername}</strong>
                  </p>
                </span>
              </Stack>
            </Card.Body>
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
          </Card> */}

          <div id="main_questions_container">
            {quiz.questions.items.map((question, index) => {
              return (
                <div
                  ref={(el) => (itemsRef.current[index + 1] = el)}
                  key={"Question" + index}
                >
                  {questionSection(
                    index,
                    question,
                    quiz.questions.items,
                    score,
                    setScore,
                    itemsRef,
                    colors,
                    completed,
                    lizards
                  )}
                </div>
              );
            })}
          </div>

          <div
            ref={(el) =>
              (itemsRef.current[quiz.questions.items.length + 1] = el)
            }
          >
            {displayResult(
              completed,
              score,
              quiz.results.items,
              quiz.title,
              itemsRef,
              setCompleted,
              quiz.questions.items,
              setScore
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
