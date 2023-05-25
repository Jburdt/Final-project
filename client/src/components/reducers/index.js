import { combineReducers } from "redux";
import reviewsReducer from "./reviewsReducer";
import userReducer from "./userReducer";
// import commentsReducer from "./CommentsReducer";
import errorsReducer from "./ErrorsReducer";

export default combineReducers({
  reviewsReducer,
  userReducer,
  // commentsReducer,
  errorsReducer
});