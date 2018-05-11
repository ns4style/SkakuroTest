import React from "react";
import {shallow, mount} from "enzyme";
import HeaderPage from "./index";

describe("HeaderPage", () => {
  test(`it's render successfully without children`, () => {
    const wrapper = shallow(
      <HeaderPage/>
    );
    expect(wrapper.find('.headerPage').exists()).toBeTruthy();
  });

  test(`render correct with children`, () => {
    const wrapper = shallow(
      <HeaderPage>12345</HeaderPage>
    );
    expect(wrapper.find('.headerPage').exists()).toBeTruthy();
    expect(wrapper.find('.headerPage').children()).toHaveLength(1);
    expect(wrapper.find('.headerPage').children().text()).toEqual('12345');
  });
});

