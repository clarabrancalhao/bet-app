import {
  EMAIL_OK,
  PASSWORD_OK,
  SET_EMAIL_ERROR,
  SET_PASSWORD_ERROR,
  USER_LOGIN,
} from './actions';

interface IState {
  isLogged: boolean;
  emailError: boolean;
  passwordError: boolean;
}

interface IAction {
  type: string;
  payload: boolean;
}

const initialState = {
  isLogged: false,
  emailError: false,
  passwordError: false,
};

function login(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case SET_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.payload,
      };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload,
      };

    case EMAIL_OK:
      return { ...state, emailOk: action.payload };

    case PASSWORD_OK:
      return {
        ...state,
        passwordOk: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
}

export default login;
