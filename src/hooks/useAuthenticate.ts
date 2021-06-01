import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IsUserLogged } from '../modules/login/actions';
import axios from 'axios';
import { notify } from '../utils/notify';

const useAuthenticate = () => {
  const loginPage: string = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAuthentication = (emailValue: string, passwordValue: string) => {
    const url =
      loginPage === 'register'
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    axios
      .post(
        `${url}AIzaSyBDvRVhhs1CoFEH3t9yuBMshFMY5MD3yI4`,
        JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        localStorage.setItem('token', response.data['idToken']);
        dispatch(IsUserLogged(true));
        history.push('/');
      })
      .catch(() => notify('Email or password incorrect.'));
  };

  return handleAuthentication;
};

export default useAuthenticate;
