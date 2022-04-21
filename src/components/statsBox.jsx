import React, { useState, useEffect } from "react";
import GroupStats from "./groupStats";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getQuiz, fetchUserAnswer } from "../databaseFunctions/quizzes";
import Loading from "./loading";

function useGatherResources(quizID, members) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [memberResults, setMemberResults] = useState([]);
  const [quiz, setQuiz] = useState(null);

  async function getInfo() {
    try {
      setLoading(true);
      //get the members' results
      let result = [];
      for (let i = 0; i < members.length; i++) {
        let res = await fetchUserAnswer(members[i].userID, quizID);
        if (res.length > 0) {
          //if the user has completed the quiz, add their result to the list
          result.push(res[0]);
        }
      }
      setMemberResults(result);

      //get the quiz
      let quizRes = await getQuiz(quizID);
      setQuiz(quizRes);
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

  return [memberResults, quiz, error, loading];
}

function StatsBox({ group, quizID, result }) {
  const [memberResults, quiz, error, loading] = useGatherResources(
    quizID,
    group.members.items
  );

  let data = [];
  let labels = [];
  
  if (loading) {
    return Loading();
  } else {
    for (let i in quiz.results.items) {
      labels.push(quiz.results.items[i].name);
      data.push(0);
    }
    for (let i = 0; i < memberResults.length; i++) {
      let result = memberResults[i].result;
      for (let j in quiz.results.items) {
        if (result === quiz.results.items[j].id) {
          data[j] += 1;
        }
      }
    }

    return (
      <div className="stats-box">
        <div className="outline mx-3 mb-5 pb-4">
          <h4 className="mx-3 my-3"> Group Stats: {quiz.title}</h4>
          <div className="mx-4 my-2">
            <GroupStats barLabels={labels} barData={data} />
          </div>
          <hr />
          <div className="row mx-auto">
            <h4 className="col-auto ms-2 my-2"> My Results: {result}</h4>
            <div className="col-auto my-auto">
              <Link to={"/quizPage/" + quizID}>
                <Button variant="outline-primary">Go to Quiz</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsBox;
