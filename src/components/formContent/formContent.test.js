import React from "react";
import {shallow, mount} from "enzyme";
import PhoneInputContainer from 'containers/PhoneInputContainer';
import SummInputContainer from 'containers/SummInputContainer';
import Rings from 'components/loading/rings';
import ErrorMessage from 'components/errorMessage';
import FormContent from "./index";

describe("FormContent", () => {
  test(`it's render successfully`, () => {
    const wrapper = shallow(
      <FormContent/>
    );
    expect(wrapper.find('.form').exists()).toBeTruthy();
  });

  test(`form contains phone container`, () => {
    const wrapper = shallow(
      <FormContent/>
    );
    expect(wrapper.find(PhoneInputContainer).exists()).toBeTruthy();
  });

  test(`form contains summ container`, () => {
    const wrapper = shallow(
      <FormContent/>
    );
    expect(wrapper.find(SummInputContainer).exists()).toBeTruthy();
  });

  test(`when submitting - correct behavior(button is disabled and loading rings is showing)`, () => {
    const formApi = {
      submitting: true
    };
    const wrapper = shallow(
      <FormContent formApi={formApi}/>
    );
    expect(wrapper.instance().props.formApi.submitting).toBeTruthy();
    expect(wrapper.find('.form__button').prop('disabled')).toBeTruthy();
    expect(wrapper.find(Rings).exists()).toBeTruthy();
  });

  test(`correct show error when submitting failed`, () => {
    const errorForm = {
      message : 'errorMessage'
    };
    const wrapper = shallow(
      <FormContent errorForm={errorForm}/>
    );
    expect(wrapper.instance().props.errorForm.message).toBeTruthy();
    expect(wrapper.find(ErrorMessage).exists()).toBeTruthy();
    expect(wrapper.find(ErrorMessage).children()).toHaveLength(1);
    expect(wrapper.find(ErrorMessage).children().text()).toEqual('errorMessage');
  });

  test(`callback onSubmit is calling when submit`, () => {
    let spyFn = jest.fn();
    let formApi = {
      submitForm: spyFn
    };
    const wrapper = shallow(
      <FormContent formApi={formApi}/>
    );
    expect(spyFn).toHaveBeenCalledTimes(0);
    wrapper.find('.form').simulate('submit');
    expect(spyFn).toHaveBeenCalledTimes(1);
  });
});

