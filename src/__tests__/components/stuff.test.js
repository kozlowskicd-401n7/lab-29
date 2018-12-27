import React from "react";
import renderer from "react-test-renderer";
import ClassStuff from "../../components/stuff/stuff-class.js";
import FunctionalStuff from '../../components/stuff/stuff-func.js';

describe('<ClassStuff />', () => {
  it('is working', () => {
    let app = shallow(<ClassStuff />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});

describe('<FunctionalStuff />', () => {
  it('is working', () => {
    let app = shallow(<FunctionalStuff />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});