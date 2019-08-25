import React from "react";
import VenueItem from "../VenueItem/VenueItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const VenueList = ({ venues }) => (
  <Wrapper>
    {venues.map(venueItem => (
      <VenueItem key={venueItem.venue.id} venue={venueItem.venue} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

VenueList.propTypes = {
  venues: PropTypes.array
};

VenueList.defaultProps = {
  venues: []
};

export default VenueList;
