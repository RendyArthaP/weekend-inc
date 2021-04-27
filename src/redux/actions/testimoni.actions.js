import axios from 'axios';

export const GET_TESTIMONI_REQUEST = 'GET_TESTIMONI_REQUEST';
export const GET_TESTIMONI_SUCCESS = 'GET_TESTIMONI_SUCCESS';
export const GET_TESTIMONI_ERROR = 'GET_TESTIMONI_ERROR';

export const getTestimoniRequest = () => {
  return {
    type: GET_TESTIMONI_REQUEST
  }
}

export const getTestimoniSuccess = (result) => {
  return {
    type: GET_TESTIMONI_SUCCESS,
    result
  }
}

export const getTestimoniError = (error) => {
  return {
    type: GET_TESTIMONI_ERROR,
    error
  }
}

export const getTestimoni = () => {
  return function(dispatch) {
    dispatch(getTestimoniRequest())

    axios
      .get(process.env.REACT_APP_TESTIMONI)
      .then((result) => dispatch(getTestimoniSuccess(result.data)))
      .catch((error) => dispatch(getTestimoniError(error)))
  }
}