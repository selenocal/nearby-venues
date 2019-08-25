import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VenueItem = ({ venue: { name, location, categories } }) => (
  <Wrapper>
    <Icon>
      {categories.map(category => {
        return (
          <img
            key={category.id}
            alt={category.name}
            title={category.name}
            src={`${category.icon.prefix}32${category.icon.suffix}`}
          />
        );
      })}
    </Icon>
    <Info>
      <Name>{name}</Name>
      <Address>{location.address}</Address>
    </Info>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 15px auto;
  background-color: #d9e2ec;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;

  @media (min-width: 720px) {
    width: 350px;
  }
`;

const Icon = styled.div`
  background-color: #334e68;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  margin: auto 15px auto 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  color: hsl(202, 57%, 15%);
  font-weight: 700;
  font-size: 20px;
`;

const Address = styled.span`
  font-weight: 400;
  color: hsl(201, 23%, 34%);
  font-size: 16px;
`;

VenueItem.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      address: PropTypes.string
    }),
    categories: PropTypes.array
  })
};

VenueItem.defaultProps = {
  venue: {
    name: "",
    location: {
      address: ""
    },
    categories: []
  }
};

export default VenueItem;
