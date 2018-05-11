import React from "react";
import {shallow, mount} from "enzyme";
import FadeComponent from "./index";

describe("FadeComponent", () => {
  test(`it's render successfully without children`, () => {
    const wrapper = mount(
      <FadeComponent/>
    );
    expect(wrapper.find('.list').exists()).toBeTruthy();
  });

  test(`render correct with children`, () => {
    const wrapper = shallow(
      <FadeComponent>12345</FadeComponent>
    );
    expect(wrapper.find('.list').exists()).toBeTruthy();
    expect(wrapper.find('.list').children()).toHaveLength(1);
    expect(wrapper.find('.list').children().text()).toEqual('12345');
  });
});

