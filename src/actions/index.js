// Action types
export const SET_BOXS_VALUES = 'SET_BOXS_VALUES';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const MODAL = 'MODAL';

// Action creators. Create action objects to be passed to the dispatcher
export const actionSetTextBoxesValues = values => (
  { type: SET_BOXS_VALUES, payload: values }
);

export const actionChangeValue = value => (
  { type: CHANGE_VALUE, payload: value }
);

export const actionSetModal = value => (
  { type: MODAL, payload: value }
);
