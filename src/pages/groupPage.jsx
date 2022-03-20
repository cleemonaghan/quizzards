import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { Link, useParams } from "react-router-dom";
import {
  Dropdown,
  DropdownButton,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { MembersList, QuizBox, StatsBox, CompareBox, failToLoad, Loading } from "../components";
import { photo13 } from "../images";

import { getGroup } from "../databaseFunctions/groups";


function GroupPage() {
  let info = useParams();

  let groupID = info.id;
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState(null);
  const [groupImage, setGroupImage] = useState(null);

  /** This function is called upon initialization to fetch all the 
   * information essential to displaying the page. Once all the 
   * information is gathered, it sets the loading state var to false 
   * so that the component will re-render with the information. 
   * 
   */
  async function getInfo() {
    try {
      setLoading(true);
      //get the group
      let res = await getGroup(groupID);
      setGroup(res);
      res = await Storage.get(res.profilePicture);
      setGroupImage(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);
  
  if (error) return (failToLoad());
  return loading ? Loading() : 
   (
      <div className="group-page">
        <div className="row m-0">
          <img className="col-5 mb-5 px-0" src={groupImage} alt="" width="100%" />
          <div className="description col-7 mb-5 py-5 px-0 bg-secondary">
            <h1 className="px-5">{group.name}</h1>
            <p className="px-5">
              This is a description of the group... 
              {group.bio}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="float-end col-3">
            <MembersList />
          </div>
          <div className="row mb-5">
            <div className="col-1 px-0">
              <DropdownButton
                id="dropdown-basic-button"
                title="Filter"
                variant="outline-primary"
              >
                <Dropdown.Item href="#/action-1">New Quizzes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Popular Quizzes</Dropdown.Item>
                <Dropdown.Item href="#/action-3">All Quizzes</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Quizes Taken</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="col-1"></div>
            <div className="col-3 px-0">
              <Link to="/createQuiz">
                <Button variant="outline-primary">Create New Quiz +</Button>{" "}
              </Link>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton
                  id="tbg-group-stats"
                  value={1}
                  variant="outline-primary"
                >
                  Group Stats
                </ToggleButton>
                <ToggleButton
                  id="tbg-compare-results"
                  value={2}
                  variant="outline-primary"
                >
                  Compare Results
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="float-end col-5 mx-5">
            {/* <StatsBox
              name="Hogwarts House"
              result="Hufflepuff"
              labels={["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]}
              data={[15, 45, 35, 5]}
            /> */}
            {/* <StatsBox /> */}
            <CompareBox />
          </div>
          <div className="col-3 mt-5">
            <QuizBox
              name="Hogwarts House"
              description="Find out which Hogwarts House you belong to :)"
            />
          </div>
          <div className="col-3 mt-5">
            <QuizBox
              name="Pets"
              description="Which pet should you get in the wizarding world?"
            />
          </div>
          <div className="col-3 mt-5">
            <QuizBox
              name="Wands"
              description="Description of quiz goes here."
            />
          </div>
          <div className="col-3 mt-5">
            <QuizBox
              name="Patronus"
              description="Description of quiz goes here."
            />
          </div>
        </div>
      </div>
    );
  
}

export default GroupPage;
