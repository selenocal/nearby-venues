import React from "react";
import { mount } from "enzyme";
import Filter from "./Filter";

describe("<Filter />", () => {
  const fetchVenues = jest.fn();
  const location = "51.4401551,5.471075";
  const wrapper = mount(
    <Filter fetchVenues={fetchVenues} location={location} />
  );

  it("expects render Filter correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expects initial values of Filters", () => {
    const category = wrapper.find("select").first();
    const distance = wrapper.find("input").first();
    const limit = wrapper.find("input").last();

    expect(category.props().value).toEqual("all");
    expect(distance.props().value).toEqual(250);
    expect(limit.props().value).toEqual(50);
  });

  it("expects to see state changes", () => {
    wrapper.setState({
      category: "food",
      distance: 500,
      limit: 11
    });

    const category = wrapper.find("select").first();
    const distance = wrapper.find("input").first();
    const limit = wrapper.find("input").last();

    expect(category.props().value).toEqual("food");
    expect(distance.props().value).toEqual(500);
    expect(limit.props().value).toEqual(11);
  });
});
