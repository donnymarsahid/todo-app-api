import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/style.css';

const Login = () => {
  return (
    <>
      <title>Login | Todo App</title>
      <div class="login-register-todoapp  d-flex align-items-center justify-content-center flex-column">
        <div class="heading">
          <h2>TODO APP</h2>
          <h3>Be a human who doesn't forget to record his activities</h3>
        </div>
        <div class="box">
          <h2>LOGIN</h2>
          <form className="d-flex flex-column">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" className="mb-3" placeholder="Enter your username" required />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" className="mb-5" placeholder="Enter your password" required />
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
    </>
  );
};

export default Login;
