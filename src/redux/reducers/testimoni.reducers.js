import {
  GET_TESTIMONI_REQUEST,
  GET_TESTIMONI_SUCCESS,
  GET_TESTIMONI_ERROR
} from '../actions/testimoni.actions.js';

const initialState = {
  data: [],
  error: null
}

const handleTestimonial = (state = initialState, action) => {
  switch(action.type) {
    case GET_TESTIMONI_REQUEST:
      return {
        ...state
      }
    case GET_TESTIMONI_SUCCESS: 
      return {
        ...state,
        data: action.result
      }
    case GET_TESTIMONI_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default handleTestimonial