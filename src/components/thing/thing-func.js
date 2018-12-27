import React from "react";

const FunctionalThing = props => {
  return (
    <>
      <div>
        <h4>{props.componentStyle} Thing</h4>
        {props.children}
      </div>
    </>
  );
};

export default FunctionalThing;