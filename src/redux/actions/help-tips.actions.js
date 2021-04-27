import axios from 'axios';

export const GET_HELPTIPS_REQUEST = 'GET_HELPTIPS_REQUEST';
export const GET_HELPTIPS_SUCCESS = 'GET_HELPTIPS_SUCCESS';
export const GET_HELPTIPS_ERROR = 'GET_HELPTIPS_ERROR';

export const getHelpTipsRequest = () => {
  return {
    type: GET_HELPTIPS_REQUEST
  }
}

export const getHelpTipsSuccess = (result) => {
  return {
    type: GET_HELPTIPS_SUCCESS,
    result
  }
}

export const getHelpTipsError = (error) => {
  return {
    type: GET_HELPTIPS_ERROR,
    error
  }
}

export const getHelpTips = () => {
  return function(dispatch) {
    dispatch(getHelpTipsRequest())

    axios
      .get(process.env.REACT_APP_HELP_TIPS)
      .then((result) => dispatch(getHelpTipsSuccess(result.data)))
      .catch((error) => dispatch(getHelpTipsError(error)))
  }
}