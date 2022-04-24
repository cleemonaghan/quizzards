import React, { Fragment, useState, useEffect } from "react";
import Media from "react-media";
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
  JoinGroup,
  failToLoad,
  Loading,
} from "../components";

import {
  getGroup,
  getGroupsQuizzes,
  addQuizToGroup,
} from "../databaseFunctions/groups";
import {
  getUserGroups,
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
  const [isMember, setIsMember] = useState(false);
  const [showQuizzes, setShowQuizzes] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

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
      let groupFetched = await getGroup(groupID);
      setGroup(groupFetched);
      console.log(groupFetched);
      //get the group image
      let res = await Storage.get(groupFetched.profilePicture);
      setGroupImage(res);

      //get group quizzes
      res = await getGroupsQuizzes(groupID);
      //console.log(res);
      let groupQuizArr = [];
      for (let i = 0; i < res.length; i++) {
        let temp = await getQuiz(res[i].quizID);
        groupQuizArr.push(temp);
      }
      //console.log(groupQuizArr);
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

      //console.log(userOwned);
      //console.log(userTaken);
      // console.log(allQuizzesArr);
      //get form for all quizzes
      res = await gatherQuizzes(userOwned, userTaken, allQuizzesArr);
      setQuizSearchElement(res);
      console.log(username);
      let members = groupFetched.members;
      console.log(members);
      for (let x = 0; x < members.items.length; x++) {
        if (members.items[x].userID === username) {
          setIsMember(true);
          console.log("true is member");
        }
      }
    } catch (e) {
      //there was an error, so save itc
      console.log("error");
      console.log(e);
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
    isMember,
    setIsMember,
    showQuizzes,
    setShowQuizzes,
    showMembers,
    setShowMembers,
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
function handleStatsToggle(group, quizID, username, indexOfToggle, isMember) {
  if (!isMember) {
    return (
      <div>
        <JoinGroup />
      </div>
    );
  } else {
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
}
/* 
This function creates and returns the list of quizzes
associated with the group in the format to be displayed
on the left side of the page
 */
function displayQuizElements(
  groupQuizzes,
  currSelectedQuiz,
  setQuizIDSelectedForStats,
  setGroupQuizzes,
  username,
  owner,
  groupID
) {
  //console.log(groupQuizzes);
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
            owner={username == owner}
            groupID={groupID}
            groupQuizzes={groupQuizzes}
            setGroupQuizzes={setGroupQuizzes}
            currSelectedQuiz={currSelectedQuiz}
            setQuizIDSelectedForStats={setQuizIDSelectedForStats}
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
function generateAddQuizButton(showQuizzes, isMember) {
  //check if they are a member of the group
  if (isMember) {
    return (
      <Button
        className="col-auto"
        variant="outline-primary"
        onClick={() => showQuizzes(true)}
      >
        Add Quizzes +
      </Button>
    );
  } else {
    return (
      <Button variant="invisible" disabled>
        x
      </Button>
    );
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
        <div className="row align-items-center mb-2">
          <h1 className="font-weight-bold col-12">Quizzes You Made</h1>
        </div>
      );
      for (let yourQuiz in yourQuizzes) {
        result.push(
          <Form.Group
            className="row"
            controlId={yourQuizzes[yourQuiz].id}
            key={yourQuizzes[yourQuiz].title}
          >
            <Form.Check
              className="col-1"
              id={yourQuizzes[yourQuiz].id}
            ></Form.Check>
            <div className="col-11 ps-0">
              <QuizStatsBox
                title={yourQuizzes[yourQuiz].title}
                author={yourQuizzes[yourQuiz].ownerUsername}
                id={yourQuizzes[yourQuiz].id}
              />
            </div>
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
            className="row"
            controlId={takenQuizzes[takenQuiz].id}
            key={takenQuizzes[takenQuiz].title}
          >
            <Form.Check
              className="col-1"
              id={takenQuizzes[takenQuiz].id}
            ></Form.Check>
            <div className="col-11 ps-0">
              <QuizStatsBox
                title={takenQuizzes[takenQuiz].title}
                author={takenQuizzes[takenQuiz].ownerUsername}
                id={takenQuizzes[takenQuiz].id}
              />
            </div>
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
          className="row"
          controlId={allQuizzes[aQuiz].id}
          key={allQuizzes[aQuiz].title}
        >
          <Form.Check className="col-1" id={allQuizzes[aQuiz].id}></Form.Check>
          <div className="col-11 ps-0">
            <QuizStatsBox
              title={allQuizzes[aQuiz].title}
              author={allQuizzes[aQuiz].ownerUsername}
              id={allQuizzes[aQuiz].id}
            />
          </div>
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

function popUpMembers(setShowMembers) {
  console.log("pop up members");
  setShowMembers(true);
}

/** This function loads a group page and returns the formatted html to display the page.
 *
 * @returns the group page with the specified ID
 */
function GroupPage() {
  let info = useParams();
  let groupID = info.id;
  const [toggleVal, setToggleVal] = useState(1);
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
    isMember,
    setIsMember,
    showQuizzes,
    setShowQuizzes,
    showMembers,
    setShowMembers,
  ] = useGatherResources(groupID);
  const handleCloseQuizzes = () => {
    console.log("close thing");
    setShowQuizzes(false);
  };

  const handleCloseMembers = () => {
    console.log("close thing");
    setShowMembers(false);
  };

  const [loading4, setLoading4] = useState(true);

  //set button to leave group if they are not the owner

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
      <Media
        queries={{
          mobile: "(max-width: 575px)",
          tablet: "(min-width: 576px) and (max-width: 999px)",
          wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
          desktop: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.mobile && (
              <div className="row m-0">
                <img
                  className="col-12 mb-0 px-0"
                  src={groupImage}
                  alt=""
                  width="100%"
                  height="250vh"
                />
                <div className="description col-12 mb-4 py-4 px-0 bg-dark-grey">
                  <h1 className="px-4 text-light">
                    {group.name}
                    {userB}
                  </h1>
                  <p className="px-4 text-light">{group.bio}</p>
                </div>
              </div>
            )}
            {matches.tablet && (
              <div className="row m-0">
                <img
                  className="col-5 mb-4 px-0"
                  src={groupImage}
                  alt=""
                  width="100%"
                  height="250vh"
                />
                <div className="description col-7 mb-4 py-5 px-0 bg-dark-grey">
                  <h1 className="px-5 text-light">
                    {group.name}
                    {userB}
                  </h1>
                  <p className="px-5 text-light">{group.bio}</p>
                </div>
              </div>
            )}
            {matches.wideTablet && (
              <div className="row m-0">
                <img
                  className="col-5 mb-4 px-0"
                  src={groupImage}
                  alt=""
                  width="100%"
                  height="325vh"
                />
                <div className="description col-7 mb-4 py-5 px-0 bg-dark-grey">
                  <h1 className="px-5 text-light">
                    {group.name}
                    {userB}
                  </h1>
                  <p className="px-5 text-light">{group.bio}</p>
                </div>
              </div>
            )}
            {matches.desktop && (
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
            )}
          </Fragment>
        )}
      </Media>

      <div className="container">
        <Media
          queries={{
            mobile: "(max-width: 575px)",
            tablet: "(min-width: 576px) and (max-width: 999px)",
            wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
            desktop: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.mobile && (
                <div className="row">
                  <div className="align-items-end d-flex justify-content-end mb-4">
                    <Button
                      variant="member"
                      onClick={() => popUpMembers(setShowMembers)}
                    >
                      View Members
                    </Button>
                  </div>
                  <div className="stats-compare col-12">
                    <div className="mb-3 align-items-center d-flex justify-content-center">
                      <ToggleButtonGroup
                        type="radio"
                        name="options"
                        defaultValue={1}
                      >
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
                        toggleVal,
                        isMember
                      )}
                    </div>
                  </div>
                  <div className="quizzes col-12">
                    <div className="row mb-3 ms-0">
                      {generateAddQuizButton(setShowQuizzes, isMember)}
                    </div>
                    {displayQuizElements(
                      groupQuizzes,
                      quizIDSelectedForStats,
                      setQuizIDSelectedForStats,
                      setGroupQuizzes,
                      user,
                      group.ownerUsername,
                      groupID
                    )}
                  </div>
                </div>
              )}
              {matches.tablet && (
                <div className="row">
                  <div className="align-items-end d-flex justify-content-end mb-4">
                    <Button
                      variant="member"
                      onClick={() => popUpMembers(setShowMembers)}
                    >
                      View Members
                    </Button>
                  </div>
                  <div className="quizzes col-4">
                    <div className="row mb-3 ms-0">
                      {generateAddQuizButton(setShowQuizzes, isMember)}
                    </div>
                    {displayQuizElements(
                      groupQuizzes,
                      quizIDSelectedForStats,
                      setQuizIDSelectedForStats,
                      setGroupQuizzes,
                      user,
                      group.ownerUsername,
                      groupID
                    )}
                  </div>
                  <div className="stats-compare col-8">
                    <div className="mb-3 align-items-center d-flex justify-content-center">
                      <ToggleButtonGroup
                        type="radio"
                        name="options"
                        defaultValue={1}
                      >
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
                        toggleVal,
                        isMember
                      )}
                    </div>
                  </div>
                </div>
              )}
              {matches.wideTablet && (
                <div className="row">
                  <div className="align-items-end d-flex justify-content-end mb-4">
                    <Button
                      variant="member"
                      onClick={() => popUpMembers(setShowMembers)}
                    >
                      View Members
                    </Button>
                  </div>
                  <div className="quizzes col-4">
                    <div className="row mb-3 ms-0">
                      {generateAddQuizButton(setShowQuizzes, isMember)}
                    </div>
                    {displayQuizElements(
                      groupQuizzes,
                      quizIDSelectedForStats,
                      setQuizIDSelectedForStats,
                      setGroupQuizzes,
                      user,
                      group.ownerUsername,
                      groupID
                    )}
                  </div>
                  <div className="stats-compare col-8">
                    <div className="mb-3 align-items-center d-flex justify-content-center">
                      <ToggleButtonGroup
                        type="radio"
                        name="options"
                        defaultValue={1}
                      >
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
                        toggleVal,
                        isMember
                      )}
                    </div>
                  </div>
                </div>
              )}
              {matches.desktop && (
                <div className="row">
                  <div className="quizzes col-3">
                    <div className="row mb-3 ms-0">
                      {/* <DropdownButton
                      className="col-auto"
                      id="dropdown-basic-button"
                      title="Filter"
                      variant="outline-primary"
                    >
                      <Dropdown.Item href="#/action-1">New Quizzes</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Popular Quizzes</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">All Quizzes</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Quizzes Taken</Dropdown.Item>
                    </DropdownButton> */}

                      {generateAddQuizButton(setShowQuizzes, isMember)}
                    </div>
                    {displayQuizElements(
                      groupQuizzes,
                      quizIDSelectedForStats,
                      setQuizIDSelectedForStats,
                      setGroupQuizzes,
                      user,
                      group.ownerUsername,
                      groupID
                    )}
                  </div>
                  <div className="stats-compare col-6">
                    <div className="mb-3 align-items-center d-flex justify-content-center">
                      <ToggleButtonGroup
                        type="radio"
                        name="options"
                        defaultValue={1}
                      >
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
                        toggleVal,
                        isMember
                      )}
                    </div>
                  </div>
                  <div className="members col-3 mb-5">
                    <div className="row mb-3">
                      <Button variant="invisible" disabled>
                        x
                      </Button>{" "}
                    </div>
                    <MembersList
                      group={group}
                      isMember={isMember}
                      setMembership={setIsMember}
                    />
                  </div>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>

      <div>
        <Modal show={showMembers} onHide={handleCloseMembers}>
          <Modal.Header closeButton>
            <Modal.Title>Group Members</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="members">
              <MembersList
                group={group}
                isMember={isMember}
                setMembership={setIsMember}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal show={showQuizzes} onHide={handleCloseQuizzes}>
          <Modal.Header closeButton>
            <Modal.Title>Add Quizzes to Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              id="add-quizzes-form"
              //let res = await addQuizToGroup(target.id, group.groupID);

              onSubmit={async (event) => {
                let groupQuizzesID = new Set();
                for (let i = 0; i < groupQuizzes.length; i++) {
                  groupQuizzesID.add(groupQuizzes[i].id);
                }
                //addQuizzes
                event.preventDefault();
                let target = event.target;
                let updatedGroupQuizzes = groupQuizzes;
                for (let i = 0; i < target.length; i++) {
                  // if quiz is checked, add it to the group
                  if (event.target[i].checked) {
                    if (groupQuizzesID.has(target[i].id)) {
                      continue;
                    }
                    let res = await addQuizToGroup(target[i].id, groupID);
                    //console.log("Adding quiz to group:");
                    //console.log(res);
                    let tempQuiz = await getQuiz(target[i].id);
                    updatedGroupQuizzes.push(tempQuiz);
                  }
                }
                setGroupQuizzes(updatedGroupQuizzes);
                handleCloseQuizzes();
              }}
            >
              {quizSearchElement}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseQuizzes}>
              Close
            </Button>
            <Button form="add-quizzes-form" variant="primary" type="submit">
              Add Quizzes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default GroupPage;
