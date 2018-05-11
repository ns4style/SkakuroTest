import React from "react";
import {shallow, mount} from "enzyme";
import {MemoryRouter, Link} from 'react-router-dom';
import BackButton from "./index";
import Routes from 'configs/routes';

describe("BackButton", () => {
  test(`it's render successfully`, () => {
    const wrapper = mount(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    expect(wrapper.find(BackButton).find('.backButton').exists()).toBeTruthy();
  });

  test(`link to a main page`, () => {
    const wrapper = shallow(
      <BackButton />
    );
    expect(wrapper.find(Link).prop('to')).toEqual(Routes.Main.route);
  });
});

