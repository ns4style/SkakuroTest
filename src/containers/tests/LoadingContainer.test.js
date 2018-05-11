import React from "react";
import {shallow, mount} from "enzyme";
import {TestLoadingContainer} from '../LoadingContainer';
import Loading from 'components/loading';

describe("LoadingContainer", () => {

  test(`dont show Loading when observable field is false`, () => {
    let store = {
      showLoading: false
    };
    const wrapper = mount(
      <TestLoadingContainer model={store}/>
    );
    expect(wrapper.find(Loading).props().show).toBeFalsy();
  });

  test(`show Loading when observable field is true`, () => {
    let store = {
      showLoading: true
    };
    const wrapper = mount(
      <TestLoadingContainer model={store}/>
    );
    expect(wrapper.find(Loading).props().show).toBeTruthy();
  });
});

