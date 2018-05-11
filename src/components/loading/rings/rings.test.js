import React from "react";
import {shallow, mount} from "enzyme";
import Rings from "./index";

describe("Rings", () => {
  test(`render successfully`, () => {
    const wrapper = mount(
      <Rings/>
    );
    expect(wrapper.find('.loading').exists()).toBeTruthy();
    expect(wrapper.prop('small')).toBeFalsy();
  });

  test(`props small is working`, () => {
    const wrapper = mount(
      <Rings small={true}/>
    );
    expect(wrapper.find('.loading._small').exists()).toBeTruthy();
    expect(wrapper.prop('small')).toBeTruthy();
  });

});

