import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { getGames } from './modules/games/actions';
import Home from './pages/Home';
import Login from './pages/Login';
import NewGame from './pages/NewGame';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
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
