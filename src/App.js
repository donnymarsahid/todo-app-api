import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './access/Login';
import Register from './access/Register';
import Step from './access/Step';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/step" component={Step} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
