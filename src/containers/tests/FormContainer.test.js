import React from "react";
import {shallow, mount} from "enzyme";
import {TestFormContainer} from '../FormContainer';
import {sendData} from 'services/emulateApi';

jest.mock('services/emulateApi', () => ({
  sendData: jest.fn()
}));

describe("FormContainer", () => {
  let history;
  beforeEach(() => {
    history = {
      push: jest.fn()
    };
    sendData.mockClear();
    sendData.mockResolvedValue(true);
  });

  test(`render successfully`, () => {
    const wrapper = shallow(
      <TestFormContainer/>
    );
    expect(wrapper.state('errorForm')).toBeFalsy();
  });

  test(`onSubmit not call when data is empty`, (done) => {
    const onSubmit = jest.spyOn(TestFormContainer.prototype, 'onSubmit');
    const wrapper = mount(
      <TestFormContainer/>
    );
    wrapper.find('.form__button').simulate('submit');
    setTimeout(()=> {
      expect(onSubmit).toHaveBeenCalledTimes(0);
      done()
    }, 0);
  });

  test(`onSubmit not call when phone is incorrect`, (done) => {
    const onSubmit = jest.spyOn(TestFormContainer.prototype, 'onSubmit');
    const wrapper = mount(
      <TestFormContainer/>
    );
    wrapper.find('input#phone').simulate('change', {target: {value: '+79aa138352547'}});
    wrapper.find('input#summ').simulate('change', {target: {value: '33'}});
    wrapper.find('.form__button').simulate('submit');
    setTimeout(()=> {
      expect(onSubmit).toHaveBeenCalledTimes(0);
      done()
    }, 0);
  });

  test(`onSubmit not call when summ is incorrect`, (done) => {
    const onSubmit = jest.spyOn(TestFormContainer.prototype, 'onSubmit');
    const wrapper = mount(
      <TestFormContainer/>
    );
    wrapper.find('input#phone').simulate('change', {target: {value: '+79139962547'}});
    wrapper.find('input#summ').simulate('change', {target: {value: '-44'}});
    wrapper.find('.form__button').simulate('submit');
    setTimeout(()=> {
      expect(onSubmit).toHaveBeenCalledTimes(0);
      done()
    }, 0);
  });

  test(`callback onSubmit is correct`, (done) => {
    const onSubmit = jest.spyOn(TestFormContainer.prototype, 'onSubmit');
    const wrapper = mount(
      <TestFormContainer history={history}/>
    );
    wrapper.find('input#phone').simulate('change', {target: {value: '+79139952547'}});
    wrapper.find('input#summ').simulate('change', {target: {value: '33'}});
    wrapper.find('.form__button').simulate('submit');
    setTimeout(()=> {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      done()
    }, 0);
  });

  test(`errorState is reset every onSubmit`, (done) => {
    const wrapper = mount(
      <TestFormContainer history={history}/>
    );
    wrapper.setState({
      errorForm: {
        message: 'error'
      }
    }, () => {
      wrapper.find('input#phone').simulate('change', {target: {value: '+79139952547'}});
      wrapper.find('input#summ').simulate('change', {target: {value: '33'}});
      wrapper.find('.form__button').simulate('submit');
      wrapper.update();
      setTimeout(()=> {
        expect(wrapper.state('errorForm')).toBeNull();
        done()
      }, 0);
      done();
    });
  });

  test(`if onSubmit randomize success then going to main page`, (done) => {
    const history = {
      push: jest.fn()
    };

    const wrapper = mount(
      <TestFormContainer history={history}/>
    );
    wrapper.find('input#phone').simulate('change', {target: {value: '+79139952547'}});
    wrapper.find('input#summ').simulate('change', {target: {value: '33'}});
    wrapper.find('.form__button').simulate('submit');
    wrapper.update();
    setTimeout(()=> {
      expect(history.push).toHaveBeenCalledTimes(1);
      done()
    }, 0);
  });

  test(`callback onSubmit throw error when rejected`, (done) => {
    const onSubmitError = jest.spyOn(TestFormContainer.prototype, 'onSubmitError');
    sendData.mockRejectedValue('big error;)');
    const wrapper = mount(
      <TestFormContainer history={history}/>
    );
    wrapper.find('input#phone').simulate('change', {target: {value: '+79139952547'}});
    wrapper.find('input#summ').simulate('change', {target: {value: '33'}});
    wrapper.find('.form__button').simulate('submit');
    setTimeout(()=> {
      expect(onSubmitError).toHaveBeenCalledTimes(1);
      expect(onSubmitError).toHaveBeenCalledWith({}, Error('big error;)'));
      done()
    }, 0);
  });

});

