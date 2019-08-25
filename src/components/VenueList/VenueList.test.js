import React from "react";
import { shallow, mount } from "enzyme";
import VenueList from "./VenueList";

describe("<VenueList />", () => {
  const venueData = [
    {
      venue: {
        id: "1234",
        name: "Adyen Cafe",
        location: {
          address: "Amsterdam"
        },
        categories: []
      }
    },
    {
      venue: {
        id: "5678",
        name: "Adyen Office",
        location: {
          address: "Amsterdam Centraal"
        },
        categories: []
      }
    }
  ];

  it("expects render empty VenueList correctly", () => {
    const wrapper = shallow(<VenueList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("expects render VenueList with mock data correctly", () => {
    const wrapper = mount(<VenueList venues={venueData} />);
    expect(wrapper).toMatchSnapshot();
    venueData.forEach(venueItem => {
      expect(wrapper.contains(venueItem.venue.name)).toBe(true);
      expect(wrapper.contains(venueItem.venue.location.address)).toBe(true);
    });
  });
});
