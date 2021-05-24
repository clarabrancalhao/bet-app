import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NewGame from './pages/NewGame';

const App = () => {
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
