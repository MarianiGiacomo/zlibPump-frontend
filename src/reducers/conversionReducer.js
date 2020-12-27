import { SET_BOXS_VALUES, CHANGE_VALUE } from '../actions';

const DEFAULT = {
  deflatedHex: '',
  deflatedBase64: '',
  inflatedAscii: '',
  inflatedHex: '',
};

const conversionReducer = (state = DEFAULT, action) => {
  let keys;
  switch (action.type) {
    case SET_BOXS_VALUES:
      return {
        ...action.payload,
      };
    case CHANGE_VALUE:
      keys = Object.keys(action.payload);
      return {
        ...state, [keys[0]]: action.payload[keys[0]],
      };
    default:
      return state;
  }
};

export default conversionReducer;
