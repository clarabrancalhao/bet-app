import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { getGames } from './modules/games/actions';
import { IsUserLogged } from './modules/login/actions';
import Home from './pages/Home';
import Login from './pages/Login';
import NewGame from './pages/NewGame';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootStateOrAny) => state.login.isLogged);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(IsUserLogged(true));
    }
    dispatch(getGames());
  }, [dispatch]);

  if (!isLogged) {
    return (
      <BrowserRouter>
        <Redirect to="/login" />
        <Login />
        <ToastContainer style={{ fontSize: '3.2rem' }} />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <Home />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
        <Route path="/new-bet">
          <NewGame />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
