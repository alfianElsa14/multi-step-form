import { produce } from 'immer';
import { SET_ADD, SET_INFO, SET_PRICE, SET_STEP } from './constants';

export const initialState = {
  step: 1,
  info: {
    name: "",
    email: "",
    phone: ""
  },
  price: 0,
  add: {}
};

export const storedKey = ['locale', 'theme', 'step', 'info', 'price', 'add'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step
        break;
      case SET_INFO:
        draft.info = action.info
        break;
      case SET_PRICE:
        draft.price = action.price
        break;
      case SET_ADD:
        draft.add = action.add
        break;
    }
  });

export default homeReducer;