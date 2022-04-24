import React, { Fragment } from "react";
import Media from "react-media";

function PickAQuiz() {
  return (
    <div className="pick-a-quiz">
      <div className="outline mx-3 mb-5 pb-4">
        <h4 className="mx-3 my-3">
          <Media
            queries={{
              mobile: "(max-width: 575px)",
              other: "(min-width: 576px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.mobile && "Select A Quiz Below To See The Stats!"}
                {matches.other && "Select A Quiz On The Left To See The Stats!"}
              </Fragment>
            )}
          </Media>
        </h4>
        <vr />
      </div>
    </div>
  );
}

export default PickAQuiz;
