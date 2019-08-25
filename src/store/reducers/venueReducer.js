import * as actionTypes from "../actions/actionTypes";

const initialState = {
  venues: [],
  isLoading: false,
  error: null,
  location: ""
};

const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VENUES_REQUEST:
      return { ...state, isLoading: true, venues: [], error: null };
    case actionTypes.FETCH_VENUES_SUCCESS:
      return { ...state, isLoading: false, venues: action.venues, error: null };
    case actionTypes.FETCH_VENUES_FAILURE:
      return { ...state, isLoading: false, venues: [], error: action.error };
    case actionTypes.GET_CLIENT_LOCATION_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.GET_CLIENT_LOCATION_SUCCESS:
      return { ...state, isLoading: false, location: action.location };
    case actionTypes.GET_CLIENT_LOCATION_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default venueReducer;
