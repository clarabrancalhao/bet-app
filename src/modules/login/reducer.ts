import {
  SET_EMAIL_ERROR,
  SET_FORGET_PASSWORD_PAGE,
  SET_LOGIN_PAGE,
  SET_PASSWORD_ERROR,
  SET_REGISTER_PAGE,
  IS_USER_LOGGED,
} from './actions';

interface IState {
  isLogged: boolean;
  emailError: boolean;
  passwordError: boolean;
  loginPage: string;
}

interface IAction {
  type: string;
  payload: boolean;
}

const initialState = {
  isLogged: false,
  emailError: false,
  passwordError: false,
  loginPage: 'login',
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

    case IS_USER_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    case SET_FORGET_PASSWORD_PAGE:
      return {
        ...state,
        loginPage: 'forgetPassword',
      };
    case SET_LOGIN_PAGE:
      return {
        ...state,
        loginPage: 'login',
      };

    case SET_REGISTER_PAGE:
      return {
        ...state,
        loginPage: 'register',
      };

    default:
      return state;
  }
}

export default login;
