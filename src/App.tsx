import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import NewBet from './components/NewBetContainer';
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

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {!isLogged && <Login />}
          {isLogged && <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          {isLogged && <Home />}
          {!isLogged && <Redirect to="/login" />}
        </Route>
        <Route path="/new-bet">
          {isLogged && <NewGame />}
          {!isLogged && <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
