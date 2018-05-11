import React from "react";
import {shallow, mount} from "enzyme";
import {SummInput} from ".././index";
import ErrorMessage from 'components/errorMessage';

describe("SummInput", () => {
  test(`render successfully without props`, () => {
    const wrapper = mount(
      <SummInput/>
    );
    expect(wrapper.find('.input').exists()).toBeTruthy();
    expect(wrapper.props().name).toBeDefined();
    expect(wrapper.props().error).toBeDefined();
    expect(wrapper.props().errorText).toBeDefined();
    expect(wrapper.props().success).toBeDefined();
    expect(wrapper.props().onChangeCallback).toBeDefined();
    expect(wrapper.props().setTouchedInput).toBeDefined();
    expect(wrapper.props().beforeChange).toBeDefined();
  });

  test(`behavior between label and input is correct`, () => {
    let name = 'test';
    const wrapper = mount(
      <SummInput name={name}/>
    );
    let inputElement = wrapper.find('input');
    let label = wrapper.find('label');
    expect(label.prop('htmlFor')).toEqual(name);
    expect(inputElement.prop('id')).toEqual(name);
  });

  test(`behavior with success prop is correct`, () => {
    const wrapper = mount(
      <SummInput success={true}/>
    );
    let inputElement = wrapper.find('.input__input._success');
    expect(inputElement.exists()).toBeTruthy();
  });

  test(`behavior with error prop is correct`, () => {
    const wrapper = mount(
      <SummInput error={true} errorText='12345'/>
    );
    let inputElement = wrapper.find('.input__input._error');
    expect(inputElement.exists()).toBeTruthy();
    expect(wrapper.find(ErrorMessage).exists()).toBeTruthy();
    expect(wrapper.find(ErrorMessage).text()).toEqual('12345');
  });

  test(`behavior callbacks is correct`, () => {
    let callbackChangeSpy = jest.fn();
    let callbackBeforeChangeSpy = jest.fn().mockImplementation(() => ({value : '1', cursor : '1'}));
    let callbackTouchedSpy = jest.fn();
    const wrapper = mount(
      <SummInput onChangeCallback={callbackChangeSpy} setTouchedInput={callbackTouchedSpy} beforeChange={callbackBeforeChangeSpy}/>
    );

    let inputElement = wrapper.find('input');
    inputElement.simulate('change');
    expect(callbackChangeSpy).toHaveBeenCalledTimes(1);
    expect(callbackBeforeChangeSpy).toHaveBeenCalledTimes(1);
    inputElement.simulate('blur');
    expect(callbackTouchedSpy).toHaveBeenCalledTimes(1);
  });

});

