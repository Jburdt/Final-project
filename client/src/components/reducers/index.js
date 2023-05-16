import { combineReducers } from "redux";
import reviewsReducer from "./reviewsReducer";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  reviewsReducer,
  userReducer,
  categoriesReducer
});