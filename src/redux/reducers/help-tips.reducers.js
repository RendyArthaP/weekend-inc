import {
  GET_HELPTIPS_REQUEST,
  GET_HELPTIPS_SUCCESS,
  GET_HELPTIPS_ERROR
} from '../actions/help-tips.actions.js';

const initialState = {
  data: [],
  error: null
}

const handleHelpTips = (state = initialState, action) => {
  switch(action.type) {
    case GET_HELPTIPS_REQUEST:
      return {
        ...state
      }
    case GET_HELPTIPS_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_HELPTIPS_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default handleHelpTips;