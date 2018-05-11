import React from "react";
import {shallow, mount} from "enzyme";
import ErrorMessage from "./index";

describe("ErrorMessage", () => {
  test(`it's render successfully without children`, () => {
    const wrapper = mount(
        <ErrorMessage/>
    );
    expect(wrapper.find('.errorMessage__wrapper').exists()).toBeTruthy();
  });

  test(`render correct with children`, () => {
    const wrapper = shallow(
      <ErrorMessage>12345</ErrorMessage>
    );
    expect(wrapper.find('.errorMessage__wrapper').exists()).toBeTruthy();
    expect(wrapper.find('.errorMessage').children()).toHaveLength(1);
    expect(wrapper.find('.errorMessage').children().text()).toEqual('12345');
  });
});

