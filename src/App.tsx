import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { getGames } from './modules/games/actions';
import Home from './pages/Home';
import Login from './pages/Login';
import NewGame from './pages/NewGame';

const App = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state);

  console.log(games);

  useEffect(() => {
    dispatch(getGames());
  }, []);

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
