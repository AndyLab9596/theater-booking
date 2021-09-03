import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import pages
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/signin" exact component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
