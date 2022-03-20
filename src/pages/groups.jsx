import React from "react";
import { GroupBox , failToLoad, Loading} from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

import { getUserGroups } from "../databaseFunctions/users.js";

import { Auth, Storage } from "aws-amplify";
import { getGroup } from "../databaseFunctions/groups";

class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      groupElements: null,
      error: null,
      loading: true,
    };
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
      const yourGroups = await this.fetchYourGroups(username);

      // set the state with the user info
      this.setState({
        username: username,
      });

      //update with the user's groups
      this.setState({ groupElements: yourGroups });

      //update with the user's recommended groups

    } catch (err) {
      this.setState({ error: err });
    } finally {
      //we are done loading, so set loading to false
      this.setState({ loading: false });
    }
  }

  /** This method fetches and returns the list of groups that the user is in
   * formatted in html form.
   *
   * @param {String} username the user's username
   * @returns a list of the html for each of their groups
   */
  async fetchYourGroups(username) {
    const groupArr = await getUserGroups(username);
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

  render() {
    if (this.state.error) return failToLoad();
    return this.state.loading ? (
      Loading()
    ) : (
      <div className="groups">
        <div className="container">
          <div className="row">
            <div className="col-8 mt-5 mb-4">
              <MDBCol>
                <MDBInput
                  hint="Search Groups"
                  type="text"
                  containerClass="active-pink active-pink-2 mt-0 mb-3"
                  variant="outline-primary"
                  size="lg"
                />
              </MDBCol>
            </div>
            <div className="col-1"></div>
            <div className="col-3 mt-5 mb-4 float-end">
              <Link to="/createGroup">
                <Button variant="outline-primary" size="lg">
                  Create New Group +
                </Button>{" "}
              </Link>
            </div>
          </div>
          {/* Display the user's groups */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Your Groups</h1>
          </div>
          <div className="row">{this.state.groupElements}</div>

          {/* Display the user's recommended groups */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold">Suggested Groups</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo13} name="Hogwarts" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo14} name="Puppies" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo15} name="Astronomy" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo16} name="Candy" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo17} name="Books" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo13} name="Hogwarts" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo14} name="Puppies" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo15} name="Astronomy" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo16} name="Candy" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <GroupBox link={photo17} name="Books" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Groups;
