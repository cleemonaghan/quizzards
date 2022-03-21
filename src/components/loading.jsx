import React from "react";
import { logo } from "../images/";
import {Stack, Spinner} from "react-bootstrap"

function Loading() {
  return (
    <Stack gap={2} className="col-md-4 mx-auto">
      <div>
        <div className="d-inline">
        <Spinner animation="border" />
        </div>
        
        <h1 className="d-inline w-responsive text-center ml-1 mt-2 mb-0"> Loading... </h1>
      </div>
      
      <div>
        <img className="img-fluid" src={logo} alt="" />
      </div>
      
      
    </Stack>
  );
}

export default Loading;