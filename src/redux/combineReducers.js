import { combineReducers } from "@reduxjs/toolkit";
import urlCallReducer from "./apiCalls/urlCallReducer";

const rootReducer = combineReducers({
  urlCall: urlCallReducer,
});

export default rootReducer;
