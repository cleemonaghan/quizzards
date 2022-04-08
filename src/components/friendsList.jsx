import React from "react";
import { User, failToLoad, Loading } from "../components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Friends from "../pages/friends";

class FriendsList extends Friends {
  displayFriends() {
    // if there are no groups,
    if (this.state.friends.length < 1) {
      return <p>You have no friends</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i in this.state.friends) {
        console.log(i + ") " + this.state.friends[i].username);
        result.push(
          <div key={i}>
            <User
              image={this.state.friends[i].image}
              username={this.state.friends[i].username}
              status={this.state.friends[i].status}
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
      }
      return result;
    }
  }

  displayFriendReqs() {
    // if there are no groups,
    if (this.state.friendReqs.length < 1) {
      return <p>You have no Incoming Friend Requests</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i in this.state.friendReqs) {
        console.log(i + ") " + this.state.friendReqs[i].username);
        result.push(
          <div key={i}>
            <User
              image={this.state.friendReqs[i].image}
              username={this.state.friendReqs[i].username}
              status={this.state.friendReqs[i].status}
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
      }
      return result;
    }
  }
  displayOutgoingFriendReqs() {
    // if there are no groups,
    if (this.state.outgoingFriendReqs.length < 1) {
      return <p>You have no Outgoing Friend Requests</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i in this.state.outgoingFriendReqs) {
        console.log(i + ") " + this.state.outgoingFriendReqs[i].username);
        result.push(
          <div key={i}>
            <User
              image={this.state.outgoingFriendReqs[i].image}
              username={this.state.outgoingFriendReqs[i].username}
              status={this.state.outgoingFriendReqs[i].status}
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
      }
      return result;
    }
  }

  displayRecommendations() {
    // if there are no groups,
    if (this.state.recommendations.length < 1) {
      return <p>You have no Recommendations</p>;
    } else {
      //for each group we are in, fetch the group and add it to the result array
      var result = [];
      for (let i in this.state.recommendations) {
        console.log(i + ") " + this.state.recommendations[i].username);
        result.push(
          <div key={i}>
            <User
              image={this.state.recommendations[i].image}
              username={this.state.recommendations[i].username}
              status={this.state.recommendations[i].status}
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
      }
      return result;
    }
  }
  render() {
    if (this.state.error) return failToLoad();
    else if (this.state.loading) return Loading();
    else {
      let x = this.displayRecommendations();
      console.log(x);
      console.log(this.state)
      return (
        <div className="friends-list">
          <Link to="/friends">
            <Button variant="outline-primary" size="lg">
              Search For Friends
            </Button>{" "}
          </Link>
          <h4 className="my-2"> Friends: </h4>
          <div className="row">{this.displayFriends()}</div>
          <hr />
          <h4 className="my-2"> Friend Requests: </h4>
          <h5 className="my-2"> Incoming: </h5>
          <div className="row">{this.displayFriendReqs()}</div>
          <h5 className="my-2"> Outgoing: </h5>
          <div className="row">{this.displayOutgoingFriendReqs()}</div>
          <hr />
          <h4 className="my-2"> Suggested Friends: </h4>
          <div className="row">{x}</div>
        </div>
      );
    }
  }
}

export default FriendsList;
