import { ADD_FEEDBACK_SUCCESS } from "../constants/index.js";

const addFeedbackReducer = (state = {}, action) => {
  if (action.type === ADD_FEEDBACK_SUCCESS)
      return action.payload
  else return state
}

export default addFeedbackReducer