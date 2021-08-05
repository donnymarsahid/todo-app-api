import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './access/Login';
import Register from './access/Register';
import Step from './access/Step';
import TodoApp from './todo/TodoApp';

const App = () => {
  const [dataUser, setDataUser] = useState([]);

  const dataUserFunction = (data) => {
    setDataUser(data);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} dataUserFunction={dataUserFunction} />} />
          <Route path="/register" component={Register} />
          <Route path="/step" render={(props) => <Step {...props} dataUser={dataUser} />} />
          <Route path="/" render={(props) => <TodoApp {...props} dataUser={dataUser} />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
