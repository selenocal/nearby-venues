import { combineReducers } from "redux";
import venueReducer from "./venueReducer";

export default combineReducers({
  venue: venueReducer
});
