export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';
export const IS_USER_LOGGED = 'IS_USER_LOGGED';
export const SET_LOGIN_PAGE = 'SET_LOGIN_PAGE';
export const SET_REGISTER_PAGE = 'SET_REGISTER_PAGE';
export const SET_FORGET_PASSWORD_PAGE = 'SET_PASSWORD_PAGE';

export const setEmailError = (hasError: boolean) => ({
  type: SET_EMAIL_ERROR,
  payload: hasError,
});

export const setPasswordError = (hasError: boolean) => ({
  type: SET_PASSWORD_ERROR,
  payload: hasError,
});

export const IsUserLogged = (isLogged: boolean) => ({
  type: IS_USER_LOGGED,
  payload: isLogged,
});

export const setRegister = () => ({
  type: SET_REGISTER_PAGE,
});

export const setForgetPassword = () => ({
  type: SET_FORGET_PASSWORD_PAGE,
});

export const setLogIn = () => ({
  type: SET_LOGIN_PAGE,
});
