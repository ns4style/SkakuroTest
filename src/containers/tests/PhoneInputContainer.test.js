import React from "react";
import {shallow, mount} from "enzyme";
import PhoneInputContainer from '../PhoneInputContainer';
import {PhoneInput} from 'components/inputs';
import {Form, Field} from 'react-form';
import pathTo from 'path-to-regexp';
import RoutesList from 'configs/routes'

describe("PhoneInputContainer", () => {

  test(`render successfully`, () => {
    const wrapper = mount(
      <Form>
        <PhoneInputContainer/>
      </Form>
    );
    expect(wrapper.find(PhoneInput).exists()).toBeTruthy();
  });

  test(`phoneValidate is working`, () => {
    const phoneValidate = jest.spyOn(PhoneInputContainer.prototype, 'phoneValidate');
    const wrapper = mount(
      <Form>
        <PhoneInputContainer/>
      </Form>
    );
    expect(phoneValidate).toHaveBeenCalledTimes(0);
    wrapper.find('input#phone').simulate('change');
    expect(phoneValidate).toHaveBeenCalledTimes(1);
  });

  test(`phoneValidate is working correct`, () => {
    const phoneValidate = jest.spyOn(PhoneInputContainer.prototype, 'phoneValidate');
    const wrapper = mount(
      <Form>
        <PhoneInputContainer/>
      </Form>
    );
    expect(phoneValidate('').error).toEqual('Phone number is incorrect');
    expect(phoneValidate('7913555').error).toEqual('Phone number is incorrect');
    expect(phoneValidate('aa').error).toEqual('Phone number is incorrect');
    expect(phoneValidate('79138352547').success).toEqual(true);
  });

  test(`onChangeCallback is working correct`, () => {
    const onChangeCallback = jest.spyOn(PhoneInputContainer.prototype, 'onChangeCallback');
    const wrapper = mount(
      <Form>
        <PhoneInputContainer/>
      </Form>
    );

    wrapper.find('input#phone').simulate('change', {target: {value: '+7-913-34'}});
    expect(onChangeCallback).toHaveBeenCalledTimes(1);
  });
  

  test(`setTouchedInput is working correct`, () => {
    const setTouchedInput = jest.spyOn(PhoneInputContainer.prototype, 'setTouchedInput');
    const wrapper = mount(
      <Form>
        <PhoneInputContainer/>
      </Form>
    );

    wrapper.find('input#phone').simulate('blur');
    expect(setTouchedInput).toHaveBeenCalledTimes(1);
  });

});

