import React from "react";
import { shallow } from "enzyme";
import VenueItem from "./VenueItem";

describe("<VenueItem />", () => {
  const venueData = {
    name: "Adyen Cafe",
    location: {
      address: "Amsterdam"
    },
    categories: []
  };

  it("expects render no data VenueItem correctly", () => {
    const wrapper = shallow(<VenueItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it("expects render VenueItem with mock data correctly", () => {
    const wrapper = shallow(<VenueItem venue={venueData} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(venueData.name)).toBe(true);
    expect(wrapper.contains(venueData.location.address)).toBe(true);
  });
});
