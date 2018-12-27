import React from "react";

import FunctionalThing from "../thing/thing-func.js";

const FunctionalStuff = props => {
  return (
    <>
      <div>
        <h3>{props.componentStyle} Stuff</h3>
        <FunctionalThing componentStyle={props.componentStyle}>
          <span>Thing child 1</span>
          <span>Thing child 2</span>
          <span>Thing child 3</span>
        </FunctionalThing>
      </div>
    </>
  );
};

export default FunctionalStuff;