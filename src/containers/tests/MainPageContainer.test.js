import React from "react";
import {shallow, mount} from "enzyme";
import Page from 'pages/commonPage';
import {TestMainPageContainer} from '../MainPageContainer';
import {getListOperators} from 'services/emulateApi';
import HeaderPage from 'components/headerPage';
import OperatorItemContainer from 'containers/OperatorItemContainer';

jest.mock('services/emulateApi', () => ({
  getListOperators: jest.fn()
}));


describe("MainPageContainer", () => {
  let store;

  beforeEach(() => {
    store = {
      showLoading: false,
      setShowLoading: jest.fn(),
      resetShowLoading: jest.fn()
    };
    getListOperators.mockClear();
    getListOperators.mockResolvedValue([{name: 'МТС', id : 1}]);
  });

  test(`render successfully`, () => {
    const wrapper = shallow(
      <TestMainPageContainer model={store}/>
    );
    expect(wrapper.state('operators')).toHaveLength(0);
  });

  test(`set loader while data is loading`, () => {
    const wrapper = shallow(
      <TestMainPageContainer model={store}/>
    );
    expect(store.setShowLoading).toHaveBeenCalledTimes(1);
  });


  test(`successfully load data`, () => {
    const wrapper = shallow(
      <TestMainPageContainer model={store}/>
    );
    expect(getListOperators).toHaveBeenCalledTimes(1);
  });

  test(`set data to state and off loader when data is loaded`, (done) => {
    let promiseResolved = Promise.resolve([{name : 'МТС', id : 1}]);
    getListOperators.mockReturnValue(promiseResolved);
    const wrapper = shallow(
      <TestMainPageContainer model={store}/>
    );
    promiseResolved.then(() => {
      expect(store.resetShowLoading).toHaveBeenCalledTimes(1);
      expect(wrapper.state().operators.length).toEqual(1);
      done();
    });
  });

  test(`list operators is rendered`, (done) => {
    let promiseResolved = Promise.resolve([{name : 'МТС', id : 1}]);
    getListOperators.mockReturnValue(promiseResolved);
    const wrapper = shallow(
      <TestMainPageContainer model={store}/>
    );
    promiseResolved.then(() => {
      wrapper.update();
      let operatorsLength = wrapper.state().operators.length;
      expect(wrapper.find(OperatorItemContainer).length).toEqual(operatorsLength);
      done();
    });
  });

});

