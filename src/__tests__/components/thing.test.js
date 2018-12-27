import React from "react";
import renderer from "react-test-renderer";
import ClassThing from "../../components/thing/thing-class.js";
import FunctionalThing from '../../components/thing/thing-func.js';

describe('<ClassStuff />', () => {
  it('is working', () => {
    let app = shallow(<ClassThing />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});

describe('<FunctionalStuff />', () => {
  it('is working', () => {
    let app = shallow(<FunctionalThing />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});