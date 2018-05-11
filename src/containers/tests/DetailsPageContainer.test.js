import React from "react";
import {shallow, mount} from "enzyme";
import Page from 'pages/commonPage';
import {TestDetailsPageContainer} from '../DetailsPageContainer';
import {getCurrentOperator} from 'services/emulateApi';
import HeaderPage from 'components/headerPage';

jest.mock('services/emulateApi', () => ({
  getCurrentOperator: jest.fn()
}));

getCurrentOperator.mockResolvedValue({name: 'МТС'});

describe("DetailsPageContainer", () => {
  let store;
  let match;

  beforeEach(() => {
    store = {
      showLoading: false,
      setShowLoading: jest.fn(),
      resetShowLoading: jest.fn()
    };
    match = {
      params: {
        operatorName: 'mts'
      }
    };
    getCurrentOperator.mockClear();
    getCurrentOperator.mockResolvedValue({name: 'МТС'});
  });

  test(`render successfully`, () => {
    const wrapper = shallow(
      <TestDetailsPageContainer model={store} match={match}/>
    );
    expect(wrapper.state('item')).toBeFalsy();
  });

  test(`enable loading when componentWillMount`, () => {
    const wrapper = shallow(
      <TestDetailsPageContainer model={store} match={match}/>
    );
    expect(store.setShowLoading).toHaveBeenCalledTimes(1);
  });

  test(`redirect when operator don't exist`, (done) => {
    let history = {
      push: jest.fn()
    };
    let getOperatorIsExecute = Promise.resolve(false);
    getCurrentOperator.mockReturnValue(getOperatorIsExecute);
    const wrapper = shallow(
      <TestDetailsPageContainer model={store} match={match} history={history}/>
    );
    expect(getCurrentOperator).toHaveBeenCalledTimes(1);
    getOperatorIsExecute.then(()=> {
      expect(history.push).toHaveBeenCalledTimes(1);
      done();
    });
  });

  test(`data is loading and set to state and loader is off`, (done) => {
    const item = {
      name: 'МТС'
    }
    let getOperatorIsExecute = Promise.resolve(item);
    getCurrentOperator.mockReturnValue(getOperatorIsExecute);
    const wrapper = shallow(
      <TestDetailsPageContainer model={store} match={match}/>
    );
    getOperatorIsExecute.then(()=> {
      expect(wrapper.state('item').name).toEqual('МТС');
      wrapper.update();
      expect(wrapper.find(HeaderPage).render().text()).toContain(item.name);
      expect(store.resetShowLoading).toHaveBeenCalledTimes(1);
      done();
    });

  });


});

