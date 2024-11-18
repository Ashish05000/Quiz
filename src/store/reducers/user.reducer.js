import STORE_TYPES from "../types";

const initialState = {
  username: null,
  subject: null,
  result: null,
};
const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TYPES.SAVE_USER_INFO:
      return action.payload;
    case STORE_TYPES.EXIT_QUIZ:
      return { ...state, subject: null };
    case STORE_TYPES.GET_RESULT:
      return { ...state, result: action.payload };
      case STORE_TYPES.RESET_QUIZ:
        return initialState;
    default:
      return state;
  }
};

export default userInfoReducer;
