import ActionTypes from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case ActionTypes.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case ActionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case ActionTypes.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case ActionTypes.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case ActionTypes.FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case ActionTypes.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
