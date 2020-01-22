import { SET_USER, REMOVE_USER } from '../actionTypes';

const initialState = {
  isLoggedIn: false,
  userName: '',
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.userName,
      }
    case REMOVE_USER: {
      return initialState;
    }
    default:
      return state;
  }
}

export default account;
