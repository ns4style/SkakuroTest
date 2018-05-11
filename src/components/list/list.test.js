import React from "react";
import {shallow, mount} from "enzyme";
import List from "./index";
import FadeComponent from 'components/fadeComponent';

describe("List", () => {
  test(`it's render successfully without children`, () => {
    const wrapper = shallow(
      <List/>
    );
    expect(wrapper.find(FadeComponent).exists()).toBeTruthy();
  });

  test(`render correct with children`, () => {
    const wrapper = shallow(
      <List>12345</List>
    );
    expect(wrapper.find(FadeComponent).exists()).toBeTruthy();
    expect(wrapper.find(FadeComponent).children()).toHaveLength(1);
    expect(wrapper.find(FadeComponent).children().text()).toEqual('12345');
  });
});

