import React from 'react';
import './assets/css/style.css';
import './assets/css/responsive.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <title>Register | Todo App</title>
      <div class="login-register-todoapp  register d-flex align-items-center justify-content-center flex-column">
        <div class="heading">
          <h2>TODO APP</h2>
          <h3>Be a human who doesn't forget to record his activities</h3>
        </div>
        <div class="box">
          <h2>Register</h2>
          <form className="d-flex flex-column">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter your username" required />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" required />
            <label for="image">Upload Your Photo</label>
            <input type="file" name="image" id="image" className="mb-2 custom-file-input" required />
            <div class="button d-flex justify-content-center">
              <button type="submit">REGISTER</button>
            </div>
          </form>
          <p className="text-center pt-2">
            Have account ?{' '}
            <Link to="/login">
              <span className="text-decoration-underline">Login</span>
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

export default Register;
