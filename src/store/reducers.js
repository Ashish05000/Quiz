import { combineReducers } from "redux";
import userInfoReducer from "./reducers/user.reducer";
// Combine all your reducers
const appReducer = combineReducers({
  userInfo:userInfoReducer
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
