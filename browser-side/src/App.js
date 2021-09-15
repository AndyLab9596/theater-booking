import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ActiveLazyLoading from './components/ActiveLazyLoading';
import Loading from './components/Loading';
import CheckoutPage from './pages/Checkout';
// import DetailPage from './pages/Detail';
// import HomePage from './pages/Home';
// import pages
// import SignInPage from './pages/SignIn';
// import SignUpPage from './pages/SignUp';
import Testing from './pages/Testing';
import { fetchUser } from './store/actions/ManageUserAction';
// import template
// import AuthTemplate from './templates/AuthTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate';

import ModalTrailer from './components/ModalTrailer'

// Layout
const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));
const AuthTemplate = lazy(() => import('./templates/AuthTemplate'));

// Page
const HomePage = lazy(() => import('./pages/Home'))
const DetailPage = lazy(() => import('./pages/Detail'))
const SignInPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SignIn')), 500)
  })
})
const SignUpPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SignUp')), 500)
  })
})



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Loading />
        <ModalTrailer />

        <Suspense fallback={<ActiveLazyLoading />}>
          <Switch>
            <Route path="/testing" exact component={Testing} />
            <HomeTemplate path="/" exact Component={HomePage} />
            <HomeTemplate path="/detail/:id" exact Component={DetailPage} />
            <AuthTemplate path="/signin" exact Component={SignInPage} redirectPath="/" />
            <AuthTemplate path="/signup" exact Component={SignUpPage} redirectPath="/" />
            <CheckoutTemplate path="/checkout/:id" exact Component={CheckoutPage} redirectPath="/signin" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
