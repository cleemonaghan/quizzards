import React from "react";
import { GroupBox, failToLoad, Loading } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

import { getUser, getUserGroups } from "../databaseFunctions/users.js";

import { Auth, Storage } from "aws-amplify";
import {
  getGroup,
  getGroups,
  recommendGroups,
} from "../databaseFunctions/groups";

class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      groupElements: null,
      recommendationElements: null,
      error: null,
      loading: true,
      searchBar: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /** This method initalizes the state of the Group component.
   *
   *  This method fetches the user's username and profile picture
   *  and initializes their values in the component's state.
   */
  async componentDidMount() {
    try {
      //get the user information
      const response = await Auth.currentAuthenticatedUser();
      const username = response.username;
      const groupArr = await getUserGroups(username);
      const yourGroups = await this.fetchYourGroups(groupArr);
      const yourRecommendations = await this.fetchRecommendedGroups(
        username,
        groupArr
      );

      // set the state with the user info
      this.setState({
        username: username,
      });

      //update with the user's groups and user's recommended groups
      this.setState({
        groupElements: yourGroups,
        recommendationElements: yourRecommendations,
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: err });
    } finally {
      //we are done loading, so set loading to false
      this.setState({ loading: false });
    }
  }

  /** This method fetches and returns the list of groups that the user is in
   * formatted in html form.
   *
   * @param {JSON} groupArr the user's profile data
   * @returns a list of the html for each of their groups
   */
  async fetchYourGroups(groupArr) {
    // if there are no groups,
    if (groupArr === undefined || groupArr.length < 1) {
      return <p>You have no groups</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < groupArr.length; i++) {
        let group = await getGroup(groupArr[i].groupID);
        let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <GroupBox
              link={groupImage}
              name={group.name}
              groupID={groupArr[i].groupID}
            />
          </div>
        );
      }
      return result;
    }
  }

  /** This method fetches and returns the list of recommended groups for the user
   * formatted in html form.
   *
   * @param {JSON} groupArr the user's profile data
   * @returns a list of the html for each of their recommended groups
   */
  async fetchRecommendedGroups(username, groupArr) {
    let friendList = (await getUser(username)).friends;
    let recommendations = await recommendGroups(friendList, groupArr);

    // if there are no groups,
    if (recommendations === undefined || recommendations.length < 1) {
      console.log("no groups");
      return this.fetchGroups(username);
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i = 0; i < recommendations.length; i++) {
        let group = await getGroup(recommendations[i]);
        let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <GroupBox
              link={groupImage}
              name={group.name}
              groupID={recommendations[i]}
            />
          </div>
        );
      }
      return result;
    }
  }

  async fetchGroups(username) {
    var groupData = await getGroups();
    //var yourGroups = await getUserGroups(username);
    var allGroups = groupData.items;

    var result = [];

    for (let i = 0; i < allGroups.length; i++) {
      let group = allGroups[i];
      if (group.ownerUsername === username) {
        continue;
      }
      let groupImage = await Storage.get(group.profilePicture);
      result.push(
        <div className="col-lg-3 col-sm-6" key={i}>
          <GroupBox link={groupImage} name={group.name} groupID={group.id} />
        </div>
      );
    }

    return result;
  }

  async getGroupBySearch(substr) {
    var groupData = await getGroups();
    var allGroups = groupData.items;
    var result = [];
    for (let i = 0; i < allGroups.length; i++) {
      let group = allGroups[i];
      if (group.name.toLowerCase().includes(substr.toLowerCase())) {
        let groupImage = await Storage.get(group.profilePicture);
        result.push(
          <div className="col-lg-3 col-sm-6" key={i}>
            <GroupBox link={groupImage} name={group.name} groupID={group.id} />
          </div>
        );
      }
    }
    if (result.length === 0) {
      return <p> No groups match your search</p>;
    }
    return result;
  }

  async handleChange(e) {
    if (e.target.value === "") {
      this.setState({ searchBar: [] });
    } else
      this.setState({ searchBar: await this.getGroupBySearch(e.target.value) });
  }

  render() {
    if (this.state.error) return failToLoad();
    return this.state.loading ? (
      Loading()
    ) : (
      <div className="groups mb-5">
        <div className="container">
          <div className="row">
            <div className="col-8 mt-5">
              <MDBCol>
                <MDBInput
                  hint="Search Groups"
                  className="form-control my-0 py-1"
                  type="text"
                  containerClass="active-pink active-pink-2 mt-0 mb-3"
                  variant="outline-primary"
                  size="lg"
                  onChange={this.handleChange}
                />
              </MDBCol>
            </div>

            <div className="col-3 mt-5 mb-4 float-end">
              <Link to="/createGroup">
                <Button variant="outline-primary" size="lg">
                  Create New Group +
                </Button>{" "}
              </Link>
            </div>
          </div>
          <div className="row">{this.state.searchBar}</div>
          {/* Display the user's groups */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Your Groups</h1>
          </div>
          <div className="row">{this.state.groupElements}</div>

          {/* Display the user's recommended groups */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Suggested Groups</h1>
          </div>
          <div className="row">{this.state.recommendationElements}</div>
        </div>
      </div>
    );
  }
}

export default Groups;
