import STORE_TYPES from "../types";
export const exitQuiz_action = () => async (dispatch) => {
  try {
    dispatch({
      type: STORE_TYPES.EXIT_QUIZ
    });
  } catch (e) {
    console.log(e);
  }
};

export const quizResult_action = (data) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_TYPES.GET_RESULT,
      payload:data
    });
  } catch (e) {
    console.log(e);
  }
};

export const retake_action = () => async (dispatch) => {
  try {
    dispatch({
      type: STORE_TYPES.RESET_QUIZ,
    });
  } catch (e) {
    console.log(e);
  }
};

