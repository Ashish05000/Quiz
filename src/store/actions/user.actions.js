import STORE_TYPES from "../types";
export const saveUserInfo_action = (data) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_TYPES.SAVE_USER_INFO,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

