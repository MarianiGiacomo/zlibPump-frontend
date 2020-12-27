import { MODAL } from '../actions';

const DEFAULT = { open: false, message: '' };

const modalReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case MODAL:
      if (action.payload.open) {
        return {
          ...state, open: true, message: action.payload.message,
        };
      }
      return {
        ...state, open: false, message: '',
      };
    default:
      return state;
  }
};

export default modalReducer;
