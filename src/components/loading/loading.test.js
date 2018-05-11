import React from "react";
import {shallow, mount} from "enzyme";
import Loading from "./index";

describe("Loading", () => {
  test(`it's dont show by default`, () => {
    const wrapper = mount(
      <Loading/>
    );
    expect(wrapper.find('.loading__wrapper').exists()).toBeFalsy();
    expect(wrapper.prop('show')).toBeFalsy();
  });

  test(`props show is working`, () => {
    const wrapper = mount(
      <Loading show={true}/>
    );
    expect(wrapper.find('.loading__wrapper').exists()).toBeTruthy();
    expect(wrapper.prop('show')).toBeTruthy();
  });

});

