import ActionTypes from '../types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;
