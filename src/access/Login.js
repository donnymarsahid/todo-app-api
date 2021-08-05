import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './assets/css/style.css';
import api from '../api/server';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .post('/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.message) {
          setStatus(res.data.message);
          setTimeout(() => {
            setStatus('');
          }, 3000);
        } else {
          props.dataUserFunction(res.data.data);
          localStorage.setItem('token', res.data.token);
          setRedirect(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Fragment>
        {redirect && <Redirect to="/step" />}
        <title>Login | Todo App</title>
        <div class="login-register-todoapp  d-flex align-items-center justify-content-center flex-column">
          <div class="heading">
            <h2>TODO APP</h2>
            <h3>Be a human who doesn't forget to record his activities</h3>
          </div>
          <div class="box">
            <h2>LOGIN</h2>
            {status && (
              <div class="alert alert-primary" role="alert">
                {status}
              </div>
            )}
            <form className="d-flex flex-column" onSubmit={handlerSubmit}>
              <label for="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="mb-3"
                placeholder="Enter your username"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="mb-3"
                placeholder="Enter your password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div class="button d-flex justify-content-center">
                <button type="submit">LOGIN</button>
              </div>
            </form>
            <p className="text-center pt-3">
              No have account ?{' '}
              <Link to="/register">
                <span className="text-decoration-underline">Sign Up</span>
              </Link>{' '}
            </p>
          </div>
          <p className="m-0">Dont forget follow donny :)</p>
          <div class="sosmed">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-dribbble"></i>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Login;
