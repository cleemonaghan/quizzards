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
} from "react-bootstrap";
import {
  MembersList,
  QuizStatsBox,
  StatsBox,
  CompareBox,
  PickAQuiz,
  failToLoad,
  Loading,
  QuizBox,
} from "../components";

import { getGroup, getGroupsQuizzes } from "../databaseFunctions/groups";
import {
  getUserOwnedGroups,
  getUserOwnedQuizzes,
} from "../databaseFunctions/users.js";
import { getQuiz, listAllQuizzes } from "../databaseFunctions/quizzes.js";
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
  const [quizzes, setQuizzes] = useState([]);

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
      //get quizzes
      res = await getGroupsQuizzes(groupID);
      setQuizzes(res);
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

  return [group, groupImage, error, loading, user, userGroups, quizzes];
}

function userButton(groupID, user, userGroups) {
  console.log("group ID", groupID);
  console.log("userGroups", userGroups);
  console.log("userGroups length", userGroups.length);
  let myGroup = false;

  for (let i = 0; i < userGroups.length; i++) {
    console.log(userGroups[i]);
    let group = userGroups[i].id;
    console.log(groupID);

    if (groupID == group) {
      myGroup = true;
      break;
    }
  }

  var result = [];

  console.log(myGroup);

  if (myGroup) {
    result.push(
      <Link to={{ pathname: "/groupEdit/" + groupID }}>
        <PencilSquare className="p-2" color="white" />{" "}
      </Link>
    );
  }
  console.log(result);
  return result;
}
/* 
This function displays the group stats, pick a quiz for stats, 
and compare your stats components based on if a quiz is selected
and what side the toggle menu is on
 */
function handleStatsToggle(quizID, indexOfToggle) {
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
          <StatsBox />
        </div>
      );
    } else if (indexOfToggle === 2) {
      //compare stats
      return (
        <div>
          <CompareBox />
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
function displayQuizElements(quizzes) {
  console.log(quizzes);
  if (quizzes === undefined || quizzes.length < 1) {
    return <p>This group has no quizzes yet</p>;
  } else {
    var result = [];
    for (let i = 0; i < quizzes.length; i++) {
      let quiz = quizzes[i]; //title,author,ID
      result.push(
        <div className="col-4 mb-4" key={i}>
          <QuizStatsBox
            title={quiz.title}
            author={quiz.author}
            groupID={quiz.quizID}
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
  //TODO:check if they are member
  if (true) {
    return (
      <div>
        <Button variant="outline-primary" onClick={showQuizzes}>
          Add Quiz +
        </Button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
/*  
async function gatherQuizzes(username, setLoading, setQuizzes) {
  try {
    setLoading(true);
    let yourQuizList = (await getUser(username)).quizOwners;
    let allQuizzes = await listAllQuizzes();
    let result = [];
    for (let yourQuiz in yourQuizList) {
      let match = false;
      for (let mem in memberList) {
        if (memberList[mem].name === yourQuizList[yourQuiz]) {
          match = true;
          break;
        }
      }
      if (!match) {
        let image = await getUserImage(friendList[friend]);
        result.push({
          name: friendList[friend],
          image: image,
        });
      }
    }
    setFriends(result);
  } catch (e) {
    //there was an error, so print it
    console.log(e);
  } finally {
    //we are finished loading, so set loading to false
    setLoading(false);
  }

  return true;
}
*/
/*  */
function displayModalBody(loading, quizzesToAdd) {
  if (loading) return <p>loading...</p>;
  else {
    let list = [];
    for (let i in quizzesToAdd) {
      list.push(
        <Form.Group
          className="row"
          controlId={quizzesToAdd[i].title}
          key={quizzesToAdd[i].title}
        >
          <Form.Check id={quizzesToAdd[i].quizID}></Form.Check>
          <QuizBox
            title={quizzesToAdd[i].title}
            author={quizzesToAdd[i].author}
            id={quizzesToAdd[i].quizID}
          />
        </Form.Group>
      );
    }
    if (list.length < 1) {
      return <p>There are no quizzes to add to the group!</p>;
    }
    return <div>{list}</div>;
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
  const [quizIDSelected, setQuizIDSelected] = useState(null);
  const [showQuizzes, setShowQuizzes] = useState(false);
  const [group, groupImage, error, loading, user, userGroups, quizzes] =
    useGatherResources(groupID);
  const handleClose = () => {
    setShowQuizzes(false);
  };
  const [loading4, setLoading4] = useState(true);
  const useHandleShowQuizzes = async () => {
    //let res = await gatherQuizzes(username, setLoading4, setQuizzes);
    setShowQuizzes(true);
  };
  const addQuizButton = generateAddQuizButton(useHandleShowQuizzes);
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

              {generateAddQuizButton}
            </div>
            {displayQuizElements(quizzes)}
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
            <div>{handleStatsToggle(quizIDSelected, toggleVal)}</div>
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
        {/* * Modal for adding qu to the Group
        <Modal show={showQuizzes} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Quizzes to Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              id="member-form"
              onSubmit={async (event) => {
                //addMembers
                event.preventDefault();
                let target = event.target;
                for (let i = 0; i < friends.length; i++) {
                  // if friend is checked, add them to the group
                  if (event.target[i].checked) {
                    let res = await addMemberToGroup(
                      target[i].id,
                      params.group.id
                    );
                    console.log("Adding member to group:");
                    console.log(res);
                  }
                }
                // update the members list
                let res = await getGroup(params.group.id);
                console.log("Fetched group:");
                console.log(res);
                refreshMembers(
                  ownerUsername,
                  res.members.items,
                  res.memberRequests.items,
                  setMembers,
                  setMemberRequests
                );
                handleClose();
              }}
            >
              {displayModalBody(loading4, friends)}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button form="member-form" variant="primary" type="submit">
              Add Quizes
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
  );
}

export default GroupPage;

//OLD VERSION:
// import React, { useState, useEffect } from "react";
// import { Auth, Storage } from "aws-amplify";
// import { Link, useParams } from "react-router-dom";
// import { PencilSquare } from "react-bootstrap-icons";
// import {
//   Dropdown,
//   DropdownButton,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   Container,
// } from "react-bootstrap";
// import {
//   MembersList,
//   QuizStatsBox,
//   StatsBox,
//   CompareBox,
//   PickAQuiz,
//   failToLoad,
//   Loading,
//   QuizBox,
// } from "../components";

// import { getGroup, getGroupsQuizzes } from "../databaseFunctions/groups";
// import { getUserOwnedGroups } from "../databaseFunctions/users.js";
// import { getQuiz } from "../databaseFunctions/quizzes.js";
// /** This function gathers the resources necessary to load the group page.
//  *
//  * @param {String} groupID the id of the group to load
//  * @returns an array containing a json of the group, the groupImage, the error status, and the loading status
//  */
// function useGatherResources(groupID) {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [group, setGroup] = useState(null);
//   const [groupImage, setGroupImage] = useState(null);
//   const [user, setUser] = useState(null);
//   const [userGroups, setUserGroups] = useState([]);
//   const [quizzes, setQuizzes] = useState([]);

//   /** This function is called upon initialization to fetch all the
//    * information essential to displaying the page. Once all the
//    * information is gathered, it sets the loading state var to false
//    * so that the component will re-render with the information.
//    */
//   async function getInfo() {
//     try {
//       setLoading(true);
//       //get the group
//       let res = await getGroup(groupID);
//       setGroup(res);
//       //get the group image
//       res = await Storage.get(res.profilePicture);
//       setGroupImage(res);
//       //get quizzes
//       res = await getGroupsQuizzes(groupID);
//       setQuizzes(res);
//       //get the user
//       res = await Auth.currentAuthenticatedUser();
//       setUser(res.username);
//       //get the user groups

//       console.log(res.username);
//       res = await getUserOwnedGroups(res.username);
//       console.log(res);
//       setUserGroups(res);
//     } catch (e) {
//       //there was an error, so save it
//       setError(e);
//     } finally {
//       //we are finished loading, so set loading to false
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getInfo();
//   }, []);

//   return [group, groupImage, error, loading, user, userGroups, quizzes];
// }

// function userButton(groupID, user, userGroups) {
//   console.log("group ID", groupID);
//   console.log("userGroups", userGroups);
//   console.log("userGroups length", userGroups.length);
//   let myGroup = false;

//   for (let i = 0; i < userGroups.length; i++) {
//     console.log(userGroups[i]);
//     let group = userGroups[i].id;
//     console.log(groupID);

//     if (groupID == group) {
//       myGroup = true;
//       break;
//     }
//   }

//   var result = [];

//   console.log(myGroup);

//   if (myGroup) {
//     result.push(
//       <Link to={{ pathname: "/groupEdit/" + groupID }}>
//         <PencilSquare className="p-2" color="white" />{" "}
//       </Link>
//     );
//   }
//   console.log(result);
//   return result;
// }
// /*
// This function displays the group stats, pick a quiz for stats,
// and compare your stats components based on if a quiz is selected
// and what side the toggle menu is on
//  */
// function handleStatsToggle(quizID, indexOfToggle) {
//   if (quizID === null) {
//     return (
//       <div>
//         <PickAQuiz />
//       </div>
//     );
//   } else {
//     if (indexOfToggle === 1) {
//       //group stats
//       return (
//         <div>
//           <StatsBox />
//         </div>
//       );
//     } else if (indexOfToggle === 2) {
//       //compare stats
//       return (
//         <div>
//           <CompareBox />
//         </div>
//       );
//     } else {
//       return <div></div>; //should never reach this
//     }
//   }
// }
// //todo: invite button as group owner: for pop up window.....quizzes, addQuiz to group
// //create new function...createquizto group
// //groups folder
// /*
// This function creates and returns the list of quizzes
// associated with the group in the format to be displayed
// on the left side of the page
//  */
// function displayQuizElements(quizzes) {
//   console.log(quizzes);
//   if (quizzes === undefined || quizzes.length < 1) {
//     return <p>This group has no quizzes yet</p>;
//   } else {
//     var result = [];
//     for (let i = 0; i < quizzes.length; i++) {
//       let quiz = quizzes[i]; //title,author,ID
//       result.push(
//         <div className="col-4 mb-4" key={i}>
//           <QuizStatsBox
//             title={quiz.title}
//             author={quiz.author}
//             groupID={quiz.quizID}
//           />
//         </div>
//       );
//     }
//     return result;
//   }
// }
// /** This function loads a group page and returns the formatted html to display the page.
//  *
//  * @returns the group page with the specified ID
//  */
// function GroupPage() {
//   let info = useParams();
//   let groupID = info.id;
//   const [toggleVal, setToggleVal] = useState(1);
//   const [quizIDSelected, setQuizIDSelected] = useState(null);
//   const [group, groupImage, error, loading, user, userGroups, quizzes] =
//     useGatherResources(groupID);

//   //TODO: do i need await here?
//   //console.log(userGroups);
//   let userB = userButton(groupID, user, userGroups);
//   if (error) return failToLoad();
//   return loading ? (
//     Loading()
//   ) : (
//     <div className="group-page">
//       <div className="row m-0">
//         <img
//           className="col-4 mb-5 px-0"
//           src={groupImage}
//           alt=""
//           width="100%"
//           height="325vh"
//         />
//         <div className="description col-8 mb-5 py-5 px-0 bg-dark-grey">
//           <h1 className="px-5 text-light">
//             {group.name}
//             {userB}
//           </h1>
//           <p className="px-5 text-light">{group.bio}</p>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="quizzes col-3">
//             <div className="row mb-3">
//               <DropdownButton
//                 className="col-auto"
//                 id="dropdown-basic-button"
//                 title="Filter"
//                 variant="outline-primary"
//               >
//                 <Dropdown.Item href="#/action-1">New Quizzes</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Popular Quizzes</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">All Quizzes</Dropdown.Item>
//                 <Dropdown.Item href="#/action-4">Quizzes Taken</Dropdown.Item>
//               </DropdownButton>

//               <Link className="col-5" to="/createQuiz">
//                 <Button variant="outline-primary">Add Quiz +</Button>{" "}
//               </Link>
//             </div>

//             {/* <QuizStatsBox
//               title="This is a sample title for a quiz"
//               author="Author"
//             />
//             <QuizStatsBox
//               title="This is a sample title for a quiz"
//               author="Author"
//             />
//             <QuizStatsBox
//               title="This is a sample title for a quiz"
//               author="Author"
//             />
//             <QuizStatsBox
//               title="This is a sample title for a quiz"
//               author="Author"
//             />
//             <QuizStatsBox
//               title="This is a sample title for a quiz"
//               author="Author"
//             /> */}
//             {displayQuizElements(quizzes)}
//           </div>
//           <div className="stats-compare col-6">
//             <div className="mb-3 align-items-center d-flex justify-content-center">
//               <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
//                 <ToggleButton
//                   id="tbg-group-stats"
//                   value={1}
//                   variant="outline-primary"
//                   onClick={() => setToggleVal(1)}
//                 >
//                   Group Stats
//                 </ToggleButton>
//                 <ToggleButton
//                   id="tbg-compare-results"
//                   value={2}
//                   variant="outline-primary"
//                   onClick={() => setToggleVal(2)}
//                 >
//                   Compare Results
//                 </ToggleButton>
//               </ToggleButtonGroup>
//             </div>
//             <div>{handleStatsToggle(quizIDSelected, toggleVal)}</div>
//           </div>
//           <div className="members col-3">
//             <div className="row mb-3">
//               <Button variant="invisible" disabled>
//                 x
//               </Button>{" "}
//             </div>
//             <MembersList group={group} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GroupPage;
