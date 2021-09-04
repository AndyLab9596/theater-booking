import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import pages
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

// import template
import AuthTemplate from './templates/AuthTemplate';
import HomeTemplate from './templates/HomeTemplate';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HomeTemplate path="/" exact Component={HomePage} />
          <AuthTemplate path="/signin" exact Component={SignInPage} redirectPath="/" />
          <AuthTemplate path="/signup" exact Component={SignUpPage} redirectPath="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
