import React from "react";
import renderer from "react-test-renderer";
import App from "../app.js";

describe('<App />', () => {
  it('is working', () => {
    let app = shallow(<App />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});