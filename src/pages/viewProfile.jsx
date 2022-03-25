import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Storage } from "aws-amplify";
import { getUser } from "../databaseFunctions/users";
import { failToLoad, Loading } from "../components";


function useGatherResources(username) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [userImage, setUserImage] = useState(null);
  
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
        setUser(res);
        //get the group image
        res = await Storage.get(res.profilePicture);
        setUserImage(res);
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
  
    return [user, userImage, error, loading];
  }





function ViewProfile() {

    
  let info = useParams();
  const username = info.username;

  
  const [user, userImage, error, loading] = useGatherResources(username);
  
  if (error) return (failToLoad());
  return loading ? Loading() : 
    (
      <div className="profile">
        <div className="container">
          <div className="row align-items-center my-5">
            <h1 className="col-11">Profile</h1>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-1">
              <img
                id="profile_pic_display"
                className="img-fluid rounded-circle my-auto"
                src={userImage}
                alt=""
              />
            </div>
            <h3 className="font-weight-light col-3 my-auto">
              {username}
            </h3>
          </div>

          <div className="row">
            <h4 className="col-1">Name:</h4>
            <h4 className="col-11 ps-4">{user.name}</h4>
          </div>
          <div className="row">
            <h4 className="col-1">Bio:</h4>
            <h4 className="col-11 ps-4">{user.bio}</h4>
          </div>

        </div>
      </div>
    );
  }


export default ViewProfile;
