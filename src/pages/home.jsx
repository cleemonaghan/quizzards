import React from "react";
import { Auth, navItem, Storage } from "aws-amplify";
import { FriendsList, QuizBox } from "../components";
import GroupBox from "../components/groupBox";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

import{
  getUser,
  getUserGroups,
  getUserQuizzes,
  addFriend,
} from "../databaseFunctions/users.js";
import Button from "@restart/ui/esm/Button";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			name: "",
			color_theme: "blue",
			profile_pic: null,
		};
	}

	async componentDidMount() {
		//get the user information
		const response = await Auth.currentAuthenticatedUser();
		let user = response.username;
		let userSettings = await getUser(user);
		const image = await Storage.get(userSettings.data.getUser.profilePicture);
		this.setState({ username: user, profile_pic: image });
	}

	async componentDidMount() {
		const response = await Auth.currentAuthenticatedUser();
		let user = response.username;
		const image = await Storage.get(user + "_profile_pic");
		this.setState({ username: user, profile_pic: image });
		//let result = await getUserQuizzes(user);
		//console.log(result);
	}

	async getGroups() {
		const groupArr = await getUserGroups(this.username);
		if (groupArr == undefined) {
			console.log("returning empty list");
			return [];
		}
		return groupArr;
	}

	async getQuizzes() {
		const quizArr = await getUserQuizzes(this.username);
		if (quizArr == undefined) {
			console.log("returning an empty quiz list");
			return [];
		}
		return quizArr;
	}

	render() {
		let groupArr = this.getGroups();
		let quizArr = this.getQuizzes();
		return (
			<div className="home">
				<div className="container">
					<div className="float-end col-3">
						<FriendsList />
					</div>
					<div className="row align-items-center my-5">
						<div className="col-1">
							<img
								className="img-fluid rounded-circle my-auto"
								src={this.state.profile_pic}
								alt=""
							/>
						</div>
						<h3 className="font-weight-light col-3 my-auto">
							{this.state.username}
						</h3>
					</div>
					<div className="row align-items-center mt-5 mb-2">
						<h1 className="font-weight-bold col-4">Your Groups</h1>
					</div>
					<div className="row col-9 pb-5">
						{groupArr.length ? (
							groupArr.map((item) => {
								return (
									<div className="col-4 mb-4">
										<GroupBox link={item.profilePicture} name={item.name} />
									</div>
								);
							})
						) : (
							<p>You have no groups</p>
						)}
					</div>
					{/*
            <div className="row col-9 pb-5">
            <div className="col-4 mb-4">
              <GroupBox link={photo13} name="Hogwarts" />
            </div>
            <div className="col-4 mb-4">
              <GroupBox link={photo14} name="Puppies" />
            </div>
            <div className="col-4 mb-4">
              <GroupBox link={photo15} name="Astronomy" />
            </div>
          </div>
          <div className="row col-9 pb-5">
            <div className="col-4 mb-4">
              <GroupBox link={photo16} name="Candy" />
            </div>
            <div className="col-4 mb-4">
              <GroupBox link={photo17} name="Books" />
            </div>
          </div>
            */}


          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-4">Your Quizzes</h1>
          </div>
          <div className = "row col-9 pb-5">
            {quizArr.length ? quizArr.map(item => {
              return  <div className="col-4">
              <QuizBox  name={item.quizname} description={item.description}/>
            </div>;
            }) : <p>You have no quizzes</p>}
          </div>
          <div className = "row align-items-center mt-5 mb-2">
            <h1 >Make a Friend!</h1>
          </div>
          <Button onClick = {() => addFriend(this.state.username, "cleemonaghan")}></Button>
          {/*
          <div className="row col-9 pb-5">
            <div className="col-4">
              <QuizBox
                name="Hogwarts"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-4">
              <QuizBox
                name="Puppies"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-4">
              <QuizBox
                name="Astronomy"
                description="description of the quiz goes here."
              />
            </div>
          </div>
          <div className="row col-9 pb-5">
            <div className="col-4">
              <QuizBox
                name="Candy"
                description="description of the quiz goes here."
              />
            </div>
            <div className="col-4">
              <QuizBox
                name="Books"
                description="description of the quiz goes here."
              />

              </div>  
              </div>
           
          */}
				</div>
			</div>
		);
	}
}

export default Home;
