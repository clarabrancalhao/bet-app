import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { getGames } from './modules/games/actions';
import { userLogin } from './modules/login/actions';
import Home from './pages/Home';
import Login from './pages/Login';
import NewGame from './pages/NewGame';

const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootStateOrAny) => state.login.isLogged);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(userLogin(true));
    }
    dispatch(getGames());
  }, [dispatch]);

  if (!isLogged) {
    return (
      <BrowserRouter>
        <Redirect to="/login" />
        <Login />
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
        </Route>
        <Route path="/new-bet">
          <NewGame />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
