import { ADD_FEEDBACK_SUCCESS } from "../constants/index.js"
import axios from "axios"

export const addFeedback = (form) => async (dispatch) => {
  const { data } = await axios.post('https://feedback-react-nest.herokuapp.com/createFeedback', form);

  dispatch({
    type: ADD_FEEDBACK_SUCCESS,
    payload: data
  })
}