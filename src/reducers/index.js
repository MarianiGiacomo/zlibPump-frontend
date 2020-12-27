import { combineReducers } from 'redux';
import conversionReducer from './conversionReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  values: conversionReducer,
  modal: modalReducer,
});
