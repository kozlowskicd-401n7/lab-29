import React from "react";
import FunctionalStuff from "./components/stuff/stuff-func.js";
import ClassStuff from "./components/stuff/stuff-class.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>App /w Functional Components</h2>
        <FunctionalStuff componentStyle="Functional"/>
        <h2>App /w Class Components</h2>
        <ClassStuff componentStyle="Class"/>
      </div>
    );
  }
}

export default App;