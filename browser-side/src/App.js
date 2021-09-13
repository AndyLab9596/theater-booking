import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import CheckoutPage from './pages/Checkout';
import DetailPage from './pages/Detail';
import HomePage from './pages/Home';
// import pages
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Testing from './pages/Testing';
import { fetchUser } from './store/actions/ManageUserAction';
// import template
import AuthTemplate from './templates/AuthTemplate';
import { CheckoutTemplate } from './templates/CheckoutTemplate';
import { PrivateHomeTemplate, PublicHomeTemplate } from './templates/HomeTemplate';




function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Loading />
        <Switch>
          <Route path="/testing" exact component={Testing} />
          <PublicHomeTemplate path="/" exact Component={HomePage} />
          <PublicHomeTemplate path="/detail/:id" exact Component={DetailPage} />
          <AuthTemplate path="/signin" exact Component={SignInPage} redirectPath="/" />
          <AuthTemplate path="/signup" exact Component={SignUpPage} redirectPath="/" />
          <CheckoutTemplate path="/checkout/:id" exact Component={CheckoutPage} redirectPath="/signin" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
