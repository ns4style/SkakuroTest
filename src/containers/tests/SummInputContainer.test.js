import React from "react";
import {shallow, mount} from "enzyme";
import SummInputContainer from '../SummInputContainer';
import {SummInput} from 'components/inputs';
import {Form, Field} from 'react-form';
describe("SummInputContainer", () => {

  test(`render successfully`, () => {
    const wrapper = mount(
      <Form>
        <SummInputContainer/>
      </Form>
    );
    expect(wrapper.find(SummInput).exists()).toBeTruthy();
  });

  test(`summValidate is working`, () => {
    const summValidate = jest.spyOn(SummInputContainer.prototype, 'summValidate');
    const wrapper = mount(
      <Form>
        <SummInputContainer/>
      </Form>
    );
    expect(summValidate).toHaveBeenCalledTimes(0);
    wrapper.find('input#summ').simulate('change');
    expect(summValidate).toHaveBeenCalledTimes(1);
  });

  test(`summValidate is working correct`, () => {
    const summValidate = jest.spyOn(SummInputContainer.prototype, 'summValidate');
    const wrapper = mount(
      <Form>
        <SummInputContainer/>
      </Form>
    );
    expect(summValidate('').error).toEqual('Incorrect value');
    expect(summValidate('10001').error).toEqual('Incorrect value');
    expect(summValidate('-6').error).toEqual('Incorrect value');
    expect(summValidate('100').success).toEqual(true);
  });

  test(`onChangeCallback is working correct`, () => {
    const onChangeCallback = jest.spyOn(SummInputContainer.prototype, 'onChangeCallback');
    const wrapper = mount(
      <Form>
        <SummInputContainer/>
      </Form>
    );

    wrapper.find('input#summ').simulate('change', {target: {value: '124'}});
    expect(onChangeCallback).toHaveBeenCalledTimes(1);
  });

  test(`setTouchedInput is working correct`, () => {
    const setTouchedInput = jest.spyOn(SummInputContainer.prototype, 'setTouchedInput');
    const wrapper = mount(
      <Form>
        <SummInputContainer/>
      </Form>
    );

    wrapper.find('input#summ').simulate('blur');
    expect(setTouchedInput).toHaveBeenCalledTimes(1);
  });

  test(`beforeChange is working correct`, () => {
    const beforeChange = jest.spyOn(SummInputContainer.prototype, 'beforeChange');
    const wrapper = mount(
      <Form>
        <SummInputContainer/>
      </Form>
    );

    wrapper.find('input#summ').simulate('change');
    expect(beforeChange).toHaveBeenCalledTimes(2);
  });
});

