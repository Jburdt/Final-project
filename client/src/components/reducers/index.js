import { combineReducers } from "redux";
import reviewsReducer from "./reviewsReducer";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import commentsReducer from "./CommentsReducer";
import errorsReducer from "./Errors.Reducer";

export default combineReducers({
  reviewsReducer,
  userReducer,
  categoriesReducer,
  commentsReducer,
  errorsReducer
});