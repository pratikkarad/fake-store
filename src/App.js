import LoginPage from './components/LoginPage';
import Menu from './components/Menu';
import { Route, Switch } from 'react-router';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/dashboard" exact render={() => <HomePage/>} />
        <Route path="/category/:categoryName" exact render={() => <HomePage/>} />
        <Route path="/" exact render={() => <LoginPage/>} />
      </Switch>
    </div>
  );
}

export default App;
