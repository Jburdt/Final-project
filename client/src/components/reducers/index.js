import { combineReducers } from "redux";
import reviewsReducer from "./reviewsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  reviewsReducer,
  userReducer
});