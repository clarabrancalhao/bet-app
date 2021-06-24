import { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { getGames } from './modules/games/actions'
import { setUserLogged, setLoading } from './modules/login/actions'
import Home from './pages/Home'
import Login from './pages/Login'
import NewGame from './pages/NewGame'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Account from './pages/Account'
import NotFound from './pages/NotFound'

const App = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector((state: RootStateOrAny) => state.login.isLogged)
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.login.isLoading
  )

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setLoading(true))
      dispatch(setUserLogged(true))
    }
    dispatch(setLoading(false))
    dispatch(getGames())
  }, [dispatch])

  if (isLoading) {
    return <h1>LOADING...</h1>
  }

  /*if (!isLogged && isLoading === false) {
    return (
      <BrowserRouter>
        <Redirect to="/login" />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/reset-password">
          <Account />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
        <ToastContainer style={{ fontSize: '3.2rem' }} />
      </BrowserRouter>
    )
  }*/

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {isLogged && <Redirect to="/" />}
          <Login />
        </Route>
        <Route path="/reset-password">
          <Account />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
        <Route path="/" exact>
          {!isLogged && <Redirect to="/login" />}
          <Home />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
        <Route path="/new-bet">
          {!isLogged && <Redirect to="/login" />}
          <NewGame />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
        <Route path="/account">
          {!isLogged && <Redirect to="/login" />}
          <Account />
          <ToastContainer style={{ fontSize: '3.2rem' }} />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
