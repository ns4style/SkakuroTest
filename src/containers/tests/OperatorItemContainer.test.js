import React from "react";
import {shallow, mount} from "enzyme";
import OperatorItemContainer from '../OperatorItemContainer';
import OperatorItem from 'components/operatorItem';
import pathTo from 'path-to-regexp';
import RoutesList from 'configs/routes'

describe("OperatorItemContainer", () => {

  test(`render successfully without props`, () => {
    const wrapper = shallow(
      <OperatorItemContainer/>
    );
  });

  test(`props calculate and pass correct`, () => {
    let data = {
      id: 1,
      url: 'beeline',
      name: 'Beeline',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MTS_logo.svg/2000px-MTS_logo.svg.png'
    };
    let pathToOperator = pathTo.compile(RoutesList.DetailsPage.route);
    pathToOperator = pathToOperator({
      operatorName: data.url
    });
    const wrapper = shallow(
      <OperatorItemContainer data={data}/>
    );
    expect(wrapper.find(OperatorItem).props().data.url).toBe(pathToOperator)
    expect(wrapper.find(OperatorItem).props().data.name).toBe(data.name);
    expect(wrapper.find(OperatorItem).props().data.logo).toBe(data.logo);
  });

});

