import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './assets/css/style.css';

const Step = (props) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Redirect to="/login" />;
  }
  const { username, image } = props.dataUser;
  const IMG_URL = 'http://localhost:3001/';
  return (
    <>
      <title>Todo App</title>
      <div class="login-register-todoapp d-flex align-items-center justify-content-center flex-column">
        <div class="heading">
          <h2>TODO APP</h2>
          <h3>Be a human who doesn't forget to record his activities</h3>
        </div>
        <div class="box step">
          <div class="image text-center mb-2">
            <img src={`${IMG_URL}${image}`} alt="profile" />
          </div>
          <h2 className="text-capitalize">Hallo, {username}</h2>
          <p class="text-center">SCHEDULE YOUR ACTIVITIES</p>
          <div class="button text-center">
            <button>SKUYY</button>
          </div>
          <p className="text-center pt-3">
            go out?
            <Link to="/register">
              <span className="text-decoration-underline"> Logout</span>
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

export default Step;
