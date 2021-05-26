export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const EMAIL_OK = 'EMAIL_OK';
export const PASSWORD_OK = 'PASSWORD_OK';

export const emailError = (hasError: boolean) => ({
  type: SET_EMAIL_ERROR,
  payload: hasError,
});

export const passwordError = (hasError: boolean) => ({
  type: SET_PASSWORD_ERROR,
  payload: hasError,
});

export const userLogin = (isLogged: boolean) => ({
  type: USER_LOGIN,
  payload: isLogged,
});

export const emailOk = (isOk: boolean) => ({
  type: EMAIL_OK,
  payload: isOk,
});

export const passwordOk = (isOk: boolean) => ({
  type: PASSWORD_OK,
  payload: isOk,
});
