import React, { Fragment, useState, useEffect } from "react";
import Media from "react-media";
import { useParams } from "react-router-dom";
import { Storage } from "aws-amplify";
import {
  getUser,
  getUserOwnedGroups,
  getUserOwnedQuizzes,
} from "../databaseFunctions/users";
import { failToLoad, Loading } from "../components";
import { getGroup } from "../databaseFunctions/groups";
import { Link } from "react-router-dom";
import { QuizBox } from "../components";
import GroupBox from "../components/groupBox";

function useGatherResources(username) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [quizElements, setQuizElems] = useState(null);
  const [groupElements, setGroupElems] = useState(null);

  /** This function is called upon initialization to fetch all the
   * information essential to displaying the page. Once all the
   * information is gathered, it sets the loading state var to false
   * so that the component will re-render with the information.
   */
  async function getInfo() {
    try {
      setLoading(true);
      //get the group
      let res = await getUser(username);
      let temp = res;
      console.log(temp);
      setUser(temp);
      //get the group image
      res = await Storage.get(res.profilePicture);
      setUserImage(res);

      //get the user Quizzes
      res = await getUserOwnedQuizzes(username);
      let tempQuizzes = res;
      //get the user Groups
      res = await getUserOwnedGroups(username);
      let tempGroups = res;

      res = await displayUserQuizzes(tempQuizzes, username);
      setQuizElems(res);

      res = await displayUserGroups(tempGroups, username);
      setGroupElems(res);
    } catch (e) {
      //there was an error, so save it
      console.log("there was an error: ");
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

  return [user, userImage, quizElements, groupElements, error, loading];
}

async function displayUserQuizzes(quizArr, username) {
  //if they have made no quizzes return a message
  console.log(username);
  if (quizArr === undefined || quizArr.length < 1) {
    return <p>{username} has made no quizzes. </p>;
  } else {
    //for each quiz we are in, fetch the quiz and add it to the result array
    var result = [];
    for (let i = 0; i < quizArr.length; i++) {
      result.push(
        <Media
          queries={{
            mobile: "(max-width: 575px)",
            tablet: "(min-width: 576px) and (max-width: 999px)",
            wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
            desktop: "(min-width: 1200px)",
          }}
          key={i}
        >
          {(matches) => (
            <Fragment>
              {matches.mobile && (
                <div className="col-12" key={i}>
                  <QuizBox
                    title={quizArr[i].title}
                    author={quizArr[i].ownerUsername}
                    id={quizArr[i].id}
                  />
                </div>
              )}
              {matches.tablet && (
                <div className="col-6" key={i}>
                  <QuizBox
                    title={quizArr[i].title}
                    author={quizArr[i].ownerUsername}
                    id={quizArr[i].id}
                  />
                </div>
              )}
              {matches.wideTablet && (
                <div className="col-4" key={i}>
                  <QuizBox
                    title={quizArr[i].title}
                    author={quizArr[i].ownerUsername}
                    id={quizArr[i].id}
                  />
                </div>
              )}
              {matches.desktop && (
                <div className="col-3" key={i}>
                  <QuizBox
                    title={quizArr[i].title}
                    author={quizArr[i].ownerUsername}
                    id={quizArr[i].id}
                  />
                </div>
              )}
            </Fragment>
          )}
        </Media>
      );
    }
  }
  return result;
}

async function displayUserGroups(groupArr, username) {
  //if they have made no quizzes return a message
  console.log(username);
  if (groupArr === undefined || groupArr.length < 1) {
    return <p>{username} has made no groups. </p>;
  } else {
    //for each quiz we are in, fetch the quiz and add it to the result array
    var result = [];
    for (let i = 0; i < groupArr.length; i++) {
      let group = await getGroup(groupArr[i].id);
      let groupImage = await Storage.get(group.profilePicture);
      result.push(
        <Media
          queries={{
            mobile: "(max-width: 575px)",
            tablet: "(min-width: 576px) and (max-width: 999px)",
            wideTablet: "(min-width: 1000px) and (max-width: 1199px)",
            desktop: "(min-width: 1200px)",
          }}
          key={i}
        >
          {(matches) => (
            <Fragment>
              {matches.mobile && (
                <div className="col-12" key={i}>
                  <GroupBox
                    link={groupImage}
                    name={group.name}
                    groupID={groupArr[i].id}
                  />
                </div>
              )}
              {matches.tablet && (
                <div className="col-6" key={i}>
                  <GroupBox
                    link={groupImage}
                    name={group.name}
                    groupID={groupArr[i].id}
                  />
                </div>
              )}
              {matches.wideTablet && (
                <div className="col-4" key={i}>
                  <GroupBox
                    link={groupImage}
                    name={group.name}
                    groupID={groupArr[i].id}
                  />
                </div>
              )}
              {matches.desktop && (
                <div className="col-3" key={i}>
                  <GroupBox
                    link={groupImage}
                    name={group.name}
                    groupID={groupArr[i].id}
                  />
                </div>
              )}
            </Fragment>
          )}
        </Media>
      );
    }
  }
  return result;
}

function ViewProfile() {
  let info = useParams();
  const username = info.username;

  const [user, userImage, quizElements, groupElements, error, loading] =
    useGatherResources(username);

  if (error) return failToLoad();
  return loading ? (
    Loading()
  ) : (
    <div className="profile">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="col-11">Profile</h1>
        </div>
        <div className="row align-items-center mb-2">
          <Media
            queries={{
              mobile: "(max-width: 575px)",
              other: "(min-width: 576px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.mobile && (
                  <div className="col-2">
                    <img
                      id="profile_pic_display"
                      className="img-fluid rounded-circle my-auto"
                      src={userImage}
                      alt=""
                    />
                  </div>
                )}
                {matches.other && (
                  <div className="col-1">
                    <img
                      id="profile_pic_display"
                      className="img-fluid rounded-circle my-auto"
                      src={userImage}
                      alt=""
                    />
                  </div>
                )}
              </Fragment>
            )}
          </Media>
          <h3 className="font-weight-light col-3 my-auto">{username}</h3>
        </div>

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
                <div>
                  <div className="row">
                    <h4 className="col-3">Name:</h4>
                    <h4 className="col-9 ps-0">{user.name}</h4>
                  </div>
                  <div className="row">
                    <h4 className="col-3">Bio:</h4>
                    <h4 className="col-9 ps-0">{user.bio}</h4>
                  </div>

                  <div className="row align-items-center m-0 mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Groups</h1>
                  </div>
                  <div className="row col-12 m-0">
                    {/* Display the user's groups */}
                    {groupElements}
                  </div>
                  <div className="row align-items-center m-0 mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Quizzes</h1>
                  </div>
                  <div className="row col-12 m-0">
                    {/* Display the user's groups */}
                    {quizElements}
                  </div>
                </div>
              )}
              {matches.tablet && (
                <div>
                  <div className="row">
                    <h4 className="col-1">Name:</h4>
                    <h4 className="col-11 ps-5">{user.name}</h4>
                  </div>
                  <div className="row">
                    <h4 className="col-1">Bio:</h4>
                    <h4 className="col-11 ps-5">{user.bio}</h4>
                  </div>

                  <div className="row align-items-center mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Groups</h1>
                  </div>
                  <div className="row col-12">
                    {/* Display the user's groups */}
                    {groupElements}
                  </div>
                  <div className="row align-items-center mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Quizzes</h1>
                  </div>
                  <div className="row col-12">
                    {/* Display the user's groups */}
                    {quizElements}
                  </div>
                </div>
              )}
              {matches.wideTablet && (
                <div>
                  <div className="row">
                    <h4 className="col-1">Name:</h4>
                    <h4 className="col-11 ps-4">{user.name}</h4>
                  </div>
                  <div className="row">
                    <h4 className="col-1">Bio:</h4>
                    <h4 className="col-11 ps-4">{user.bio}</h4>
                  </div>

                  <div className="row align-items-center mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Groups</h1>
                  </div>
                  <div className="row col-12">
                    {/* Display the user's groups */}
                    {groupElements}
                  </div>
                  <div className="row align-items-center mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Quizzes</h1>
                  </div>
                  <div className="row col-12">
                    {/* Display the user's groups */}
                    {quizElements}
                  </div>
                </div>
              )}
              {matches.desktop && (
                <div>
                  <div className="row">
                    <h4 className="col-1">Name:</h4>
                    <h4 className="col-11 ps-0">{user.name}</h4>
                  </div>
                  <div className="row">
                    <h4 className="col-1">Bio:</h4>
                    <h4 className="col-11 ps-0">{user.bio}</h4>
                  </div>

                  <div className="row align-items-center mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Groups</h1>
                  </div>
                  <div className="row col-12">
                    {/* Display the user's groups */}
                    {groupElements}
                  </div>
                  <div className="row align-items-center mt-5 mb-2">
                    <h1 className="font-weight-bold">{user.name}'s Quizzes</h1>
                  </div>
                  <div className="row col-12">
                    {/* Display the user's groups */}
                    {quizElements}
                  </div>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </div>
  );
}

export default ViewProfile;
