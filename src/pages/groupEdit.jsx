import React, { useState, useEffect } from "react";
import { getGroup, updateGroup } from "../databaseFunctions/groups";
import "@aws-amplify/ui-react/styles.css";
import { Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import { Storage } from "aws-amplify";
import { useParams, Navigate } from "react-router-dom";
import { failToLoad, Loading } from "../components";

function GroupEdit() {
  let info = useParams();
  let groupID = info.id;

  // group values to be edited
  const [submit, setSubmit] = useState(false);
  const [group, setGroup] = useState(null);
  const [groupImage, setGroupImage] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [changedImage, setChangedImage] = useState(false);

  const [error, loading] = useGatherResources(
    groupID,
    group,
    setGroup,
    groupImage,
    setGroupImage,
    tempImage,
    setTempImage,
    changedImage,
    setChangedImage
  );

  const [alert, setAlert] = useState(false);

  if (error) return failToLoad();
  else if (submit) {
    //route to group page
    return <Navigate to={"/groupPage/" + group.id} />;
  }
  return loading ? (
    Loading()
  ) : (
    <div className="edit_group">
      <div className="container">
        <h1 className="font-weight-light my-5">Create Group</h1>
        <Form
          onSubmit={(event) =>
            handleSubmit(
              event,
              tempImage,
              changedImage,
              group,
              groupImage,
              setGroupImage,
              setSubmit
            )
          }
        >
          {/* Name */}
          <Form.Group className="mb-3" controlId="name">
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                name="name"
                type="text"
                defaultValue={group.name}
                onChange={(event) => handleChange(event, group, setGroup)}
              />
            </FloatingLabel>
          </Form.Group>
          {/* Profile Picture */}
          <Form.Group controlId="profile_pic" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              name="profile_pic"
              onChange={(event) =>
                changeImage(
                  event,
                  setChangedImage,
                  setTempImage,
                  setGroupImage,
                  groupImage,
                  setAlert
                )
              }
              accept="image/png, image/jpeg"
              s
            />
          </Form.Group>
          <div className="mb-3">
            <img
              id="profile_pic_display"
              className="img-fluid" // col-2 ms-4 mt-2 mb-0 px-2 py-2"
              alt=""
              src={tempImage}
              style={{ height: "200px", width: "400px" }}
            />
          </div>
          {/* Biography */}
          <Form.Group className="mb-3" controlId="bio">
            <FloatingLabel label="Group description" className="mb-3">
              <Form.Control
                name="bio"
                type="text"
                defaultValue={group.bio}
                onChange={(event) => handleChange(event, group, setGroup)}
              />
            </FloatingLabel>
          </Form.Group>
          <div>{displayAlert(alert, setAlert)}</div>
          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Update Group
          </Button>
          {/* Delete Group */}
          <Button className="ms-2" variant="danger">
            Delete Group
          </Button>
        </Form>
      </div>
    </div>
  );
}

function displayAlert(alert, setAlert) {
  if (alert) {
    return (
      <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
        <Alert.Heading>Oh snap! That photo is too large!</Alert.Heading>
        <p>Try using a smaller photo</p>
      </Alert>
    );
  }
  return <div></div>;
}

/**
 * This method updates the groups's attributes in AWS Cognito and in the database.
 */
async function updateAttributes(changedImage, group, groupImage) {
  let params = {
    name: group.name,
    bio: group.bio,
    profilePicture: group.profile_pic,
  };

  //if they changed the photo, update the photo
  if (changedImage) {
    params = {
      profilePicture: groupImage,
      bio: group.bio,
      name: group.name,
    };
  } else {
    params = {
      bio: group.bio,
      name: group.name,
    };
  }
  await updateGroup(group.id, params);
}

function handleChange(event, group, setGroup) {
  let target = event.target;
  let value = target.type === "checkbox" ? target.checked : target.value;
  let name = target.name;
  group[name] = value;
  setGroup(group);
  console.log(group);
}

function changeImage(
  event,
  setChangedImage,
  setTempImage,
  setGroupImage,
  groupImage,
  setAlert
) {
  //check if they they submitted files
  if (event.target.files) {
    if (event.target.files.length === 0) {
      //no file was uploaded, so revert to the default
      setTempImage(groupImage);
    } else if (event.target.files[0]) {
      // Update the temp photo and the state.profile_pic
      let file = event.target.files[0];
      if (file.size < 10000000) {
        let tempPhoto = URL.createObjectURL(file);
        setTempImage(tempPhoto);
        setGroupImage(file);
        setChangedImage(true);
      } else {
        //the file was too big, so revert to the default
        setTempImage(groupImage);
        setAlert(true);
      }
    }
  }
}

function useGatherResources(
  groupID,
  group,
  setGroup,
  groupImage,
  setGroupImage,
  tempImage,
  setTempImage,
  changedImage,
  setChangedImage
) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getInfo() {
    try {
      setLoading(true);
      //get the group
      let res = await getGroup(groupID);
      setGroup(res);
      //get the group image
      res = await Storage.get(res.profilePicture);
      setGroupImage(res);
      setTempImage(res);
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

  return [error, loading];
}

function handleSubmit(
  event,
  tempImage,
  changedImage,
  group,
  groupImage,
  setGroupImage,
  setSubmit
) {
  event.preventDefault();
  //update the color scheme
  //update the user profile
  updateAttributes(changedImage, group, groupImage);

  //
  let pathname = "/groupPage/" + group.id;
  console.log(pathname);

  //reroute to different page?
  setSubmit(true);

  //<Navigate replace to={pathname} />;
}

export default GroupEdit;
