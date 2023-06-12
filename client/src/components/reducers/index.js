import { combineReducers } from "redux";
import reviewsReducer from "./reviewsReducer";
import userReducer from "./userReducer";
import errorsReducer from "./ErrorsReducer";

export default combineReducers({
  reviewsReducer,
  userReducer,
  errorsReducer,
});
