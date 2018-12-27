import React from "react";
import ClassThing from "../thing/thing-class.js";

class ClassStuff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <h3>{this.props.componentStyle} Stuff</h3>
          <ClassThing componentStyle={this.props.componentStyle}>
            <span>Thing child 1</span>
            <span>Thing child 2</span>
            <span>Thing child 3</span>
          </ClassThing>
        </div>
      </>
    );
  }
}

export default ClassStuff;