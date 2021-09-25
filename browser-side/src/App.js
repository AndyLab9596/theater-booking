import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ActiveLazyLoading from './components/ActiveLazyLoading';
import Loading from './components/Loading';
import ModalTrailer from './components/ModalTrailer';
import Testing from './pages/Testing';
import { fetchUser } from './store/actions/ManageUserAction';
import { TAIKHOAN } from './utils/config';



// Layout
const HomeTemplate = lazy(() => import('./templates/HomeTemplate'));
const AuthTemplate = lazy(() => import('./templates/AuthTemplate'));
const CheckoutTemplate = lazy(() => import('./templates/CheckoutTemplate'));


// Page
const HomePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Home')), 500)
  })
})
const DetailPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Detail')), 700)
  })
})
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
const CheckoutPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Checkout')), 500)
  })
})
const NotFound = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/NotFound')), 500)
  })
})


function App() {

  const dispatch = useDispatch()
  // API này yêu cầu là lấy tài khoản chứ ko phải token
  useEffect(() => {
    if (localStorage.getItem(TAIKHOAN)) {
      dispatch(fetchUser({ taiKhoan: localStorage.getItem(TAIKHOAN) }))
    }
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Loading />
        <ModalTrailer />
        <Suspense fallback={<ActiveLazyLoading />}>
          <Switch>
            <HomeTemplate path="/" exact Component={HomePage} />
            <HomeTemplate path="/page/:number" exact Component={HomePage} />
            <HomeTemplate path="/detail/:id" exact Component={DetailPage} />
            <AuthTemplate path="/signin" exact Component={SignInPage} redirectPath="/" />
            <AuthTemplate path="/signup" exact Component={SignUpPage} redirectPath="/" />
            <CheckoutTemplate path="/checkout/:id" exact Component={CheckoutPage} redirectPath="/signin" />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
