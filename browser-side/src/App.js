import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/Detail';
import HomePage from './pages/Home';
// import pages
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Testing from './pages/Testing';
import { fetchUser } from './store/actions/ManageUserAction';
// import template
import AuthTemplate from './templates/AuthTemplate';
import { PrivateHomeTemplate, PublicHomeTemplate } from './templates/HomeTemplate';




function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/testing" exact component={Testing} />
          <PublicHomeTemplate path="/" exact Component={HomePage} />
          <PrivateHomeTemplate path="/detail/:id" redirectPath="/" exact Component={DetailPage} />
          <AuthTemplate path="/signin" exact Component={SignInPage} redirectPath="/" />
          <AuthTemplate path="/signup" exact Component={SignUpPage} redirectPath="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
