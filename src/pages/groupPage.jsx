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
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import {
  MembersList,
  QuizBox,
  QuizStatsBox,
  StatsBox,
  CompareBox,
  PickAQuiz,
  failToLoad,
  Loading,
} from "../components";

import {
  getGroup,
  getGroupsQuizzes,
  addQuizToGroup,
} from "../databaseFunctions/groups";
import {
  getUserOwnedGroups,
  getUserOwnedQuizzes,
  getUserQuizzes,
} from "../databaseFunctions/users.js";
import { getQuiz, listAllQuizzes } from "../databaseFunctions/quizzes.js";
import { getUser } from "../graphql/queries";
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
  const [userOwnedQuizzes, setUserQuizzes] = useState([]);
  const [userTakenQuizzes, setUserTakenQuizzes] = useState([]);
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [groupQuizzes, setGroupQuizzes] = useState([]); //list of quizzes belonging to group
  const [quizSearchElement, setQuizSearchElement] = useState([]); //for

  /** This function is called upon initialization to fetch all the
   * information essential to displaying the page. Once all the
   * information is gathered, it sets the loading state var to false
   * so that the component will re-render with the information.
   */
  async function getInfo() {
    try {
      setLoading(true);
      //get the user
      let username = (await Auth.currentAuthenticatedUser()).username;
      setUser(username);
      console.log(username);
      console.log(groupID);
      //get the group
      let res = await getGroup(groupID);
      setGroup(res);
      console.log(res);
      //get the group image
      res = await Storage.get(res.profilePicture);
      setGroupImage(res);

      //get group quizzes
      res = await getGroupsQuizzes(groupID);
      console.log(res);
      let groupQuizArr = [];
      for (let i = 0; i < res.length; i++) {
        let temp = await getQuiz(res[i].quizID);
        groupQuizArr.push(temp);
      }
      console.log(groupQuizArr);
      setGroupQuizzes(groupQuizArr);

      //get user owned Quizzes
      let userOwned = await getUserOwnedQuizzes(username);
      setUserQuizzes(userOwned);
      let ownedSet = new Set();
      for (let i = 0; i < userOwned.length; i++) {
        ownedSet.add(userOwned[i].id); //make hashmap for O(1)lookup so that taken quizzes wont hold owned quizzes, no repeats
      }

      //get user taken quizzes
      let temp = await getUserQuizzes(username);
      let userTaken = [];
      let takenSet = new Set();
      for (let i = 0; i < temp.length; i++) {
        if (!ownedSet.has(temp[i].id)) {
          userTaken.push(temp[i]);
          takenSet.add(temp[i].id);
        }
      }
      setUserTakenQuizzes(userTaken);

      //get all quizzes
      res = await listAllQuizzes();
      let allQuizzesArr = [];
      for (let i = 0; i < res.length; i++) {
        if (!ownedSet.has(res[i].id) && !takenSet.has(res[i].id)) {
          allQuizzesArr.push(res[i]);
        }
      }
      setAllQuizzes(allQuizzesArr);

      //get the user groups
      res = await getUserOwnedGroups(username);
      setUserGroups(res);

      console.log(userOwned);
      console.log(userTaken);
      console.log(allQuizzesArr);
      //get form for all quizzes
      res = await gatherQuizzes(userOwned, userTaken, allQuizzesArr);
      setQuizSearchElement(res);
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

  return [
    group,
    groupImage,
    error,
    loading,
    user,
    userGroups,
    userOwnedQuizzes,
    userTakenQuizzes,
    allQuizzes,
    groupQuizzes,
    setGroupQuizzes,
    quizSearchElement,
  ];
}

function userButton(groupID, user, userGroups) {
  //console.log("group ID", groupID);
  //console.log("userGroups", userGroups);
  //console.log("userGroups length", userGroups.length);
  let myGroup = false;

  for (let i = 0; i < userGroups.length; i++) {
    //console.log(userGroups[i]);
    let group = userGroups[i].id;
    //console.log(groupID);

    if (groupID == group) {
      myGroup = true;
      break;
    }
  }

  var result = [];

  //console.log(myGroup);

  if (myGroup) {
    result.push(
      <Link to={{ pathname: "/groupEdit/" + groupID }}>
        <PencilSquare className="p-2" color="white" />{" "}
      </Link>
    );
  }
  //console.log(result);
  return result;
}
/* 
This function displays the group stats, pick a quiz for stats, 
and compare your stats components based on if a quiz is selected
and what side the toggle menu is on
 */
function handleStatsToggle(group, quizID, username, indexOfToggle) {
  if (quizID === null) {
    return (
      <div>
        <PickAQuiz />
      </div>
    );
  } else {
    if (indexOfToggle === 1) {
      //group stats
      return (
        <div>
          <StatsBox group={group} quizID={quizID} />
        </div>
      );
    } else if (indexOfToggle === 2) {
      //compare stats
      return (
        <div>
          <CompareBox group={group} quizID={quizID} username={username} />
        </div>
      );
    } else {
      return <div></div>; //should never reach this
    }
  }
}
//todo: invite button as group owner: for pop up window.....quizzes, addQuiz to group
//create new function...createquizto group
//groups folder
/* 
This function creates and returns the list of quizzes
associated with the group in the format to be displayed
on the left side of the page
 */
function displayQuizElements(groupQuizzes, setQuizIDSelectedForStats) {
  if (groupQuizzes === undefined || groupQuizzes.length < 1) {
    return <p>This group has no quizzes yet</p>;
  } else {
    var result = [];
    for (let i = 0; i < groupQuizzes.length; i++) {
      if (groupQuizzes[i] == null) {
        continue;
      }
      let quiz = groupQuizzes[i];
      //let quiz = await getQuiz(groupQuizzes[i].id); //title,author,ID
      result.push(
        <div
          className="col-auto"
          key={i}
          onClick={() => setQuizIDSelectedForStats(quiz.id)}
        >
          <QuizStatsBox
            title={quiz.title}
            author={quiz.ownerUsername}
            id={quiz.id}
          />
        </div>
      );
    }
    return result;
  }
}
/* 
This function creates and returns and add quiz button
onclick displays the showQuizzes popup
TODO: add checks that the user clicking is a 
group member?
 */
function generateAddQuizButton(showQuizzes) {
  //TODO:check if they are the owner of the group
  if (true) {
    return (
      <Button
        className="col-auto"
        variant="outline-primary"
        onClick={() => showQuizzes(true)}
      >
        Add Quiz +
      </Button>
    );
  } else {
    return <div></div>;
  }
}
/* 

 */

/* 
gather quizzes returns all the quizzes in div form
 */
async function gatherQuizzes(ownedQuizzes, userTakenQuizzes, userAllQuizzes) {
  try {
    let yourQuizzes = ownedQuizzes;
    let allQuizzes = userAllQuizzes;
    let takenQuizzes = userTakenQuizzes;
    let result = [];

    if (yourQuizzes.length > 0) {
      result.push(
        <div className="row align-items-center mt-5 mb-2">
          <h1 className="font-weight-bold col-12">Quizzes You Made</h1>
        </div>
      );
      for (let yourQuiz in yourQuizzes) {
        result.push(
          <Form.Group
            className="col-12"
            controlId={yourQuizzes[yourQuiz].id}
            key={yourQuizzes[yourQuiz].title}
          >
            <Form.Check id={yourQuizzes[yourQuiz].id}></Form.Check>
            <QuizStatsBox
              title={yourQuizzes[yourQuiz].title}
              author={yourQuizzes[yourQuiz].ownerUsername}
              id={yourQuizzes[yourQuiz].id}
            />
          </Form.Group>
        );
      }
    }
    if (takenQuizzes.length > 0) {
      result.push(
        <div className="row align-items-center mt-5 mb-2">
          <h1 className="font-weight-bold col-12">Quizzes You've Taken</h1>
        </div>
      );
      for (let takenQuiz in takenQuizzes) {
        //TODO TEST: MIGHT BE quizID not .id
        result.push(
          <Form.Group
            className="col-12"
            controlId={takenQuizzes[takenQuiz].id}
            key={takenQuizzes[takenQuiz].title}
          >
            <Form.Check id={takenQuizzes[takenQuiz].id}></Form.Check>
            <QuizStatsBox
              title={takenQuizzes[takenQuiz].title}
              author={takenQuizzes[takenQuiz].ownerUsername}
              id={takenQuizzes[takenQuiz].id}
            />
          </Form.Group>
          // <div className="col-12" onClick={saveSelectedQuiz(allQuizzes[aQuiz])}>
          //   <QuizStatsBox
          //     title={takenQuizzes[takenQuiz].title}
          //     author={takenQuizzes[takenQuiz].ownerUsername}
          //     id={takenQuizzes[takenQuiz].id}
          //   />
          // </div>
        );
      }
    }

    result.push(
      <div className="row align-items-center mt-5 mb-2">
        <h1 className="font-weight-bold col-12">All Quizzes</h1>
      </div>
    ); //TODO: saveSelected
    for (let aQuiz in allQuizzes) {
      result.push(

        <Form.Group
          className="col-12"
          controlId={allQuizzes[aQuiz].id}
          key={allQuizzes[aQuiz].title}
        >
          <Form.Check id={allQuizzes[aQuiz].id}></Form.Check>
          <QuizStatsBox
            title={allQuizzes[aQuiz].title}
            author={allQuizzes[aQuiz].ownerUsername}
            id={allQuizzes[aQuiz].id}
          />
        </Form.Group>
        // <div className="col-12"
        // onClick={saveSelectedQuiz(allQuizzes[aQuiz])}>
        //   <QuizStatsBox
        //     title={allQuizzes[aQuiz].title}
        //     author={allQuizzes[aQuiz].ownerUsername}
        //     id={allQuizzes[aQuiz].id}
        //   />
        // </div>
      );
    }
    return result;
  } catch (e) {
    //there was an error, so print it
    console.log(e);
    return [];
  }
}

/** This function loads a group page and returns the formatted html to display the page.
 *
 * @returns the group page with the specified ID
 */
function GroupPage() {
  let info = useParams();
  let groupID = info.id;
  const [toggleVal, setToggleVal] = useState(1);
  const [showQuizzes, setShowQuizzes] = useState(false);
  const [quizIDSelectedForStats, setQuizIDSelectedForStats] = useState(null);

  const [
    group,
    groupImage,
    error,
    loading,
    user,
    userGroups,
    userOwnedQuizzes,
    userTakenQuizzes,
    allQuizzes,
    groupQuizzes,
    setGroupQuizzes,
    quizSearchElement,
  ] = useGatherResources(groupID);
  const handleClose = () => {
    setShowQuizzes(false);
  };
  const [loading4, setLoading4] = useState(true);

  // const useHandleShowQuizzes = async () => {
  //   let res = await gatherQuizzes(user, setLoading4);//HERE
  //   setShowQuizzes(true);
  // };
  //TODO: do i need await here?
  //console.log(userGroups);
  let userB = userButton(groupID, user, userGroups);
  if (error) return failToLoad();
  return loading ? (
    Loading()
  ) : (
    <div className="group-page">
      <div className="row m-0">
        <img
          className="col-4 mb-5 px-0"
          src={groupImage}
          alt=""
          width="100%"
          height="325vh"
        />
        <div className="description col-8 mb-5 py-5 px-0 bg-dark-grey">
          <h1 className="px-5 text-light">
            {group.name}
            {userB}
          </h1>
          <p className="px-5 text-light">{group.bio}</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="quizzes col-3">
            <div className="row mb-3">
              <DropdownButton
                className="col-auto"
                id="dropdown-basic-button"
                title="Filter"
                variant="outline-primary"
              >
                <Dropdown.Item href="#/action-1">New Quizzes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Popular Quizzes</Dropdown.Item>
                <Dropdown.Item href="#/action-3">All Quizzes</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Quizzes Taken</Dropdown.Item>
              </DropdownButton>

              {generateAddQuizButton(setShowQuizzes)}
            </div>
            {displayQuizElements(groupQuizzes, setQuizIDSelectedForStats)}
          </div>
          <div className="stats-compare col-6">
            <div className="mb-3 align-items-center d-flex justify-content-center">
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton
                  id="tbg-group-stats"
                  value={1}
                  variant="outline-primary"
                  onClick={() => setToggleVal(1)}
                >
                  Group Stats
                </ToggleButton>
                <ToggleButton
                  id="tbg-compare-results"
                  value={2}
                  variant="outline-primary"
                  onClick={() => setToggleVal(2)}
                >
                  Compare Results
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div>
              {handleStatsToggle(
                group,
                quizIDSelectedForStats,
                user,
                toggleVal
              )}
            </div>
          </div>
          <div className="members col-3">
            <div className="row mb-3">
              <Button variant="invisible" disabled>
                x
              </Button>{" "}
            </div>
            <MembersList group={group} />
          </div>
        </div>
      </div>

      <div>
        <Modal show={showQuizzes} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Quiz to Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              id="add-quizzes-form"
              //let res = await addQuizToGroup(target.id, group.groupID);

              onSubmit={async (event) => {
                let groupQuizzesID = new Set();
                for(let i = 0; i < groupQuizzes.length; i++){
                  groupQuizzesID.add(groupQuizzes[i].id);
                }
                //addQuizzes
                event.preventDefault();
                let target = event.target;
                let updatedGroupQuizzes = groupQuizzes;
                for (let i = 0; i < target.length; i++) {
                  // if quiz is checked, add it to the group
                  if (event.target[i].checked) {
                    if(groupQuizzesID.has(target[i].id)){
                      continue;
                    }
                    let res = await addQuizToGroup(target[i].id, groupID);
                    console.log("Adding quiz to group:");
                    console.log(res);
                    let tempQuiz = await getQuiz(target[i].id);
                    updatedGroupQuizzes.push(tempQuiz);
                  }
                }
                setGroupQuizzes(updatedGroupQuizzes);
                handleClose();
              }}
            >
              {quizSearchElement}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button form="add-quizzes-form" variant="primary" type="submit">
              Add Quiz
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default GroupPage;
