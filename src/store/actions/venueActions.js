import axios from "axios";
import * as actionTypes from "./actionTypes";
import Credentials from "../../credentials";

const URL = "https://api.foursquare.com/v2/venues/explore";

export const fetchVenues = (
  location,
  category = "all",
  distance = 250,
  limit = 50
) => dispatch => {
  const config = {
    params: {
      ll: location,
      v: "20190821",
      limit,
      section: category,
      client_id: Credentials.CLIENT_ID,
      client_secret: Credentials.CLIENT_SECRET,
      radius: distance
    }
  };

  dispatch({
    type: actionTypes.FETCH_VENUES_REQUEST
  });
  axios
    .get(URL, config)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_VENUES_SUCCESS,
        venues: res.data.response.groups[0].items || []
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_VENUES_FAILURE,
        error
      });
    });
};

export const getClientLocation = () => dispatch => {
  dispatch({
    type: actionTypes.GET_CLIENT_LOCATION_REQUEST
  });

  try {
    navigator.geolocation.getCurrentPosition(location => {
      dispatch({
        type: actionTypes.GET_CLIENT_LOCATION_SUCCESS,
        location: `${location.coords.latitude},${location.coords.longitude}`
      });

      dispatch(
        fetchVenues(`${location.coords.latitude},${location.coords.longitude}`)
      );
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionTypes.GET_CLIENT_LOCATION_FAILURE,
      error: {
        message: "Couldn't get location."
      }
    });
  }
};
