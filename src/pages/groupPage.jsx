import React, { useState, useEffect } from "react";
import { Auth, Storage } from "aws-amplify";
import { Link, useParams } from "react-router-dom";
import { PencilSquare } from "react-bootstrap-icons";
import {
  Dropdown,
  DropdownButton,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import {
  MembersList,
  QuizBox,
  StatsBox,
  CompareBox,
  failToLoad,
  Loading,
} from "../components";

import { getGroup} from "../databaseFunctions/groups";
import {getUserOwnedGroups} from "../databaseFunctions/users.js";

/** This function gathers the resources necessary to load the group page.
 *
 * @param {String} groupID the id of the group to load
 * @returns an array containing a json of the group, the groupImage, the error status, and the loading status
 */
function useGatherResources(groupID) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState(null);
  const [groupImage, setGroupImage] = useState(null);
  const [user, setUser] = useState(null);
  const [userGroups, setUserGroups] = useState([]);

  /** This function is called upon initialization to fetch all the
   * information essential to displaying the page. Once all the
   * information is gathered, it sets the loading state var to false
   * so that the component will re-render with the information.
   */
  async function getInfo() {
    try {
      setLoading(true);
      //get the group
      let res = await getGroup(groupID);
      setGroup(res);
      //get the group image
      res = await Storage.get(res.profilePicture);
      setGroupImage(res);
      //get the user
      res = await Auth.currentAuthenticatedUser();
      setUser(res.username);
      //get the user groups

      console.log(res.username);
      res = await getUserOwnedGroups(res.username);
      console.log(res);
      setUserGroups(res);

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

  return [group, groupImage, error, loading, user, userGroups];
}

function userButton(groupID, user, userGroups){
  console.log("group ID",groupID);
  console.log("userGroups",userGroups);
  console.log("userGroups length", userGroups.length);
  //let response = await Auth.currentAuthenticatedUser();
  //let user = response.username;
  //console.log(user);
  //const groupArr = await getUserGroups(user);
  //console.log(groupArr.length);
  let myGroup = false;

  for(let i = 0; i< userGroups.length; i++){
    console.log(userGroups[i]);
    let group = userGroups[i].id;
    console.log(groupID);
    
    if(groupID == group){
      myGroup = true;
      break;
    }
  }

  var result = [];

  console.log(myGroup);

  if(myGroup){
    result.push(    
      <div className="col-2 px-0"> <Link to={{ pathname: "/groupEdit/" + groupID }}>
      <Button variant="outline-primary">Edit Group </Button>{" "}
    </Link></div>        
);
  }
  else{
    // result.push(
    //   <div className="col-2 px-0"> <Link to={{ pathname: "/groupEdit/" + groupID }}>
    //   <Button variant="outline-primary">Edit Group </Button>{" "}
    // </Link></div> 
    // );
  }
  console.log(result);
  return result;
}

/** This function loads a group page and returns the formatted html to display the page.
 *
 * @returns the group page with the specified ID
 */
function GroupPage() {
  let info = useParams();
  let groupID = info.id;

  const [group, groupImage, error, loading, user, userGroups] = useGatherResources(groupID);
  //console.log(userGroups);
  let userB =  userButton(groupID, user, userGroups);
  

  if (error) return failToLoad();
  return loading ? (
    Loading()
  ) : (
    <div className="group-page">
      <div className="row m-0">
        <img className="col-5 mb-5 px-0" src={groupImage} alt="" width="100%" height="300vh"/>
        <div className="description col-7 mb-5 py-5 px-0 bg-secondary">
          <h1 className="px-5">
            {group.name}
            {/* <Link to={{ pathname: "/groupEdit/" + groupID }}> */}
              {/* <PencilSquare className="p-2" color="#292b2c" />{" "} */}
            {/* </Link> */}
          </h1>
          <p className="px-5">{group.bio}</p>
        </div>
      </div>
      <div className="container">
        <div className="float-end col-3">
          <MembersList group={group} />
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
              <Button variant="outline-primary">Add Quiz +</Button>{" "}
            </Link>
          </div>
          {userB}
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
          <StatsBox />
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
          <QuizBox name="Wands" description="Description of quiz goes here." />
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
