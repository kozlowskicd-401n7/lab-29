import React from "react";

class ClassThing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <h4>{this.props.componentStyle} Thing</h4>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default ClassThing;