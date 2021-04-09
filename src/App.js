import LoginPage from './components/LoginPage';
import Menu from './components/Menu';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/" exact render={() => <LoginPage/>} />
      </Switch>
    </div>
  );
}

export default App;
