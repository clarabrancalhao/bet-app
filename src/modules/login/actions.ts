import axios from 'axios';
import { notify } from '../../utils/notify';

export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';
export const SET_USER_LOGGED = 'SET_USER_LOGGED';
export const SET_LOGIN_PAGE = 'SET_LOGIN_PAGE';
export const SET_REGISTER_PAGE = 'SET_REGISTER_PAGE';
export const SET_FORGET_PASSWORD_PAGE = 'SET_PASSWORD_PAGE';
export const CHANGE_PASSWORD_PENDING = 'CHANGE_PASSWORD_PENDING';
export const SET_SECOND_PASSWORD_ERROR = 'SET_SECOND_PASSWORD_ERROR';
export const SET_LOADING = 'SET_LOADING';

export const changePassword = (password: string) => {
  return (dispatch: any) => {
    dispatch(changePasswordPending());
    const token = localStorage.getItem('token');
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBDvRVhhs1CoFEH3t9yuBMshFMY5MD3yI4',
        JSON.stringify({
          idToken: token,
          password: password,
          returnSecureToken: false,
        }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(() => {
        notify('Success');
      })
      .catch((err) => notify(err.message));
  };
};

export const setEmailError = (hasError: boolean) => ({
  type: SET_EMAIL_ERROR,
  payload: hasError,
});

export const setPasswordError = (hasError: boolean) => ({
  type: SET_PASSWORD_ERROR,
  payload: hasError,
});

export const setSecondPasswordError = (hasError: boolean) => ({
  type: SET_SECOND_PASSWORD_ERROR,
  payload: hasError,
});

export const setUserLogged = (isLogged: boolean) => ({
  type: SET_USER_LOGGED,
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

export const setLoading = (value: boolean) => ({
  type: SET_LOADING,
  payload: value,
});

const changePasswordPending = () => ({
  type: CHANGE_PASSWORD_PENDING,
});
