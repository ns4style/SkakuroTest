import React from "react";
import {shallow, mount} from "enzyme";
import OperatorItem from "./index";
import {MemoryRouter, Link} from 'react-router-dom';
import Routes from 'configs/routes';

describe("OperatorItem", () => {
  test(`render successfully without props`, () => {
    const wrapper = mount(
      <MemoryRouter>
        <OperatorItem/>
      </MemoryRouter>
    );
    expect(wrapper.find(OperatorItem).find('.operatorItem').exists()).toBeTruthy();
    expect(wrapper.find(OperatorItem).props().data).toBeDefined();
    expect(wrapper.find(OperatorItem).find(Link).props().to).toEqual(Routes.Main.route);
    expect(wrapper.find(OperatorItem).find('img').prop('src')).toBeFalsy();
    expect(wrapper.find(OperatorItem).find('.operatorItem__name').text()).toBeFalsy();
  });

  test(`render successfully with props data`, () => {
    let data = {
      url: 'url',
      logo: 'imgSource',
      name: 'name'
    };
    const wrapper = mount(
      <MemoryRouter>
        <OperatorItem data={data}/>
      </MemoryRouter>
    );
    expect(wrapper.find(OperatorItem).find('.operatorItem').exists()).toBeTruthy();
    expect(wrapper.find(OperatorItem).find(Link).props().to).toEqual(data.url);
    expect(wrapper.find(OperatorItem).find('img').prop('src')).toEqual(data.logo);
    expect(wrapper.find(OperatorItem).find('.operatorItem__name').text()).toEqual(data.name);
  });

});

