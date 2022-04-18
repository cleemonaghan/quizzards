import React from "react";
import { User, failToLoad, Loading } from "../components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Friends from "../pages/friends";

class FriendsList extends Friends {
  displayList(list, emptyMessage) {
    // if there are no groups,
    if (list.length < 1) {
      return <p>{emptyMessage}</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      list.forEach((element) => {
        result.push(
          <div key={element.username}>
            <User
              image={element.image}
              username={element.username}
              status={element.status}
              ourUser={this.state.username}
              lists={{
                friends: this.state.friends,
                friendReqs: this.state.friendReqs,
                outgoingFriendReqs: this.state.outgoingFriendReqs,
                recommendations: this.state.recommendations,
                update: this.setState,
              }}
            />
          </div>
        );
      });
      return result;
    }
  }
  render() {
    if (this.state.error) return failToLoad();
    else if (this.state.loading) return Loading();
    else {
      return (
        <div className="friends-list">
          {/* <Link to="/friends">
            <Button variant="outline-primary" size="lg">
              Search For Friends
            </Button>{" "}
          </Link> */}
          <h4 className="mb-2"> Friends: </h4>
          <div className="row">
            {this.displayList(this.state.friends, "You have no Friends")}
          </div>
          <hr />
          <h4 className="my-2"> Friend Requests: </h4>
          <h5 className="my-2"> Incoming: </h5>
          <div className="row">
            {this.displayList(
              this.state.friendReqs,
              "You have no Incoming Friend Requests"
            )}
          </div>
          <h5 className="my-2"> Outgoing: </h5>
          <div className="row">
            {this.displayList(
              this.state.outgoingFriendReqs,
              "You have no Outgoing Friend Requests"
            )}
          </div>
          <hr />
          <h4 className="my-2"> Suggested Friends: </h4>
          <div className="row">
            {this.displayList(
              this.state.recommendations,
              "You have no Recommendations"
            )}
          </div>
        </div>
      );
    }
  }
}

export default FriendsList;
