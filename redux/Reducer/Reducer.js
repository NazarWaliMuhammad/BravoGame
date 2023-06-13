import {SET_TIMER} from '../ActionTyped';
const INITIAL = {
  time: 300,
};
export const Reducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {...state, time: action.payload};
    default:
      return state;
  }
};
