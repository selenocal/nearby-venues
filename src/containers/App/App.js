import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  fetchVenues,
  getClientLocation
} from "../../store/actions/venueActions";
import Filter from "../../components/Filter/Filter";
import VenueList from "../../components/VenueList/VenueList";
import Loader from "../../components/UI/Loader/Loader";
import Container from "../../components/UI/Container/Container";

class App extends Component {
  componentDidMount() {
    this.props.getClientLocation();
  }

  render() {
    const { isLoading, location, venues } = this.props;

    return (
      <Wrapper>
        {isLoading && <Loader />}
        <Filter fetchVenues={this.props.fetchVenues} location={location} />
        <Content>
          <Container>
            <VenueList venues={venues} />
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #f1f1f1;
  padding-top: 16px;
  padding-bottom: 16px;
  height: 100%;
  overflow: auto;
`;

App.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  getClientLocation: PropTypes.func.isRequired,
  venues: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

App.defaultProps = {
  error: null
};

const mapStateToProps = state => ({
  venues: state.venue.venues,
  location: state.venue.location,
  isLoading: state.venue.isLoading,
  error: state.venue.error
});

export default connect(
  mapStateToProps,
  { fetchVenues, getClientLocation }
)(App);
