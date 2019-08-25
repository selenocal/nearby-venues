import React, { Component } from "react";
import styled from "styled-components";
import Container from "../UI/Container/Container";
import PropTypes from "prop-types";

const categories = [
  { name: "All", value: "all" },
  { name: "Food", value: "food" },
  { name: "Drinks", value: "drinks" },
  { name: "Coffee", value: "coffee" },
  { name: "Shops", value: "shops" },
  { name: "Arts", value: "arts" },
  { name: "Outdoors", value: "outdoors" },
  { name: "Sights", value: "sights" },
  { name: "Trending", value: "trending" },
  { name: "Next Venues", value: "nextVenues" },
  { name: "Top Picks", value: "topPicks" }
];

class Filter extends Component {
  state = {
    category: "all",
    distance: 250,
    limit: 50
  };

  explore = () => {
    const { category, distance, limit } = this.state;
    const { location, fetchVenues } = this.props;
    fetchVenues(location, category, distance, limit);
  };

  render() {
    const { category, distance, limit } = this.state;

    return (
      <Wrapper>
        <Container>
          <Filters>
            <FormItem>
              <Label>Category</Label>
              <Select
                name="category"
                value={category}
                onChange={event =>
                  this.setState({ category: event.target.value })
                }
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormItem>
            <FormItem>
              <Label>Distance</Label>
              <Input
                type="number"
                placeholder="Distance"
                min="50"
                value={distance}
                onChange={event =>
                  this.setState({ distance: event.target.value })
                }
              />
            </FormItem>
            <FormItem>
              <Label>Result Limit</Label>
              <Input
                type="number"
                placeholder="Result Limit"
                name="limit"
                min={1}
                value={limit}
                onChange={event => this.setState({ limit: event.target.value })}
              />
            </FormItem>
            <Button type="button" onClick={this.explore}>
              Explore
            </Button>
          </Filters>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #d9e2ec;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const FormItem = styled.div`
  margin: 5px;
`;

const Label = styled.label`
  display: block;
`;

const Select = styled.select`
  height: 40px;
  width: 200px;
  background-color: rgb(248, 248, 248);
  border: 0;
  border-radius: 5px;
  padding: 0 16px;
`;

const Input = styled.input`
  background: #fff;
  color: #383838;
  height: 40px;
  width: 200px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(248, 248, 248);
  padding: 0 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  height: 40px;
  font-size: 18px;
  width: 200px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #f1c40f;
  border: 0;
  border-radius: 5px;
  border-bottom: 2px solid #e2b607;
  cursor: pointer;
  box-shadow: inset 0 -2px #e2b607;
  margin-top: auto;
  margin-bottom: 5px;
`;

Filter.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};

export default Filter;
