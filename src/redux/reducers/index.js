import { combineReducers } from 'redux';
import handleHelpTips from './help-tips.reducers';
import handleTestimonial from './testimoni.reducers';

const rootReducers = combineReducers({
  handleHelpTips,
  handleTestimonial
})

export default rootReducers